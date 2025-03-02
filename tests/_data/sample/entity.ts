import {Lifecycle} from '../../../src/lifecycle';
import type {EntityDelegate} from '../../../src/entity/delegate';

export class SampleEntity implements EntityDelegate<unknown> {
	public readonly lifecycle: Lifecycle<any>;
	public readonly children: EntityDelegate[];

	constructor() {
		this.children = [];
		this.lifecycle = new Lifecycle<any>();
	}

	public async orientationWillChange(): Promise<boolean> {
		return this.lifecycle.phase('orientationWillChange');
	}

	public async orientationOnChange(): Promise<boolean> {
		return this.lifecycle.phase('orientationOnChange');
	}

	public async orientationDidChange(): Promise<boolean> {
		return this.lifecycle.phase('orientationDidChange');
	}

	public async entityOnHover(): Promise<boolean> {
		return this.lifecycle.phase('entityOnHover');
	}

	public async entityOnDespawn(): Promise<boolean> {
		return this.lifecycle.phase('entityOnDespawn');
	}

	public async entityOnPause(): Promise<boolean> {
		return this.lifecycle.phase('entityOnPause');
	}

	public async entityOnUnpause(): Promise<boolean> {
		return this.lifecycle.phase('entityOnUnpause');
	}

	public async entityWillShow(): Promise<boolean> {
		return this.lifecycle.phase('entityWillShow');
	}

	public async entityWillLoad(): Promise<boolean> {
		return this.lifecycle.phase('entityWillLoad');
	}

	public async entityWillInteract(): Promise<boolean> {
		return this.lifecycle.phase('entityWillInteract');
	}

	public async entityWillHover(): Promise<boolean> {
		return this.lifecycle.phase('entityWillHover');
	}

	public async entityWillHide(): Promise<boolean> {
		return this.lifecycle.phase('entityWillHide');
	}

	public async entityWillDespawn(): Promise<boolean> {
		return this.lifecycle.phase('entityWillDespawn');
	}

	public async entityStateWillChange(): Promise<boolean> {
		return this.lifecycle.phase('entityStateWillChange');
	}

	public async entityWillUnpause(): Promise<boolean> {
		return this.lifecycle.phase('entityWillUnpause');
	}

	public async entityWillStop(): Promise<boolean> {
		return this.lifecycle.phase('entityWillStop');
	}

	public async entityWillStart(): Promise<boolean> {
		return this.lifecycle.phase('entityWillStart');
	}

	public async entityWillSpawn(): Promise<boolean> {
		return this.lifecycle.phase('entityWillSpawn');
	}

	public async entityOnStop(): Promise<boolean> {
		return this.lifecycle.phase('entityOnStop');
	}

	public async entityOnStart(): Promise<boolean> {
		return this.lifecycle.phase('entityOnStart');
	}

	public async entityOnSpawn(): Promise<boolean> {
		return this.lifecycle.phase('entityOnSpawn');
	}

	public async entityOnShow(): Promise<boolean> {
		return this.lifecycle.phase('entityOnShow');
	}

	public async entityOnInteract(): Promise<boolean> {
		return this.lifecycle.phase('entityOnInteract');
	}

	public async entityStateOnChange(): Promise<boolean> {
		return this.lifecycle.phase('entityStateOnChange');
	}

	public async entityMemoryWarning(): Promise<boolean> {
		return this.lifecycle.phase('entityMemoryWarning');
	}

	public async entityDidUnpause(): Promise<boolean> {
		return this.lifecycle.phase('entityDidUnpause');
	}

	public async entityDidStop(): Promise<boolean> {
		return this.lifecycle.phase('entityDidStop');
	}

	public async entityDidSpawn(): Promise<boolean> {
		return this.lifecycle.phase('entityDidSpawn');
	}

	public async entityDidShow(): Promise<boolean> {
		return this.lifecycle.phase('entityDidShow');
	}

	public async entityDidPause(): Promise<boolean> {
		return this.lifecycle.phase('entityDidPause');
	}

	public async entityDidMove(): Promise<boolean> {
		return this.lifecycle.phase('entityDidMove');
	}

	public async entityDidLoad(): Promise<boolean> {
		return this.lifecycle.phase('entityDidLoad');
	}

	public async entityDidInteract(): Promise<boolean> {
		return this.lifecycle.phase('entityDidInteract');
	}

	public async entityDidInit(): Promise<boolean> {
		return this.lifecycle.phase('entityDidInit');
	}

	public async entityDidHover(): Promise<boolean> {
		return this.lifecycle.phase('entityDidHover');
	}

	public async entityDidHide(): Promise<boolean> {
		return this.lifecycle.phase('entityDidHide');
	}

	public async entityDidDespawn(): Promise<boolean> {
		return this.lifecycle.phase('entityDidDespawn');
	}

	public async entityDidStart(): Promise<boolean> {
		return this.lifecycle.phase('entityDidStart');
	}

	public async entityStateDidChange(): Promise<boolean> {
		return this.lifecycle.phase('entityStateDidChange');
	}

