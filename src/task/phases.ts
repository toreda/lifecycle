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
export const taskPhases: TaskPhase[] = [
	'taskConfigDidChange',
	'taskConfigWillChange',
	'taskContextDidChange',
	'taskContextWillChange',
	'taskDidBecomeReady',
	'taskDidChange',
	'taskDidConsumeResource',
	'taskDidConsumeResources',
	'taskDidEstimateResourceConsumption',
	'taskDidExpire',
	'taskDidInit',
	'taskDidLoad',
	'taskDidPause',
	'taskDidReachMilestone',
	'taskDidReload',
	'taskDidRestart',
	'taskDidResume',
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
	'taskExecutionDidTimeout',
	'taskExecutionTimeLimitDidChange',
	'taskExecutionTimeLimitWillChange',
	'taskExecutionWillAbort',
	'taskExecutionWillFail',
	'taskExecutionWillFinish',
	'taskExecutionWillStart',
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
	'taskTimeLimitDidChange',
	'taskTimeLimitWillChange',
	'taskTimeoutDidChange',
	'taskTimeoutWillChange',
	'taskWillBecomeReady',
	'taskWillChange',
	'taskWillConsumeResource',
	'taskWillConsumeResources',
	'taskWillEstimateResourceConsumption',
	'taskWillExpire',
	'taskWillInit',
	'taskWillLoad',
	'taskWillPause',
	'taskWillReachMilestone',
	'taskWillReload',
	'taskWillRestart',
	'taskWillResume',
	'taskWillStart',
	'taskWillStop',
	'taskWillSuspend',
	'taskWillTerminate',
	'taskWillUnload',
	'taskWillUnpause',
	'taskWillUnsuspend'
];
