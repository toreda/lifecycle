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

import {type TaskDelegate} from './delegate';
import {type LogLike} from '../log/like';
import {invokeListeners} from '../invoke/listeners';

/**
 * Task lifecycle phases.
 *
 * Phases come in `Will` / `Did` pairs around either a lifecycle action
 * (`taskWill/DidStart`, `taskWill/DidPause`) or a property mutation
 * (`taskPriorityWill/DidChange`, `taskConfigWill/DidChange`). Tasks have no
 * `On*` variants — listeners hook before or after, never the synchronous
 * moment itself.
 *
 * Sub-namespaces:
 * - `taskExecution*` — phases scoped to a single execution attempt (a task
 *   may execute, fail, retry, and execute again; lifecycle phases like
 *   `taskWill/DidStart` are the outer envelope, while `taskExecutionWill/DidStart`
 *   is each attempt within that envelope).
 *
 * @category Tasks
 */
export type TaskPhase =
	/** Task config object finished changing. Hook for re-deriving cached values, re-validating dependencies. */
	| 'taskConfigDidChange'
	/** Task config object is about to change. Hook for capturing the prior config or vetoing the change via state. */
	| 'taskConfigWillChange'
	/** Task context (the per-task data passed through execution) finished changing. */
	| 'taskContextDidChange'
	/** Task context is about to change. */
	| 'taskContextWillChange'
	/** Task finished its become-ready transition — fully initialized, loaded, and eligible for scheduling. */
	| 'taskDidBecomeReady'
	/** Generic "something on the task changed" hook. Fires after any field change when the consumer hasn't subscribed to a specific property phase. Specific property phases (e.g. `taskPriorityDidChange`) fire in addition. */
	| 'taskDidChange'
	/** Task finished consuming one or more resources (tokens, quota units, budget items) in a single operation. Hook for accounting / metering. */
	| 'taskDidConsumeResources'
	/** Task finished computing its resource-consumption estimate (the predicted, not actual, draw). Hook for capacity-planning / scheduling decisions. */
	| 'taskDidEstimateResourceConsumption'
	/** Task expired — its validity window elapsed before it could complete or be picked up. Distinct from execution timeout (deadline within a single execution attempt). */
	| 'taskDidExpire'
	/** Task finished its one-time initialization. */
	| 'taskDidInit'
	/** Task finished loading its persisted state / config / inputs. */
	| 'taskDidLoad'
	/** Task finished pausing — execution is halted but state is preserved. */
	| 'taskDidPause'
	/** Task finished reaching a defined milestone (e.g. progress checkpoint, partial-result emission). */
	| 'taskDidReachMilestone'
	/** Task finished reloading — its inputs / config were re-read after a change. */
	| 'taskDidReload'
	/** Task finished restarting — the entire task was reset and started fresh. */
	| 'taskDidRestart'
	/** Task finished starting — it is now running. */
	| 'taskDidStart'
	/** Task finished stopping. Distinct from `Pause` (resumable) and `Terminate` (force-killed): `Stop` is a clean halt of a running task. */
	| 'taskDidStop'
	/** Task finished entering suspended state. Distinct from `Pause`: suspend implies the task is parked indefinitely (e.g. waiting on external dependency), not just briefly held. */
	| 'taskDidSuspend'
	/** Task was force-killed. Distinct from `Stop` (clean halt) and `Expire` (validity window elapsed). */
	| 'taskDidTerminate'
	/** Task finished unloading its persisted state / inputs. Inverse of `Load`. */
	| 'taskDidUnload'
	/** Task finished resuming from pause. Inverse of `Pause`. */
	| 'taskDidUnpause'
	/** Task finished resuming from suspended state. Inverse of `Suspend`. */
	| 'taskDidUnsuspend'
	/** Current execution attempt was aborted (caller-initiated cancel of the current run, distinct from terminating the whole task). */
	| 'taskExecutionDidAbort'
	/** Current execution attempt failed. The outer task may still retry; check task-level phases for terminal status. */
	| 'taskExecutionDidFail'
	/** Current execution attempt finished. Universal terminal hook for an execution; outcome-specific phases (`Succeed`, `Fail`, `Abort`, `Timeout`) fire before this. */
	| 'taskExecutionDidFinish'
	/** Current execution attempt started. */
	| 'taskExecutionDidStart'
	/** Current execution attempt completed successfully. Fires before `taskExecutionDidFinish`. */
	| 'taskExecutionDidSucceed'
	/** Current execution attempt's deadline elapsed. The outer task may still retry. Fires before `taskExecutionDidFinish`. */
	| 'taskExecutionDidTimeout'
	/** Per-execution time limit finished changing — the maximum runtime allowed for a single execution attempt before it is terminated. */
	| 'taskExecutionTimeLimitDidChange'
	/** Per-execution time limit is about to change. */
	| 'taskExecutionTimeLimitWillChange'
	/** Per-execution timeout policy finished changing — how the runtime reacts when an execution attempt exceeds its time limit (e.g. retry, fail, terminate). Distinct from `taskExecutionTimeLimit*` (the limit value). */
	| 'taskExecutionTimeoutDidChange'
	/** Per-execution timeout policy is about to change. */
	| 'taskExecutionTimeoutWillChange'
	/** Current execution attempt is about to be aborted. */
	| 'taskExecutionWillAbort'
	/** Current execution attempt is about to be marked failed. */
	| 'taskExecutionWillFail'
	/** Current execution attempt is about to finish. Last hook before outcome-specific `Did*` phases fire. */
	| 'taskExecutionWillFinish'
	/** Current execution attempt is about to start. Hook for capturing per-attempt context, attempt counters. */
	| 'taskExecutionWillStart'
	/** Current execution attempt is about to be marked successful. */
	| 'taskExecutionWillSucceed'
	/** Current execution attempt is about to be marked timed out. */
	| 'taskExecutionWillTimeout'
	/** Task priority finished changing. Hook for re-sorting in scheduling queues. */
	| 'taskPriorityDidChange'
	/** Task priority is about to change. */
	| 'taskPriorityWillChange'
	/** Task progress (0..1, percent, or implementation-defined unit) finished changing. Hook for UI updates, milestone detection. */
	| 'taskProgressDidChange'
	/** Task progress is about to change. */
	| 'taskProgressWillChange'
	/** Task state-machine value finished transitioning (the internal `State` enum, distinct from external `Status`). */
	| 'taskStateDidChange'
	/** Task state-machine value is about to transition. */
	| 'taskStateWillChange'
	/** Task status (the externally-visible status string, distinct from internal `State`) finished changing. */
	| 'taskStatusDidChange'
	/** Task status is about to change. */
	| 'taskStatusWillChange'
	/** Task target (the work product, output destination, or operand) finished changing. */
	| 'taskTargetDidChange'
	/** Task target is about to change. */
	| 'taskTargetWillChange'
	/** Task is about to enter its ready state. Last hook before scheduling can pick it up. */
	| 'taskWillBecomeReady'
	/** Generic "something on the task is about to change" hook, paired with `taskDidChange`. */
	| 'taskWillChange'
	/** Task is about to consume one or more resources in a single operation. Hook for last-chance budget checks. */
	| 'taskWillConsumeResources'
	/** Task is about to compute its resource-consumption estimate. */
	| 'taskWillEstimateResourceConsumption'
	/** Task is about to expire. Hook for last-chance extension or cleanup. */
	| 'taskWillExpire'
	/** Task is about to initialize. Pre-init hook for dependency wiring. */
	| 'taskWillInit'
	/** Task is about to load. */
	| 'taskWillLoad'
	/** Task is about to pause. Hook for snapshotting transient state. */
	| 'taskWillPause'
	/** Task is about to reach a milestone. Hook for milestone-precondition checks. */
	| 'taskWillReachMilestone'
	/** Task is about to reload its inputs / config. */
	| 'taskWillReload'
	/** Task is about to restart from scratch. Hook for clearing accumulated state. */
	| 'taskWillRestart'
	/** Task is about to start. Last hook before execution begins. */
	| 'taskWillStart'
	/** Task is about to stop (clean halt). */
	| 'taskWillStop'
	/** Task is about to enter suspended state. */
	| 'taskWillSuspend'
	/** Task is about to be terminated (force kill). Last-chance cleanup hook. */
	| 'taskWillTerminate'
	/** Task is about to unload. */
	| 'taskWillUnload'
	/** Task is about to resume from pause. Inverse of `Pause`. */
	| 'taskWillUnpause'
	/** Task is about to resume from suspended state. Inverse of `Suspend`. */
	| 'taskWillUnsuspend';

