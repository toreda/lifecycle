import type {ServerDelegate} from '../../../src/server/delegate';
import {ServerLifecycle} from '../../../src/server/lifecycle';
import {lifecyclePhase} from '../../../src/lifecycle/phase';

export class SampleServer implements ServerDelegate {
	public readonly children: ServerDelegate[];
	public readonly lifecycle: ServerLifecycle;
	[k: string]: unknown;

	constructor() {
		this.lifecycle = new ServerLifecycle();
		this.children = [];
	}

	public async willInit(): Promise<boolean> {
		return lifecyclePhase(this, 'willInit');
	}

	public async didInit(): Promise<boolean> {
		return lifecyclePhase(this, 'didInit');
	}

	public async willLoad(): Promise<boolean> {
		return lifecyclePhase(this, 'willLoad');
	}

	public async didLoad(): Promise<boolean> {
		return lifecyclePhase(this, 'didLoad');
	}

	public async willStart(): Promise<boolean> {
		return lifecyclePhase(this, 'willStart');
	}

	public async didStart(): Promise<boolean> {
		return lifecyclePhase(this, 'didStart');
	}

	public async willBecomeReady(): Promise<boolean> {
		return lifecyclePhase(this, 'willBecomeReady');
	}

	public async didBecomeReady(): Promise<boolean> {
		return lifecyclePhase(this, 'didBecomeReady');
	}

	public async willStop(): Promise<boolean> {
		return lifecyclePhase(this, 'willStop');
	}

	public async didStop(): Promise<boolean> {
		return lifecyclePhase(this, 'didStop');
	}

	public async willShutdown(): Promise<boolean> {
		return lifecyclePhase(this, 'willShutdown');
	}

	public async cnxDidReconnect(): Promise<boolean> {
		return lifecyclePhase(this, 'cnxDidReconnect');
	}

	public async cnxWillDisconnect(): Promise<boolean> {
		return lifecyclePhase(this, 'cnxWillDisconnect');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
