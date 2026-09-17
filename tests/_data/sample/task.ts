import {Lifecycle, type TaskDelegate, TaskPhase} from '../../../src';

export class SampleTask implements TaskDelegate<unknown> {
	public readonly lifecycle: Lifecycle<TaskPhase>;
	public readonly children: TaskDelegate[];

	constructor() {
		this.children = [];
		this.lifecycle = new Lifecycle<TaskPhase>();
	}

	public async taskConfigDidChange(): Promise<boolean> {
		return this.lifecycle.endPhase('taskConfigDidChange');
	}

	public async taskConfigWillChange(): Promise<boolean> {
		return this.lifecycle.endPhase('taskConfigWillChange');
	}

	public async taskContextDidChange(): Promise<boolean> {
		return this.lifecycle.endPhase('taskContextDidChange');
	}

	public async taskContextWillChange(): Promise<boolean> {
		return this.lifecycle.endPhase('taskContextWillChange');
	}

	public async taskDidBecomeReady(): Promise<boolean> {
		return this.lifecycle.endPhase('taskDidBecomeReady');
	}

	public async taskDidChange(): Promise<boolean> {
		return this.lifecycle.endPhase('taskDidChange');
	}

	public async taskDidConsumeResources(): Promise<boolean> {
		return this.lifecycle.endPhase('taskDidConsumeResources');
	}

	public async taskDidEstimateResourceConsumption(): Promise<boolean> {
		return this.lifecycle.endPhase('taskDidEstimateResourceConsumption');
	}

	public async taskDidExpire(): Promise<boolean> {
		return this.lifecycle.endPhase('taskDidExpire');
	}

	public async taskDidInit(): Promise<boolean> {
		return this.lifecycle.endPhase('taskDidInit');
	}

