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
import {invokeListeners} from '../invoke/listeners';
import {type ComponentDelegate} from './delegate';

/**
 * Phase names used in the component lifecycle flow.
 *
 * A component is a reusable UI / logic unit with its own config, persisted
 * state, and init → load → start → stop lifecycle.
 *
 * Most phases come in `Will` / `On` / `Did` triplets around an action verb:
 *
 * - `Will*` — fires immediately before the action. Last chance to prepare,
 *   gate, or short-circuit.
 * - `On*` — fires as the action occurs (the synchronous moment of the
 *   transition itself).
 * - `Did*` — fires immediately after the action. Use for cleanup,
 *   post-conditions, downstream notifications.
 *
 * Sub-namespaces:
 * - `componentCfg*Change` — phases scoped to mutation of the component's
 *   config object, distinct from the component's own lifecycle transitions.
 *   A config change may occur at any point once the component exists, and may
 *   in turn trigger a reload.
 *
 * Reactive-only phases:
 * - `componentOnError`, `componentOnException` and `componentOnMemoryWarning`
 *   have no `Will` or `Did` form because they arrive without notice — nothing
 *   can be scheduled before them.
 *
 * @category Components
 */
export type ComponentPhase =
	/** Component config finished changing. Hook for re-deriving cached values, re-binding dependencies, or triggering a reload. */
	| 'componentCfgDidChange'
	/** Component config is mutated in this synchronous moment — the implementation that applies the new values. */
	| 'componentCfgOnChange'
	/** Component config is about to change. Hook for capturing the prior config or validating the incoming values before they take effect. */
	| 'componentCfgWillChange'
	/** Component finished its become-ready transition — initialized, loaded, and accepting interaction. Distinct from `Init` (constructed) and `Load` (assets/state ready). */
	| 'componentDidBecomeReady'
	/** Component finished gaining input focus — it is now the active target for keyboard / pointer input. */
	| 'componentDidGainFocus'
	/** Component finished its one-time initialization. Construction is complete; safe to reference dependencies. */
	| 'componentDidInit'
	/** Component finished loading its assets / templates / persisted state. Distinct from init: load may be re-run, init runs once. */
	| 'componentDidLoad'
	/** Component finished giving up input focus. */
	| 'componentDidLoseFocus'
	/** Component finished pausing — its update / render / timer work is halted but state is preserved. */
	| 'componentDidPause'
	/** Component finished reloading — its assets / config were re-read and reapplied without a full re-init. */
	| 'componentDidReload'
	/** Component finished writing its state to persistent storage. Hook for confirming the write or clearing dirty flags. */
	| 'componentDidSaveState'
	/** Component finished starting its active behavior (post-init, post-load). */
	| 'componentDidStart'
	/** Component finished stopping its active behavior. State is preserved (unlike teardown). */
	| 'componentDidStop'
	/** Component finished resuming from a paused state. */
	| 'componentDidUnpause'
	/** Component becomes ready in this synchronous moment — the implementation that performs the readiness handoff. */
	| 'componentOnBecomeReady'
	/** A recoverable error occurred within the component (e.g. a failed fetch, invalid input). Reactive only — there is no `Will` or `Did` form because the error arrives without notice. Distinct from `componentOnException`: the component remains usable. */
	| 'componentOnError'
	/** An unhandled exception was thrown inside the component. Reactive only — there is no `Will` or `Did` form because the exception arrives without notice. Distinct from `componentOnError`: the component's state may be inconsistent. */
	| 'componentOnException'
	/** Component gains input focus in this synchronous moment. */
	| 'componentOnGainFocus'
	/** Component performs its one-time initialization in this synchronous moment. */
	| 'componentOnInit'
	/** Component loads its assets / templates / persisted state in this synchronous moment. */
	| 'componentOnLoad'
	/** Component gives up input focus in this synchronous moment. */
	| 'componentOnLoseFocus'
	/** OS / runtime is signaling memory pressure. Reactive only — there is no `Will` or `Did` form because the warning arrives without notice. Listeners should free non-essential caches / buffers. */
	| 'componentOnMemoryWarning'
	/** Component pauses in this synchronous moment — the implementation that halts its update / render work. */
	| 'componentOnPause'
	/** Component re-reads and reapplies its assets / config in this synchronous moment. */
	| 'componentOnReload'
	/** Component writes its state to persistent storage in this synchronous moment — the implementation that serializes and stores. */
	| 'componentOnSaveState'
	/** Component starts its active behavior in this synchronous moment. */
	| 'componentOnStart'
	/** Component stops its active behavior in this synchronous moment. State is preserved. */
	| 'componentOnStop'
	/** Component resumes from pause in this synchronous moment. */
	| 'componentOnUnpause'
	/** Component is about to enter its ready state. Last hook before consumers may interact with it. */
	| 'componentWillBecomeReady'
	/** Component is about to gain input focus. Hook for gating focus (e.g. disabled / read-only checks). */
	| 'componentWillGainFocus'
	/** Component is about to run its one-time initialization. Pre-init hook for dependency injection / config. */
	| 'componentWillInit'
	/** Component is about to load its assets / templates / persisted state. Hook for choosing a load profile or setting up progress reporting. */
	| 'componentWillLoad'
	/** Component is about to give up input focus. Hook for committing pending edits or running validation. */
	| 'componentWillLoseFocus'
	/** Component is about to pause. Hook for snapshotting transient state and suspending background work. */
	| 'componentWillPause'
	/** Component is about to reload. Hook for discarding derived state that the reload will invalidate. */
	| 'componentWillReload'
	/** Component is about to write its state to persistent storage. Hook for collecting or normalizing the state to be saved. */
	| 'componentWillSaveState'
	/** Component is about to start its active behavior. Last hook before it begins updating. */
	| 'componentWillStart'
	/** Component is about to stop its active behavior. State is preserved. */
	| 'componentWillStop'
	/** Component is about to resume from pause. Hook for restoring timers / re-acquiring resources released on pause. */
	| 'componentWillUnpause';

/**
 * @category Components
 */
export async function componentPhase<ArgsT = unknown>(
	phase: ComponentPhase,
	delegate: ComponentDelegate<ArgsT> | ComponentDelegate<ArgsT>[],
	base?: LogLike
): Promise<boolean> {
	return invokeListeners<ComponentPhase, ComponentDelegate<ArgsT>>({
		phase: phase,
		base: base,
		delegate: delegate
	});
}
