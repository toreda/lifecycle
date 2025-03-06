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

	public async animWillCancel(): Promise<boolean> {
		return this.lifecycle.endPhase('animWillCancel');
	}

	public async entityOnMove(): Promise<boolean> {
		return this.lifecycle.endPhase('entityOnMove');
	}

	public async stateDidChange(): Promise<boolean> {
		return this.lifecycle.endPhase('stateDidChange');
	}

	public async stateWillChange(): Promise<boolean> {
		return this.lifecycle.endPhase('stateWillChange');
	}

	public async stateOnChange(): Promise<boolean> {
		return this.lifecycle.endPhase('stateOnChange');
	}

	public async entityWillInit(): Promise<boolean> {
		return this.lifecycle.endPhase('entityWillInit');
	}

	public async animWillStart(): Promise<boolean> {
		return this.lifecycle.endPhase('animWillStart');
	}

	public async animDidCancel(): Promise<boolean> {
		return this.lifecycle.endPhase('animDidCancel');
	}

	public async animDidStart(): Promise<boolean> {
		return this.lifecycle.endPhase('animDidStart');
	}

	public async animDidFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('animDidFinish');
	}

	public async animWillFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('animWillFinish');
	}

	public async animOnError(): Promise<boolean> {
		return this.lifecycle.endPhase('animOnError');
	}

	public async animOnFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('animOnFinish');
	}

	public async animOnMissing(): Promise<boolean> {
		return this.lifecycle.endPhase('animOnMissing');
	}

	public async animOnCancel(): Promise<boolean> {
		return this.lifecycle.endPhase('animOnCancel');
	}

	public async animOnStart(): Promise<boolean> {
		return this.lifecycle.endPhase('animOnStart');
	}

	public async didInit(): Promise<boolean> {
		return this.lifecycle.endPhase('didInit');
	}

	public async willLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('willLoad');
	}

	public async didHide(): Promise<boolean> {
		return this.lifecycle.endPhase('didHide');
	}

	public async didShow(): Promise<boolean> {
		return this.lifecycle.endPhase('didShow');
	}

	public async willPause(): Promise<boolean> {
		return this.lifecycle.endPhase('willPause');
	}

	public async willMove(): Promise<boolean> {
		return this.lifecycle.endPhase('willMove');
	}

	public async didMove(): Promise<boolean> {
		return this.lifecycle.endPhase('didMove');
	}

	public async assetUnloadWillStart(): Promise<boolean> {
		return this.lifecycle.endPhase('assetUnloadWillStart');
	}

	public async assetUnloadOnStart(): Promise<boolean> {
		return this.lifecycle.endPhase('assetUnloadOnStart');
	}

	public async assetUnloadOnFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('assetUnloadOnFinish');
	}

	public async assetUnloadDidStart(): Promise<boolean> {
		return this.lifecycle.endPhase('assetUnloadDidStart');
	}

	public async assetUnloadDidFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('assetUnloadDidFinish');
	}

	public async assetUnloadWillFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('assetUnloadWillFinish');
	}

	public async assetLoadWillFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('assetLoadWillFinish');
	}

	public async assetLoadDidFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('assetLoadDidFinish');
	}

	public async assetLoadDidStart(): Promise<boolean> {
		return this.lifecycle.endPhase('assetLoadDidStart');
	}

	public async assetLoadOnAbort(): Promise<boolean> {
		return this.lifecycle.endPhase('assetLoadOnAbort');
	}

	public async assetLoadOnFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('assetLoadOnFinish');
	}

	public async assetLoadOnStart(): Promise<boolean> {
		return this.lifecycle.endPhase('assetLoadOnStart');
	}

	public async assetLoadOnProgress(): Promise<boolean> {
		return this.lifecycle.endPhase('assetLoadOnProgress');
	}

	public async assetLoadWillStart(): Promise<boolean> {
		return this.lifecycle.endPhase('assetLoadWillStart');
	}

	public async didUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('didUnpause');
	}

	public async willUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('willUnpause');
	}

	public async willHide(): Promise<boolean> {
		return this.lifecycle.endPhase('willHide');
	}

	public async willShow(): Promise<boolean> {
		return this.lifecycle.endPhase('willShow');
	}

	public async willDespawn(): Promise<boolean> {
		return this.lifecycle.endPhase('willDespawn');
	}

	public async didSpawn(): Promise<boolean> {
		return this.lifecycle.endPhase('didSpawn');
	}

	public async willSpawn(): Promise<boolean> {
		return this.lifecycle.endPhase('willSpawn');
	}

	public async entityOnLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('entityOnLoad');
	}

	public async onInteract(): Promise<boolean> {
		return this.lifecycle.endPhase('onInteract');
	}

	public async onSpawn(): Promise<boolean> {
		return this.lifecycle.endPhase('onSpawn');
	}

	public async onStop(): Promise<boolean> {
		return this.lifecycle.endPhase('onStop');
	}

	public async willStop(): Promise<boolean> {
		return this.lifecycle.endPhase('willStop');
	}

	public async didStop(): Promise<boolean> {
		return this.lifecycle.endPhase('didStop');
	}

	public async memoryWarning(): Promise<boolean> {
		return this.lifecycle.endPhase('memoryWarning');
	}

	public async willHover(): Promise<boolean> {
		return this.lifecycle.endPhase('willHover');
	}

	public async didHover(): Promise<boolean> {
		return this.lifecycle.endPhase('didHover');
	}

	public async textureDidChange(): Promise<boolean> {
		return this.lifecycle.endPhase('textureDidChange');
	}

	public async textureDidLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('textureDidLoad');
	}

	public async textureOnChange(): Promise<boolean> {
		return this.lifecycle.endPhase('textureOnChange');
	}

	public async textureWillChange(): Promise<boolean> {
		return this.lifecycle.endPhase('textureWillChange');
	}

	public async textureLoadDidFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('textureLoadDidFinish');
	}

	public async textureWillLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('textureWillLoad');
	}

	public async didInteract(): Promise<boolean> {
		return this.lifecycle.endPhase('didInteract');
	}

	public async soundDidCancel(): Promise<boolean> {
		return this.lifecycle.endPhase('soundDidCancel');
	}

	public async soundDidFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('soundDidFinish');
	}

	public async soundOnCancel(): Promise<boolean> {
		return this.lifecycle.endPhase('soundOnCancel');
	}

	public async soundOnPause(): Promise<boolean> {
		return this.lifecycle.endPhase('soundOnPause');
	}

	public async soundOnUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('soundOnUnpause');
	}

	public async soundOnFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('soundOnFinish');
	}

	public async soundWillFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('soundWillFinish');
	}

	public async soundWillPause(): Promise<boolean> {
		return this.lifecycle.endPhase('soundWillPause');
	}

	public async soundWillStart(): Promise<boolean> {
		return this.lifecycle.endPhase('soundWillStart');
	}

	public async soundWillUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('soundWillUnpause');
	}

	public async soundDidReset(): Promise<boolean> {
		return this.lifecycle.endPhase('soundDidReset');
	}

	public async soundOnStart(): Promise<boolean> {
		return this.lifecycle.endPhase('soundOnStart');
	}

	public async soundOnMissing(): Promise<boolean> {
		return this.lifecycle.endPhase('soundOnMissing');
	}

	public async soundWillCancel(): Promise<boolean> {
		return this.lifecycle.endPhase('soundWillCancel');
	}

	public async soundDidStart(): Promise<boolean> {
		return this.lifecycle.endPhase('soundDidStart');
	}

	public async soundOnError(): Promise<boolean> {
		return this.lifecycle.endPhase('soundOnError');
	}

	public async soundDidPause(): Promise<boolean> {
		return this.lifecycle.endPhase('soundDidPause');
	}

	public async soundDidUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('soundDidUnpause');
	}

	public async tweenWillStart(): Promise<boolean> {
		return this.lifecycle.endPhase('tweenWillStart');
	}

	public async tweenWillFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('tweenWillFinish');
	}

	public async tweenOnStart(): Promise<boolean> {
		return this.lifecycle.endPhase('tweenOnStart');
	}

	public async tweenOnFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('tweenOnFinish');
	}

	public async tweenDidStart(): Promise<boolean> {
		return this.lifecycle.endPhase('tweenDidStart');
	}

	public async tweenDidFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('tweenDidFinish');
	}

	public async tweenOnCancel(): Promise<boolean> {
		return this.lifecycle.endPhase('tweenOnCancel');
	}

	public async tweenDidReset(): Promise<boolean> {
		return this.lifecycle.endPhase('tweenDidReset');
	}

	public async tweenDidReplay(): Promise<boolean> {
		return this.lifecycle.endPhase('tweenDidReplay');
	}

	public async tweenDidCancel(): Promise<boolean> {
		return this.lifecycle.endPhase('tweenDidCancel');
	}

	public async tweenWillCancel(): Promise<boolean> {
		return this.lifecycle.endPhase('tweenWillCancel');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
