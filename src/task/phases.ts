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

import {type TaskPhase} from './phase';

/**
 * Iterable collection of `TaskDelegate` phases.
 *
 * @category Tasks
 */
export const taskPhases = [
	'taskConfigDidChange',
	'taskConfigWillChange',
	'taskContextDidChange',
	'taskContextWillChange',
	'taskDidBecomeReady',
	'taskDidChange',
	'taskDidConsumeResources',
	'taskDidEstimateResourceConsumption',
	'taskDidExpire',
	'taskDidInit',
	'taskDidLoad',
	'taskDidPause',
	'taskDidReachMilestone',
	'taskDidReload',
	'taskDidRestart',
	'taskDidStart',
	'taskDidStop',
	'taskDidSuspend',
	'taskDidTerminate',
	'taskDidUnload',
	'taskDidUnpause',
	'taskDidUnsuspend',
	'taskExecutionDidAbort',
	'taskExecutionDidFail',
	'taskExecutionDidFinish',
	'taskExecutionDidStart',
	'taskExecutionDidSucceed',
	'taskExecutionDidTimeout',
	'taskExecutionTimeLimitDidChange',
	'taskExecutionTimeLimitWillChange',
	'taskExecutionTimeoutDidChange',
	'taskExecutionTimeoutWillChange',
	'taskExecutionWillAbort',
	'taskExecutionWillFail',
	'taskExecutionWillFinish',
	'taskExecutionWillStart',
	'taskExecutionWillSucceed',
	'taskExecutionWillTimeout',
	'taskPriorityDidChange',
	'taskPriorityWillChange',
	'taskProgressDidChange',
	'taskProgressWillChange',
	'taskStateDidChange',
	'taskStateWillChange',
	'taskStatusDidChange',
	'taskStatusWillChange',
	'taskTargetDidChange',
	'taskTargetWillChange',
	'taskWillBecomeReady',
	'taskWillChange',
	'taskWillConsumeResources',
	'taskWillEstimateResourceConsumption',
	'taskWillExpire',
	'taskWillInit',
	'taskWillLoad',
	'taskWillPause',
	'taskWillReachMilestone',
	'taskWillReload',
	'taskWillRestart',
	'taskWillStart',
	'taskWillStop',
	'taskWillSuspend',
	'taskWillTerminate',
	'taskWillUnload',
	'taskWillUnpause',
	'taskWillUnsuspend'
] as const satisfies readonly TaskPhase[];

// Compile-time exhaustiveness check: every TaskPhase must appear in taskPhases.
// If a new phase is added to TaskPhase but missing here, this line errors.
type _TaskPhaseMissing = Exclude<TaskPhase, (typeof taskPhases)[number]>;
const _taskPhasesExhaustive: [_TaskPhaseMissing] extends [never] ? true : never = true;
void _taskPhasesExhaustive;
