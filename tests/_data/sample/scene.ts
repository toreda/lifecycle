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
		return this.lifecycle.phase('sceneWillInit');
	}

	public async sceneWillStop(): Promise<boolean> {
		return this.lifecycle.phase('sceneWillStop');
	}

	public async didBecomeReady(): Promise<boolean> {
		return this.lifecycle.phase('sceneDidBecomeReady');
	}

	public async sceneWillBecomeReady(): Promise<boolean> {
		return this.lifecycle.phase('sceneWillBecomeReady');
	}

	public async didReset(): Promise<boolean> {
		return this.lifecycle.phase('sceneDidReset');
	}

	public async sceneWillReset(): Promise<boolean> {
		return this.lifecycle.phase('sceneWillReset');
	}

	public async didInit(): Promise<boolean> {
		return this.lifecycle.phase('sceneDidInit');
	}

	public async sceneWillLoad(): Promise<boolean> {
		return this.lifecycle.phase('sceneWillLoad');
	}

	public async sceneDidLoad(): Promise<boolean> {
		return this.lifecycle.phase('sceneDidLoad');
	}

	public async sceneWillStart(): Promise<boolean> {
		return this.lifecycle.phase('sceneWillStart');
	}

	public async sceneDidStart(): Promise<boolean> {
		return this.lifecycle.phase('sceneDidStart');
	}

	public async sceneDidStop(): Promise<boolean> {
		return this.lifecycle.phase('sceneDidStop');
	}

	public async sceneWillHide(): Promise<boolean> {
		return this.lifecycle.phase('sceneWillHide');
	}

	public async sceneDidHide(): Promise<boolean> {
		return this.lifecycle.phase('sceneDidHide');
	}

	public async sceneDidShow(): Promise<boolean> {
		return this.lifecycle.phase('sceneDidShow');
	}

	public async sceneWillShow(): Promise<boolean> {
		return this.lifecycle.phase('sceneWillShow');
	}

	public async sceneWillPause(): Promise<boolean> {
		return this.lifecycle.phase('sceneWillPause');
	}

	public async sceneWillUnpause(): Promise<boolean> {
		return this.lifecycle.phase('sceneWillUnpause');
	}

	public async sceneDidPause(): Promise<boolean> {
		return this.lifecycle.phase('sceneDidPause');
	}

	public async sceneOnPause(): Promise<boolean> {
		return this.lifecycle.phase('sceneOnPause');
	}

	public async sceneDidUnpause(): Promise<boolean> {
		return this.lifecycle.phase('sceneDidUnpause');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
