import type {ClientDelegate} from '../../../src/client/delegate';
import {ClientLifecycle} from '../../../src/client/lifecycle';

export class SampleClient implements ClientDelegate<unknown> {
	public readonly lifecycle: ClientLifecycle;

	constructor() {
		this.lifecycle = new ClientLifecycle();
	}

	public async didBecomeReady(): Promise<boolean> {
		return this.lifecycle.phase('didBecomeReady');
	}

	public async didGainFocus(): Promise<boolean> {
		return this.lifecycle.phase('didGainFocus');
	}

	public async didInit(): Promise<boolean> {
		return this.lifecycle.phase('didInit');
	}

	public async didLoad(): Promise<boolean> {
		return this.lifecycle.phase('didLoad');
	}
	public async didLoseFocus(): Promise<boolean> {
		return this.lifecycle.phase('didLoseFocus');
	}

	public async didStart(): Promise<boolean> {
		return this.lifecycle.phase('didStart');
	}

	public async didPause(): Promise<boolean> {
		return this.lifecycle.phase('didPause');
	}

	public async didUnpause(): Promise<boolean> {
		return this.lifecycle.phase('didUnpause');
	}

	public async didShutdown(): Promise<boolean> {
		return this.lifecycle.phase('didShutdown');
	}

	public async onLoad(): Promise<boolean> {
		return this.lifecycle.phase('onLoad');
	}

	public async onInit(): Promise<boolean> {
		return this.lifecycle.phase('onInit');
	}

	public async onReady(): Promise<boolean> {
		return this.lifecycle.phase('onReady');
	}

	public async onStart(): Promise<boolean> {
		return this.lifecycle.phase('onStart');
	}

	public async onShutdown(): Promise<boolean> {
		return this.lifecycle.phase('onShutdown');
	}

	public async willBecomeReady(): Promise<boolean> {
		return this.lifecycle.phase('willBecomeReady');
	}

	public async willGainFocus(): Promise<boolean> {
		return this.lifecycle.phase('willGainFocus');
	}

	public async willShutdown(): Promise<boolean> {
		return this.lifecycle.phase('willShutdown');
	}

	public async willLoad(): Promise<boolean> {
		return this.lifecycle.phase('willLoad');
	}

	public async willInit(): Promise<boolean> {
		return this.lifecycle.phase('willInit');
	}

	public async willLoseFocus(): Promise<boolean> {
		return this.lifecycle.phase('willLoseFocus');
	}
	public async willPause(): Promise<boolean> {
		return this.lifecycle.phase('willPause');
	}

	public async willStart(): Promise<boolean> {
		return this.lifecycle.phase('willStart');
	}

	public async willStop(): Promise<boolean> {
		return this.lifecycle.phase('willStop');
	}

	public async didStop(): Promise<boolean> {
		return this.lifecycle.phase('didStop');
	}

	public async memoryWarning(): Promise<boolean> {
		return this.lifecycle.phase('memoryWarning');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