/**
 * Invoke the listener registered for a given `TaskPhase` on a delegate (or
 * array of delegates), then recurse into each delegate's children. Each phase
 * fires at most once per delegate per lifecycle — repeat calls for the same
 * phase on the same delegate are skipped.
 *
 * Convenience wrapper around `invokeListeners` that fixes the phase/delegate
 * type parameters to `TaskPhase` / `TaskDelegate<ArgsT>`. Prefer this over
 * calling `invokeListeners` directly when working with task lifecycles — it
 * keeps phase names and delegate shape type-safe.
 *
 * @param phase    Phase to invoke (e.g. `'taskWillStart'`,
 *                 `'taskExecutionDidFail'`). See `TaskPhase` for the full list.
 * @param delegate The `TaskDelegate` (or array of delegates) whose listener
 *                 for `phase` should fire. Children are visited recursively.
 * @param base     Optional logger satisfying `LogLike`. When omitted,
 *                 internal diagnostic messages are silently dropped.
 * @returns `true` only when every target delegate's main listener exists,
 *          executed without throwing, and returned `true`. `false` if any
 *          delegate is missing the listener, the listener throws or returns
 *          non-`true`, the phase was already fired (skipped), or the input
 *          is empty/invalid. Child-listener results do not affect the
 *          returned value.
 *
 * @category Tasks
 */
export async function taskPhase<ArgsT = unknown>(
	phase: TaskPhase,
	delegate: TaskDelegate<ArgsT> | TaskDelegate<ArgsT>[],
	base?: LogLike
): Promise<boolean> {
	return invokeListeners<TaskPhase, TaskDelegate<ArgsT>>({
		phase: phase,
		delegate: delegate,
		base: base
	});
}
