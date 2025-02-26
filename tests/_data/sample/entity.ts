import type {EntityDelegate} from '../../../src/entity/delegate';
import {EntityLifecycle} from '../../../src/entity/lifecycle';

export class SampleEntity implements EntityDelegate<unknown> {
	public readonly lifecycle: EntityLifecycle;
	public readonly children: EntityDelegate[];

	constructor() {
		this.children = [];
		this.lifecycle = new EntityLifecycle();
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

	public async onHover(): Promise<boolean> {
		return this.lifecycle.phase('onHover');
	}

	public async onDespawn(): Promise<boolean> {
		return this.lifecycle.phase('onDespawn');
	}

	public async onPause(): Promise<boolean> {
		return this.lifecycle.phase('onPause');
	}

	public async onUnpause(): Promise<boolean> {
		return this.lifecycle.phase('onUnpause');
	}

	public async animWillCancel(): Promise<boolean> {
		return this.lifecycle.phase('animWillCancel');
	}

	public async onMove(): Promise<boolean> {
		return this.lifecycle.phase('onMove');
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

	public async willInit(): Promise<boolean> {
		return this.lifecycle.phase('willInit');
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

	public async didDespawn(): Promise<boolean> {
		return this.lifecycle.phase('didDespawn');
	}

	public async didPause(): Promise<boolean> {
		return this.lifecycle.phase('didPause');
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

	public async onLoad(): Promise<boolean> {
		return this.lifecycle.phase('onLoad');
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

	public async onStart(): Promise<boolean> {
		return this.lifecycle.phase('onStart');
	}

	public async onShow(): Promise<boolean> {
		return this.lifecycle.phase('onShow');
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

	public async textureOnLoad(): Promise<boolean> {
		return this.lifecycle.phase('textureOnLoad');
	}

	public async textureWillLoad(): Promise<boolean> {
		return this.lifecycle.phase('textureWillLoad');
	}

	public async willInteract(): Promise<boolean> {
		return this.lifecycle.phase('willInteract');
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
