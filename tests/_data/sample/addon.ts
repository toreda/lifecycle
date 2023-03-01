import type {AddonDelegate} from '../../../src/addon/delegate';
import type {AddonFlags} from '../../../src/addon/flags';
import {AddonLifecycle} from '../../../src/addon/lifecycle';
import {addonPhases} from '../../../src/addon/phases';

export class SampleAddon implements AddonDelegate<unknown> {
	public readonly lifecycle: AddonLifecycle;
	public readonly children: AddonDelegate[];

	constructor() {
		this.children = [];
		this.lifecycle = new AddonLifecycle();
	}

	public async willEnterCache(): Promise<boolean> {
		return this.lifecycle.phase('willEnterCache');
	}

	public async onEnterCache(): Promise<boolean> {
		return this.lifecycle.phase('onEnterCache');
	}

	public async didPause(): Promise<boolean> {
		return this.lifecycle.phase('didPause');
	}

	public async willLeaveCache(): Promise<boolean> {
		return this.lifecycle.phase('willLeaveCache');
	}

	public async willLoseFocus(): Promise<boolean> {
		return this.lifecycle.phase('willLoseFocus');
	}

	public async willGainFocus(): Promise<boolean> {
		return this.lifecycle.phase('willGainFocus');
	}

	public async willPause(): Promise<boolean> {
		return this.lifecycle.phase('willPause');
	}

	public async onPause(): Promise<boolean> {
		return this.lifecycle.phase('onPause');
	}

	public async didUnpause(): Promise<boolean> {
		return this.lifecycle.phase('didUnpause');
	}

	public async onLeaveCache(): Promise<boolean> {
		return this.lifecycle.phase('onLeaveCache');
	}

	public async onUnpause(): Promise<boolean> {
		return this.lifecycle.phase('onUnpause');
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

	public async didLeaveCache(): Promise<boolean> {
		return this.lifecycle.phase('didLeaveCache');
	}

	public async didGainFocus(): Promise<boolean> {
		return this.lifecycle.phase('didGainFocus');
	}

	public async didEnterCache(): Promise<boolean> {
		return this.lifecycle.phase('didEnterCache');
	}

	public async didLoseFocus(): Promise<boolean> {
		return this.lifecycle.phase('didLoseFocus');
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

	public async memoryWarning(): Promise<boolean> {
		return this.lifecycle.phase('memoryWarning');
	}

	public reset(): void {
		this.lifecycle.reset();
	}

	public toData(): AddonFlags {
		const o: AddonFlags = {} as any;

		for (const phase of addonPhases) {
			o[phase] = this.lifecycle.get(phase);
		}

		return o;
	}
}
