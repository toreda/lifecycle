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

	public reset(): void {
		this.lifecycle.reset();
	}

	public toData(): SceneFlags {
		const o: SceneFlags = {} as any;

		for (const phase of scenePhases) {
			o[phase] = this.lifecycle.get(phase);
		}

		return o;
	}
}