	public async taskDidLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('taskDidLoad');
	}

	public async taskDidPause(): Promise<boolean> {
		return this.lifecycle.endPhase('taskDidPause');
	}

	public async taskDidReachMilestone(): Promise<boolean> {
		return this.lifecycle.endPhase('taskDidReachMilestone');
	}

	public async taskDidReload(): Promise<boolean> {
		return this.lifecycle.endPhase('taskDidReload');
	}

	public async taskDidRestart(): Promise<boolean> {
		return this.lifecycle.endPhase('taskDidRestart');
	}

	public async taskDidStart(): Promise<boolean> {
		return this.lifecycle.endPhase('taskDidStart');
	}

	public async taskDidStop(): Promise<boolean> {
		return this.lifecycle.endPhase('taskDidStop');
	}

	public async taskDidSuspend(): Promise<boolean> {
		return this.lifecycle.endPhase('taskDidSuspend');
	}

	public async taskDidTerminate(): Promise<boolean> {
		return this.lifecycle.endPhase('taskDidTerminate');
	}

	public async taskDidUnload(): Promise<boolean> {
		return this.lifecycle.endPhase('taskDidUnload');
	}

	public async taskDidUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('taskDidUnpause');
	}

	public async taskDidUnsuspend(): Promise<boolean> {
		return this.lifecycle.endPhase('taskDidUnsuspend');
	}

	public async taskExecutionDidAbort(): Promise<boolean> {
		return this.lifecycle.endPhase('taskExecutionDidAbort');
	}

	public async taskExecutionDidFail(): Promise<boolean> {
		return this.lifecycle.endPhase('taskExecutionDidFail');
	}

	public async taskExecutionDidFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('taskExecutionDidFinish');
	}

	public async taskExecutionDidStart(): Promise<boolean> {
		return this.lifecycle.endPhase('taskExecutionDidStart');
	}

	public async taskExecutionDidSucceed(): Promise<boolean> {
		return this.lifecycle.endPhase('taskExecutionDidSucceed');
	}

	public async taskExecutionDidTimeout(): Promise<boolean> {
		return this.lifecycle.endPhase('taskExecutionDidTimeout');
	}

	public async taskExecutionTimeLimitDidChange(): Promise<boolean> {
		return this.lifecycle.endPhase('taskExecutionTimeLimitDidChange');
	}

	public async taskExecutionTimeLimitWillChange(): Promise<boolean> {
		return this.lifecycle.endPhase('taskExecutionTimeLimitWillChange');
	}

	public async taskExecutionTimeoutDidChange(): Promise<boolean> {
		return this.lifecycle.endPhase('taskExecutionTimeoutDidChange');
	}

	public async taskExecutionTimeoutWillChange(): Promise<boolean> {
		return this.lifecycle.endPhase('taskExecutionTimeoutWillChange');
	}

	public async taskExecutionWillAbort(): Promise<boolean> {
		return this.lifecycle.endPhase('taskExecutionWillAbort');
	}

	public async taskExecutionWillFail(): Promise<boolean> {
		return this.lifecycle.endPhase('taskExecutionWillFail');
	}

	public async taskExecutionWillFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('taskExecutionWillFinish');
	}

	public async taskExecutionWillStart(): Promise<boolean> {
		return this.lifecycle.endPhase('taskExecutionWillStart');
	}

	public async taskExecutionWillSucceed(): Promise<boolean> {
		return this.lifecycle.endPhase('taskExecutionWillSucceed');
	}

	public async taskExecutionWillTimeout(): Promise<boolean> {
		return this.lifecycle.endPhase('taskExecutionWillTimeout');
	}

	public async taskPriorityDidChange(): Promise<boolean> {
		return this.lifecycle.endPhase('taskPriorityDidChange');
	}

	public async taskPriorityWillChange(): Promise<boolean> {
		return this.lifecycle.endPhase('taskPriorityWillChange');
	}

	public async taskProgressDidChange(): Promise<boolean> {
		return this.lifecycle.endPhase('taskProgressDidChange');
	}

	public async taskProgressWillChange(): Promise<boolean> {
		return this.lifecycle.endPhase('taskProgressWillChange');
	}

	public async taskStateDidChange(): Promise<boolean> {
		return this.lifecycle.endPhase('taskStateDidChange');
	}

	public async taskStateWillChange(): Promise<boolean> {
		return this.lifecycle.endPhase('taskStateWillChange');
	}

	public async taskStatusDidChange(): Promise<boolean> {
		return this.lifecycle.endPhase('taskStatusDidChange');
	}

	public async taskStatusWillChange(): Promise<boolean> {
		return this.lifecycle.endPhase('taskStatusWillChange');
	}

	public async taskTargetDidChange(): Promise<boolean> {
		return this.lifecycle.endPhase('taskTargetDidChange');
	}

	public async taskTargetWillChange(): Promise<boolean> {
		return this.lifecycle.endPhase('taskTargetWillChange');
	}

	public async taskWillBecomeReady(): Promise<boolean> {
		return this.lifecycle.endPhase('taskWillBecomeReady');
	}

	public async taskWillChange(): Promise<boolean> {
		return this.lifecycle.endPhase('taskWillChange');
	}

	public async taskWillConsumeResources(): Promise<boolean> {
		return this.lifecycle.endPhase('taskWillConsumeResources');
	}

	public async taskWillEstimateResourceConsumption(): Promise<boolean> {
		return this.lifecycle.endPhase('taskWillEstimateResourceConsumption');
	}

	public async taskWillExpire(): Promise<boolean> {
		return this.lifecycle.endPhase('taskWillExpire');
	}

	public async taskWillInit(): Promise<boolean> {
		return this.lifecycle.endPhase('taskWillInit');
	}

	public async taskWillLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('taskWillLoad');
	}

	public async taskWillPause(): Promise<boolean> {
		return this.lifecycle.endPhase('taskWillPause');
	}

	public async taskWillReachMilestone(): Promise<boolean> {
		return this.lifecycle.endPhase('taskWillReachMilestone');
	}

	public async taskWillReload(): Promise<boolean> {
		return this.lifecycle.endPhase('taskWillReload');
	}

	public async taskWillRestart(): Promise<boolean> {
		return this.lifecycle.endPhase('taskWillRestart');
	}

	public async taskWillStart(): Promise<boolean> {
		return this.lifecycle.endPhase('taskWillStart');
	}

	public async taskWillStop(): Promise<boolean> {
		return this.lifecycle.endPhase('taskWillStop');
	}

	public async taskWillSuspend(): Promise<boolean> {
		return this.lifecycle.endPhase('taskWillSuspend');
	}

	public async taskWillTerminate(): Promise<boolean> {
		return this.lifecycle.endPhase('taskWillTerminate');
	}

	public async taskWillUnload(): Promise<boolean> {
		return this.lifecycle.endPhase('taskWillUnload');
	}

	public async taskWillUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('taskWillUnpause');
	}

	public async taskWillUnsuspend(): Promise<boolean> {
		return this.lifecycle.endPhase('taskWillUnsuspend');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
