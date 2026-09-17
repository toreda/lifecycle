/**
 *	MIT License
 *
 *	Copyright (c) 2019 – 2026 Toreda, Inc.
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:

 * 	The above copyright notice and this permission notice shall be included in all
 * 	copies or substantial portions of the Software.
 *
 * 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * 	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * 	SOFTWARE.
 *
 */

import {type LogLike} from '../log/like';
import type {TxnDelegate} from './delegate';
import {invokeListeners} from '../invoke/listeners';

/**
 * Phase names used in transaction (txn) lifecycle flow.
 *
 * Phases come in `Will` / `On` / `Did` triplets around an action verb:
 *
 * - `Will*` — fires immediately before the action. Last chance to prepare,
 *   gate, or short-circuit.
 * - `On*` — fires as the action occurs (the synchronous moment of the
 *   transition itself).
 * - `Did*` — fires immediately after the action. Use for cleanup,
 *   post-conditions, downstream notifications.
 *
 * Happy path ordering: `Begin` → (work) → `Validate` → `Prepare` → `Commit`
 * → `Succeed`. `Succeed`, `Fail`, `Cancel`, `Timeout`, and `Interrupt` are
 * distinct outcomes — at most one fires per transaction run. `Revert` rolls
 * back applied changes after a non-success outcome (or a caller-initiated
 * undo).
 *
 * Sub-namespaces:
 * - `txnRevert*` — phases scoped to the revert (rollback) operation itself.
 *   A revert can fail independently of the transaction (`txnRevertWill/On/DidFail`),
 *   leaving state partially applied — the most important error condition in
 *   transaction processing, so it gets its own hooks.
 *
 * @category Transactions
 */
export type TxnPhase =
	/** Transaction finished beginning — it is now active and accepting work. */
	| 'txnDidBegin'
	/** Transaction finished being canceled. Cancel is a caller-initiated abort before completion — distinct from `Fail` (error) and `Interrupt` (external cause). */
	| 'txnDidCancel'
	/** Transaction's changes finished being durably applied. Final step of the commit sequence (`Validate` → `Prepare` → `Commit`); `Succeed` fires after. */
	| 'txnDidCommit'
	/** Transaction finished being marked failed — an error terminal outcome. A `Revert` typically follows if changes were partially applied. */
	| 'txnDidFail'
	/** Transaction finished being interrupted by an external cause (process signal, system event, connection loss). Distinct from `Cancel` (caller-initiated) and `Fail` (error in the transaction itself). */
	| 'txnDidInterrupt'
	/** Transaction finished pausing — work is halted but state is preserved. Inverse is `Unpause`. */
	| 'txnDidPause'
	/** Prepare step finished — resources reserved and/or participants voted to commit (two-phase commit). Fires between `Validate` and `Commit`. */
	| 'txnDidPrepare'
	/** Rollback finished — previously applied changes were undone. Follows a non-success outcome or a caller-initiated undo. If the rollback itself fails, `txnRevert*Fail` fires instead of `txnDidRevert`. */
	| 'txnDidRevert'
	/** Transaction finished successfully — validated, prepared, and committed. Terminal success outcome; fires after `txnDidCommit`. */
	| 'txnDidSucceed'
	/** Transaction's deadline elapsed before completion. Terminal outcome distinct from `Fail`. */
	| 'txnDidTimeout'
	/** Transaction finished resuming from pause. Inverse of `Pause`. */
	| 'txnDidUnpause'
	/** Validation finished — the transaction's changes were checked against constraints/invariants. Fires before `Prepare`. */
	| 'txnDidValidate'
	/** Transaction begins in this synchronous moment. */
	| 'txnOnBegin'
	/** Transaction is canceled in this synchronous moment (caller-initiated abort). */
	| 'txnOnCancel'
	/** Transaction's changes are durably applied in this synchronous moment. */
	| 'txnOnCommit'
	/** Transaction is marked failed in this synchronous moment. */
	| 'txnOnFail'
	/** Transaction is interrupted in this synchronous moment (external cause). */
	| 'txnOnInterrupt'
	/** Transaction pauses in this synchronous moment. */
	| 'txnOnPause'
	/** Prepare step runs in this synchronous moment (resource reservation / two-phase-commit vote). */
	| 'txnOnPrepare'
	/** Rollback runs in this synchronous moment. */
	| 'txnOnRevert'
	/** Transaction succeeds in this synchronous moment. */
	| 'txnOnSucceed'
	/** Transaction times out in this synchronous moment. */
	| 'txnOnTimeout'
	/** Transaction resumes from pause in this synchronous moment. */
	| 'txnOnUnpause'
	/** Validation runs in this synchronous moment. */
	| 'txnOnValidate'
	/** Revert (rollback) attempt finished failing — changes may be partially applied. Hook for alerting, compensating actions, or flagging for manual recovery. */
	| 'txnRevertDidFail'
	/** Revert (rollback) attempt fails in this synchronous moment. */
	| 'txnRevertOnFail'
	/** Revert (rollback) attempt is about to be marked failed. Last hook before the failure is recorded. */
	| 'txnRevertWillFail'
	/** Transaction is about to begin. Last hook for setup, acquiring locks, or gating. */
	| 'txnWillBegin'
	/** Transaction is about to be canceled (caller-initiated abort). */
	| 'txnWillCancel'
	/** Transaction's changes are about to be durably applied. Last hook before the commit is issued. */
	| 'txnWillCommit'
	/** Transaction is about to be marked failed. */
	| 'txnWillFail'
	/** Transaction is about to be interrupted (external cause). */
	| 'txnWillInterrupt'
	/** Transaction is about to pause. Hook for snapshotting transient state. */
	| 'txnWillPause'
	/** Prepare step is about to run. Hook for last-chance resource checks before reservation. */
	| 'txnWillPrepare'
	/** Rollback is about to run. Hook for capturing state before changes are undone. */
	| 'txnWillRevert'
	/** Transaction is about to be marked successful. */
	| 'txnWillSucceed'
	/** Transaction is about to be marked timed out. Hook for last-chance deadline extension. */
	| 'txnWillTimeout'
	/** Transaction is about to resume from pause. Inverse of `Pause`. */
	| 'txnWillUnpause'
	/** Validation is about to run. Hook for choosing validation strategy or short-circuiting. */
	| 'txnWillValidate';

/**
 *
 * @param delegate
 * @param phase
 *
 * @category Transactions
 */
export async function txnPhase<ArgsT = unknown>(
	phase: TxnPhase,
	delegate: TxnDelegate<ArgsT> | TxnDelegate<ArgsT>[],
	base?: LogLike
): Promise<boolean> {
	return invokeListeners<TxnPhase, TxnDelegate<ArgsT>>({
		phase: phase,
		delegate: delegate,
		base: base
	});
}
