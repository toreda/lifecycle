import type {ServerDelegate} from '../../../src/server/delegate';
import {ServerLifecycle} from '../../../src/server/lifecycle';

export class SampleServer implements ServerDelegate<unknown> {
	public readonly lifecycle: ServerLifecycle;

	constructor() {
		this.lifecycle = new ServerLifecycle();
	}

	public async willInit(): Promise<boolean> {
		return this.lifecycle.phase('willInit');
	}

	public async didInit(): Promise<boolean> {
		return this.lifecycle.phase('didInit');
	}

	public async willLoad(): Promise<boolean> {
		return this.lifecycle.phase('willLoad');
	}

	public async didLoad(): Promise<boolean> {
		return this.lifecycle.phase('didLoad');
	}

	public async willStart(): Promise<boolean> {
		return this.lifecycle.phase('willStart');
	}

	public async didStart(): Promise<boolean> {
		return this.lifecycle.phase('didStart');
	}

	public async willBecomeReady(): Promise<boolean> {
		return this.lifecycle.phase('willBecomeReady');
	}

	public async didBecomeReady(): Promise<boolean> {
		return this.lifecycle.phase('didBecomeReady');
	}

	public async willStop(): Promise<boolean> {
		return this.lifecycle.phase('willStop');
	}

	public async onStart(): Promise<boolean> {
		return this.lifecycle.phase('onStart');
	}

	public async onStop(): Promise<boolean> {
		return this.lifecycle.phase('onStop');
	}

	public async didStop(): Promise<boolean> {
		return this.lifecycle.phase('didStop');
	}

	public async willShutdown(): Promise<boolean> {
		return this.lifecycle.phase('willShutdown');
	}

	public async willRestart(): Promise<boolean> {
		return this.lifecycle.phase('willRestart');
	}

	public async onShutdown(): Promise<boolean> {
		return this.lifecycle.phase('onShutdown');
	}

	public async onRestart(): Promise<boolean> {
		return this.lifecycle.phase('onRestart');
	}

	public async onReady(): Promise<boolean> {
		return this.lifecycle.phase('onReady');
	}

	public async onInit(): Promise<boolean> {
		return this.lifecycle.phase('onInit');
	}

	public async didShutdown(): Promise<boolean> {
		return this.lifecycle.phase('didShutdown');
	}

	public async didRestart(): Promise<boolean> {
		return this.lifecycle.phase('didRestart');
	}

	public async onLoad(): Promise<boolean> {
		return this.lifecycle.phase('onLoad');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
