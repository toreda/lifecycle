import {Lifecycle} from '../../../src/lifecycle';
import type {EntityDelegate} from '../../../src/entity/delegate';
import {EntityPhase} from '../../../src';

export class SampleEntity implements EntityDelegate<EntityPhase> {
	public readonly lifecycle: Lifecycle<EntityPhase>;
	public readonly children: EntityDelegate[];

	constructor() {
		this.children = [];
		this.lifecycle = new Lifecycle<EntityPhase>();
	}

	public async entityOnRecycle(): Promise<boolean> {
		if (this.lifecycle.get('entityOnRecycle')) {
			return false;
		}

		return this.lifecycle.endPhase('entityOnRecycle');
	}

	public async entityDidRecycle(): Promise<boolean> {
		if (this.lifecycle.get('entityDidRecycle')) {
			return false;
		}

		return this.lifecycle.endPhase('entityDidRecycle');
	}

	public async entityWillRecycle(): Promise<boolean> {
		return this.lifecycle.endPhase('entityWillRecycle');
	}

	public async entityOnReleaseAsset(): Promise<boolean> {
		return this.lifecycle.endPhase('entityOnReleaseAsset');
	}

	public async entityDidReleaseAsset(): Promise<boolean> {
		return this.lifecycle.endPhase('entityDidReleaseAsset');
	}

	public async entityWillReleaseAsset(): Promise<boolean> {
		return this.lifecycle.endPhase('entityWillReleaseAsset');
	}

	public async entityWillBecomeReady(): Promise<boolean> {
		return this.lifecycle.endPhase('entityWillBecomeReady');
	}

	public async entityOnBecomeReady(): Promise<boolean> {
		return this.lifecycle.endPhase('entityOnBecomeReady');
	}

	public async entityDidBecomeReady(): Promise<boolean> {
		return this.lifecycle.endPhase('entityDidBecomeReady');
	}

	public async orientationWillChange(): Promise<boolean> {
		return this.lifecycle.endPhase('orientationWillChange');
	}

	public async orientationOnChange(): Promise<boolean> {
		return this.lifecycle.endPhase('orientationOnChange');
	}

	public async orientationDidChange(): Promise<boolean> {
		return this.lifecycle.endPhase('orientationDidChange');
	}

	public async entityDidGainFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('entityDidGainFocus');
	}

	public async entityDidLoseFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('entityDidLoseFocus');
	}

	public async entityWillLoseFocus(): Promise<boolean> {
		return this.lifecycle.phase('entityWillLoseFocus');
	}

	public async entityWillGainFocus(): Promise<boolean> {
		return this.lifecycle.phase('entityWillGainFocus');
	}

	public async entityOnGainFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('entityOnGainFocus');
	}

	public async entityOnLoseFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('entityOnLoseFocus');
	}

	public async entityOnHover(): Promise<boolean> {
		return this.lifecycle.endPhase('entityOnHover');
	}

	public async entityOnHide(): Promise<boolean> {
		return this.lifecycle.endPhase('entityOnHide');
	}

	public async entityOnDespawn(): Promise<boolean> {
		return this.lifecycle.endPhase('entityOnDespawn');
	}

	public async entityOnPause(): Promise<boolean> {
		return this.lifecycle.endPhase('entityOnPause');
	}

	public async entityOnUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('entityOnUnpause');
	}

	public async entityWillShow(): Promise<boolean> {
		return this.lifecycle.endPhase('entityWillShow');
	}

	public async entityWillLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('entityWillLoad');
	}

	public async entityWillInteract(): Promise<boolean> {
		return this.lifecycle.endPhase('entityWillInteract');
	}

	public async entityWillHover(): Promise<boolean> {
		return this.lifecycle.endPhase('entityWillHover');
	}

	public async entityWillHide(): Promise<boolean> {
		return this.lifecycle.endPhase('entityWillHide');
	}

	public async entityWillDespawn(): Promise<boolean> {
		return this.lifecycle.endPhase('entityWillDespawn');
	}

	public async entityStateWillChange(): Promise<boolean> {
		return this.lifecycle.endPhase('entityStateWillChange');
	}

	public async entityWillUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('entityWillUnpause');
	}

	public async entityWillStop(): Promise<boolean> {
		return this.lifecycle.endPhase('entityWillStop');
	}

	public async entityWillStart(): Promise<boolean> {
		return this.lifecycle.endPhase('entityWillStart');
	}

	public async entityWillSpawn(): Promise<boolean> {
		return this.lifecycle.endPhase('entityWillSpawn');
	}

	public async entityOnStop(): Promise<boolean> {
		return this.lifecycle.endPhase('entityOnStop');
	}

	public async entityOnStart(): Promise<boolean> {
		return this.lifecycle.endPhase('entityOnStart');
	}

	public async entityOnSpawn(): Promise<boolean> {
		return this.lifecycle.endPhase('entityOnSpawn');
	}

	public async entityOnShow(): Promise<boolean> {
		return this.lifecycle.endPhase('entityOnShow');
	}

	public async entityOnInit(): Promise<boolean> {
		return this.lifecycle.endPhase('entityOnInit');
	}

	public async entityOnInteract(): Promise<boolean> {
		return this.lifecycle.endPhase('entityOnInteract');
	}

	public async entityStateOnChange(): Promise<boolean> {
		return this.lifecycle.endPhase('entityStateOnChange');
	}

	public async entityMemoryWarning(): Promise<boolean> {
		return this.lifecycle.endPhase('entityMemoryWarning');
	}

	public async entityDidUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('entityDidUnpause');
	}

	public async entityDidStop(): Promise<boolean> {
		return this.lifecycle.endPhase('entityDidStop');
	}

	public async entityDidSpawn(): Promise<boolean> {
		return this.lifecycle.endPhase('entityDidSpawn');
	}

	public async entityDidShow(): Promise<boolean> {
		return this.lifecycle.endPhase('entityDidShow');
	}

	public async entityDidPause(): Promise<boolean> {
		return this.lifecycle.endPhase('entityDidPause');
	}

	public async entityDidMove(): Promise<boolean> {
		return this.lifecycle.endPhase('entityDidMove');
	}

	public async entityDidLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('entityDidLoad');
	}

	public async entityDidInteract(): Promise<boolean> {
		return this.lifecycle.endPhase('entityDidInteract');
	}

	public async entityDidInit(): Promise<boolean> {
		return this.lifecycle.endPhase('entityDidInit');
	}

	public async entityDidHover(): Promise<boolean> {
		return this.lifecycle.endPhase('entityDidHover');
	}

	public async entityDidHide(): Promise<boolean> {
		return this.lifecycle.endPhase('entityDidHide');
	}

	public async entityDidDespawn(): Promise<boolean> {
		return this.lifecycle.endPhase('entityDidDespawn');
	}

	public async entityDidStart(): Promise<boolean> {
		return this.lifecycle.endPhase('entityDidStart');
	}

	public async entityStateDidChange(): Promise<boolean> {
		return this.lifecycle.endPhase('entityStateDidChange');
	}

	public async entityWillMove(): Promise<boolean> {
		return this.lifecycle.endPhase('entityWillMove');
	}

	public async entityWillPause(): Promise<boolean> {
		return this.lifecycle.endPhase('entityWillPause');
	}

	public async entityOnMove(): Promise<boolean> {
		return this.lifecycle.endPhase('entityOnMove');
	}

	public async entityWillInit(): Promise<boolean> {
		return this.lifecycle.endPhase('entityWillInit');
	}

	public async entityOnLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('entityOnLoad');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