	public async entityWillMove(): Promise<boolean> {
		return this.lifecycle.phase('entityWillMove');
	}

	public async entityWillPause(): Promise<boolean> {
		return this.lifecycle.phase('entityWillPause');
	}

	public async animWillCancel(): Promise<boolean> {
		return this.lifecycle.phase('animWillCancel');
	}

	public async entityOnMove(): Promise<boolean> {
		return this.lifecycle.phase('entityOnMove');
	}

	public async stateDidChange(): Promise<boolean> {
		return this.lifecycle.phase('stateDidChange');
	}

	public async stateWillChange(): Promise<boolean> {
		return this.lifecycle.phase('stateWillChange');
	}

	public async stateOnChange(): Promise<boolean> {
		return this.lifecycle.phase('stateOnChange');
	}

	public async entityWillInit(): Promise<boolean> {
		return this.lifecycle.phase('entityWillInit');
	}

	public async animWillStart(): Promise<boolean> {
		return this.lifecycle.phase('animWillStart');
	}

	public async animDidCancel(): Promise<boolean> {
		return this.lifecycle.phase('animDidCancel');
	}

	public async animDidStart(): Promise<boolean> {
		return this.lifecycle.phase('animDidStart');
	}

	public async animDidFinish(): Promise<boolean> {
		return this.lifecycle.phase('animDidFinish');
	}

	public async animWillFinish(): Promise<boolean> {
		return this.lifecycle.phase('animWillFinish');
	}

	public async animOnError(): Promise<boolean> {
		return this.lifecycle.phase('animOnError');
	}

	public async animOnFinish(): Promise<boolean> {
		return this.lifecycle.phase('animOnFinish');
	}

	public async animOnMissing(): Promise<boolean> {
		return this.lifecycle.phase('animOnMissing');
	}

	public async animOnCancel(): Promise<boolean> {
		return this.lifecycle.phase('animOnCancel');
	}

	public async animOnStart(): Promise<boolean> {
		return this.lifecycle.phase('animOnStart');
	}

	public async didInit(): Promise<boolean> {
		return this.lifecycle.phase('didInit');
	}

	public async willLoad(): Promise<boolean> {
		return this.lifecycle.phase('willLoad');
	}

	public async didHide(): Promise<boolean> {
		return this.lifecycle.phase('didHide');
	}

	public async didShow(): Promise<boolean> {
		return this.lifecycle.phase('didShow');
	}

	public async willPause(): Promise<boolean> {
		return this.lifecycle.phase('willPause');
	}

	public async willMove(): Promise<boolean> {
		return this.lifecycle.phase('willMove');
	}

	public async didMove(): Promise<boolean> {
		return this.lifecycle.phase('didMove');
	}

	public async assetUnloadWillStart(): Promise<boolean> {
		return this.lifecycle.phase('assetUnloadWillStart');
	}

	public async assetUnloadOnStart(): Promise<boolean> {
		return this.lifecycle.phase('assetUnloadOnStart');
	}

	public async assetUnloadOnFinish(): Promise<boolean> {
		return this.lifecycle.phase('assetUnloadOnFinish');
	}

	public async assetUnloadDidStart(): Promise<boolean> {
		return this.lifecycle.phase('assetUnloadDidStart');
	}

	public async assetUnloadDidFinish(): Promise<boolean> {
		return this.lifecycle.phase('assetUnloadDidFinish');
	}

	public async assetUnloadWillFinish(): Promise<boolean> {
		return this.lifecycle.phase('assetUnloadWillFinish');
	}

	public async assetLoadWillFinish(): Promise<boolean> {
		return this.lifecycle.phase('assetLoadWillFinish');
	}

	public async assetLoadDidFinish(): Promise<boolean> {
		return this.lifecycle.phase('assetLoadDidFinish');
	}

	public async assetLoadDidStart(): Promise<boolean> {
		return this.lifecycle.phase('assetLoadDidStart');
	}

	public async assetLoadOnAbort(): Promise<boolean> {
		return this.lifecycle.phase('assetLoadOnAbort');
	}

	public async assetLoadOnFinish(): Promise<boolean> {
		return this.lifecycle.phase('assetLoadOnFinish');
	}

	public async assetLoadOnStart(): Promise<boolean> {
		return this.lifecycle.phase('assetLoadOnStart');
	}

	public async assetLoadOnProgress(): Promise<boolean> {
		return this.lifecycle.phase('assetLoadOnProgress');
	}

	public async assetLoadWillStart(): Promise<boolean> {
		return this.lifecycle.phase('assetLoadWillStart');
	}

	public async didUnpause(): Promise<boolean> {
		return this.lifecycle.phase('didUnpause');
	}

	public async willUnpause(): Promise<boolean> {
		return this.lifecycle.phase('willUnpause');
	}

	public async willHide(): Promise<boolean> {
		return this.lifecycle.phase('willHide');
	}

	public async willShow(): Promise<boolean> {
		return this.lifecycle.phase('willShow');
	}

