
import {Lifecycle} from '../../../src/lifecycle';
import {ScenePhase} from '../../../src/scene/phase';
import type {SceneDelegate} from '../../../src/scene/delegate';

export class SampleScene implements SceneDelegate<ScenePhase> {
	public readonly lifecycle: Lifecycle<ScenePhase>;
	public readonly children: SceneDelegate<ScenePhase>[];

	constructor() {
		this.children = [];
		this.lifecycle = new Lifecycle<ScenePhase>();
	}

	public async sceneWillInit(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneWillInit');
	}

	public async sceneWillStop(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneWillStop');
	}

	public async sceneOnLoseFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneOnLoseFocus');
	}

	public async sceneDidLoseFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneDidLoseFocus');
	}

	public async sceneWillLoseFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneWillLoseFocus');
	}

	public async sceneDidGainFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneDidGainFocus');
	}

	public async sceneWillGainFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneWillGainFocus');
	}

	public async sceneOnGainFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneOnGainFocus');
	}

	public async sceneDidBecomeReady(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneDidBecomeReady');
	}

	public async sceneOnInit(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneOnInit');
	}

	public async sceneOnReady(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneOnReady');
	}

	public async sceneOnHide(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneOnHide');
	}

	public async sceneOnShow(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneOnShow');
	}

	public async sceneOnLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneOnLoad');
	}

	public async sceneDidReset(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneDidReset');
	}

	public async sceneWillBecomeReady(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneWillBecomeReady');
	}

	public async didReset(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneDidReset');
	}

	public async sceneWillReset(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneWillReset');
	}

	public async sceneDidInit(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneDidInit');
	}

	public async sceneWillLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneWillLoad');
	}

	public async sceneDidLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneDidLoad');
	}

	public async sceneWillStart(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneWillStart');
	}

	public async sceneDidStart(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneDidStart');
	}

	public async sceneDidStop(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneDidStop');
	}

	public async sceneWillHide(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneWillHide');
	}

	public async sceneDidHide(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneDidHide');
	}

	public async sceneDidShow(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneDidShow');
	}

	public async sceneWillShow(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneWillShow');
	}

	public async sceneWillPause(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneWillPause');
	}

	public async sceneWillUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneWillUnpause');
	}

	public async sceneDidPause(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneDidPause');
	}

	public async sceneOnPause(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneOnPause');
	}

	public async sceneOnUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneOnUnpause');
	}

	public async sceneOnStop(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneOnStop');
	}

	public async sceneOnReset(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneOnReset');
	}

	public async sceneOnStart(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneOnStart');
	}

	public async sceneDidUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('sceneDidUnpause');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
