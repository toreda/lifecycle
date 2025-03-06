import {Lifecycle} from '../../../src/lifecycle';
import type {AddonDelegate} from '../../../src/addon/delegate';
import {AddonPhase} from '../../../src/addon/phase';


export class SampleAddon implements AddonDelegate<unknown> {
	public readonly lifecycle: Lifecycle<AddonPhase>;
	public readonly children: AddonDelegate[];

	constructor() {
		this.children = [];
		this.lifecycle = new Lifecycle<AddonPhase>();
	}

	public async addonDidPause(): Promise<boolean> {
		return this.lifecycle.phase('addonDidPause');
	}

	public async addonOnGainFocus(): Promise<boolean> {
		return this.lifecycle.phase('addonOnGainFocus');
	}

	public async addonOnLoseFocus(): Promise<boolean> {
		return this.lifecycle.phase('addonOnLoseFocus');
	}

	public async addonWillLeaveCache(): Promise<boolean> {
		return this.lifecycle.phase('addonWillLeaveCache');
	}

	public async addonWillLoseFocus(): Promise<boolean> {
		return this.lifecycle.phase('addonWillLoseFocus');
	}

	public async addonWillGainFocus(): Promise<boolean> {
		return this.lifecycle.phase('addonWillGainFocus');
	}

	public async addonWillPause(): Promise<boolean> {
		return this.lifecycle.phase('addonWillPause');
	}

	public async addonOnPause(): Promise<boolean> {
		return this.lifecycle.phase('addonOnPause');
	}

	public async addonDidUnpause(): Promise<boolean> {
		return this.lifecycle.phase('addonDidUnpause');
	}

	public async addonOnUnpause(): Promise<boolean> {
		return this.lifecycle.phase('addonOnUnpause');
	}

	public async addonWillInit(): Promise<boolean> {
		return this.lifecycle.phase('addonWillInit');
	}

	public async addonDidInit(): Promise<boolean> {
		return this.lifecycle.phase('addonDidInit');
	}

	public async addonWillLoad(): Promise<boolean> {
		return this.lifecycle.phase('addonWillLoad');
	}

	public async addonCacheOnLeave(): Promise<boolean> {
		return this.lifecycle.phase('addonCacheOnLeave');
	}

	public async addonCacheWillLeave(): Promise<boolean> {
		return this.lifecycle.phase('addonCacheWillLeave');
	}

	public async addonCacheDidEnter(): Promise<boolean> {
		return this.lifecycle.phase('addonCacheDidEnter');
	}

	public async addonCacheDidLeave(): Promise<boolean> {
		return this.lifecycle.phase('addonCacheDidLeave');
	}

	public async addonCacheWillEnter(): Promise<boolean> {
		return this.lifecycle.phase('addonCacheWillEnter');
	}

	public async addonCacheOnEnter(): Promise<boolean> {
		return this.lifecycle.phase('addonCacheOnEnter');
	}

	public async addonDidGainFocus(): Promise<boolean> {
		return this.lifecycle.phase('addonDidGainFocus');
	}

	public async addonDidLoseFocus(): Promise<boolean> {
		return this.lifecycle.phase('addonDidLoseFocus');
	}

	public async addonDidLoad(): Promise<boolean> {
		return this.lifecycle.phase('addonDidLoad');
	}

	public async addonWillStart(): Promise<boolean> {
		return this.lifecycle.phase('addonWillStart');
	}

	public async addonDidStart(): Promise<boolean> {
		return this.lifecycle.phase('addonDidStart');
	}

	public async addonWillBecomeReady(): Promise<boolean> {
		return this.lifecycle.phase('addonWillBecomeReady');
	}

	public async addonDidBecomeReady(): Promise<boolean> {
		return this.lifecycle.phase('addonDidBecomeReady');
	}

	public async addonWillStop(): Promise<boolean> {
		return this.lifecycle.phase('addonWillStop');
	}

	public async addonOnStart(): Promise<boolean> {
		return this.lifecycle.phase('addonOnStart');
	}

	public async addonOnStop(): Promise<boolean> {
		return this.lifecycle.phase('addonOnStop');
	}

	public async addonDidStop(): Promise<boolean> {
		return this.lifecycle.phase('addonDidStop');
	}

	public async addonWillShutdown(): Promise<boolean> {
		return this.lifecycle.phase('addonWillShutdown');
	}

	public async addonWillRestart(): Promise<boolean> {
		return this.lifecycle.phase('addonWillRestart');
	}

	public async addonOnShutdown(): Promise<boolean> {
		return this.lifecycle.phase('addonOnShutdown');
	}

	public async addonOnRestart(): Promise<boolean> {
		return this.lifecycle.phase('addonOnRestart');
	}

	public async addonOnReady(): Promise<boolean> {
		return this.lifecycle.phase('addonOnReady');
	}

	public async addonOnInit(): Promise<boolean> {
		return this.lifecycle.phase('addonOnInit');
	}

	public async addonDidShutdown(): Promise<boolean> {
		return this.lifecycle.phase('addonDidShutdown');
	}

	public async addonDidRestart(): Promise<boolean> {
		return this.lifecycle.phase('addonDidRestart');
	}

	public async addonOnLoad(): Promise<boolean> {
		return this.lifecycle.phase('addonOnLoad');
	}

	public async addonMemoryWarning(): Promise<boolean> {
		return this.lifecycle.phase('addonMemoryWarning');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