	public async willDespawn(): Promise<boolean> {
		return this.lifecycle.phase('willDespawn');
	}

	public async didSpawn(): Promise<boolean> {
		return this.lifecycle.phase('didSpawn');
	}

	public async willSpawn(): Promise<boolean> {
		return this.lifecycle.phase('willSpawn');
	}

	public async entityOnLoad(): Promise<boolean> {
		return this.lifecycle.phase('entityOnLoad');
	}

	public async onInteract(): Promise<boolean> {
		return this.lifecycle.phase('onInteract');
	}

	public async onSpawn(): Promise<boolean> {
		return this.lifecycle.phase('onSpawn');
	}

	public async onStop(): Promise<boolean> {
		return this.lifecycle.phase('onStop');
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

	public async willHover(): Promise<boolean> {
		return this.lifecycle.phase('willHover');
	}

	public async didHover(): Promise<boolean> {
		return this.lifecycle.phase('didHover');
	}

	public async textureDidChange(): Promise<boolean> {
		return this.lifecycle.phase('textureDidChange');
	}

	public async textureDidLoad(): Promise<boolean> {
		return this.lifecycle.phase('textureDidLoad');
	}

	public async textureOnChange(): Promise<boolean> {
		return this.lifecycle.phase('textureOnChange');
	}

	public async textureWillChange(): Promise<boolean> {
		return this.lifecycle.phase('textureWillChange');
	}

	public async textureLoadDidFinish(): Promise<boolean> {
		return this.lifecycle.phase('textureLoadDidFinish');
	}

	public async textureWillLoad(): Promise<boolean> {
		return this.lifecycle.phase('textureWillLoad');
	}

	public async didInteract(): Promise<boolean> {
		return this.lifecycle.phase('didInteract');
	}

	public async soundDidCancel(): Promise<boolean> {
		return this.lifecycle.phase('soundDidCancel');
	}

	public async soundDidFinish(): Promise<boolean> {
		return this.lifecycle.phase('soundDidFinish');
	}

	public async soundOnCancel(): Promise<boolean> {
		return this.lifecycle.phase('soundOnCancel');
	}

	public async soundOnPause(): Promise<boolean> {
		return this.lifecycle.phase('soundOnPause');
	}

	public async soundOnUnpause(): Promise<boolean> {
		return this.lifecycle.phase('soundOnUnpause');
	}

	public async soundOnFinish(): Promise<boolean> {
		return this.lifecycle.phase('soundOnFinish');
	}

	public async soundWillFinish(): Promise<boolean> {
		return this.lifecycle.phase('soundWillFinish');
	}

	public async soundWillPause(): Promise<boolean> {
		return this.lifecycle.phase('soundWillPause');
	}

	public async soundWillStart(): Promise<boolean> {
		return this.lifecycle.phase('soundWillStart');
	}

	public async soundWillUnpause(): Promise<boolean> {
		return this.lifecycle.phase('soundWillUnpause');
	}

	public async soundOnStart(): Promise<boolean> {
		return this.lifecycle.phase('soundOnStart');
	}

	public async soundMissing(): Promise<boolean> {
		return this.lifecycle.phase('soundMissing');
	}

	public async soundWillCancel(): Promise<boolean> {
		return this.lifecycle.phase('soundWillCancel');
	}

	public async soundDidStart(): Promise<boolean> {
		return this.lifecycle.phase('soundDidStart');
	}

	public async soundOnError(): Promise<boolean> {
		return this.lifecycle.phase('soundOnError');
	}

	public async soundDidPause(): Promise<boolean> {
		return this.lifecycle.phase('soundDidPause');
	}

	public async soundDidUnpause(): Promise<boolean> {
		return this.lifecycle.phase('soundDidUnpause');
	}

	public async tweenWillStart(): Promise<boolean> {
		return this.lifecycle.phase('tweenWillStart');
	}

	public async tweenWillFinish(): Promise<boolean> {
		return this.lifecycle.phase('tweenWillFinish');
	}

	public async tweenOnStart(): Promise<boolean> {
		return this.lifecycle.phase('tweenOnStart');
	}

	public async tweenOnFinish(): Promise<boolean> {
		return this.lifecycle.phase('tweenOnFinish');
	}

	public async tweenDidStart(): Promise<boolean> {
		return this.lifecycle.phase('tweenDidStart');
	}

	public async tweenDidFinish(): Promise<boolean> {
		return this.lifecycle.phase('tweenDidFinish');
	}

	public async tweenOnCancel(): Promise<boolean> {
		return this.lifecycle.phase('tweenOnCancel');
	}

	public async tweenDidReset(): Promise<boolean> {
		return this.lifecycle.phase('tweenDidReset');
	}

	public async tweenDidReplay(): Promise<boolean> {
		return this.lifecycle.phase('tweenDidReplay');
	}

	public async tweenDidCancel(): Promise<boolean> {
		return this.lifecycle.phase('tweenDidCancel');
	}

	public async tweenWillCancel(): Promise<boolean> {
		return this.lifecycle.phase('tweenWillCancel');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
