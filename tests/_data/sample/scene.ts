import type {SceneDelegate} from '../../../src/scene/delegate';
import type {SceneFlags} from '../../../src/scene/flags';
import {SceneLifecycle} from '../../../src/scene/lifecycle';
import {scenePhases} from '../../../src/scene/phases';

export class SampleScene implements SceneDelegate<unknown> {
	public readonly lifecycle: SceneLifecycle;
	public readonly children: SceneDelegate[];

	constructor() {
		this.children = [];
		this.lifecycle = new SceneLifecycle();
	}

	public async willInit(): Promise<boolean> {
		return this.lifecycle.phase('willInit');
	}

	public async willStop(): Promise<boolean> {
		return this.lifecycle.phase('willStop');
	}

	public async didBecomeReady(): Promise<boolean> {
		return this.lifecycle.phase('didBecomeReady');
	}

	public async willBecomeReady(): Promise<boolean> {
		return this.lifecycle.phase('willBecomeReady');
	}

	public async didReset(): Promise<boolean> {
		return this.lifecycle.phase('didReset');
	}

	public async willReset(): Promise<boolean> {
		return this.lifecycle.phase('willReset');
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

	public async didStop(): Promise<boolean> {
		return this.lifecycle.phase('didStop');
	}

	public async willHide(): Promise<boolean> {
		return this.lifecycle.phase('willHide');
	}

	public async didHide(): Promise<boolean> {
		return this.lifecycle.phase('didHide');
	}

	public async didShow(): Promise<boolean> {
		return this.lifecycle.phase('didShow');
	}

	public async willShow(): Promise<boolean> {
		return this.lifecycle.phase('willShow');
	}

	public async willPause(): Promise<boolean> {
		return this.lifecycle.phase('willPause');
	}

	public async willUnpause(): Promise<boolean> {
		return this.lifecycle.phase('willUnpause');
	}

	public async didPause(): Promise<boolean> {
		return this.lifecycle.phase('didPause');
	}

	public async didUnpause(): Promise<boolean> {
		return this.lifecycle.phase('didUnpause');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
