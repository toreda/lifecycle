import type {EntityDelegate} from '../../../src/entity/delegate';
import type {EntityFlags} from '../../../src/entity/flags';
import {EntityLifecycle} from '../../../src/entity/lifecycle';
import {entityPhases} from '../../../src/entity/phases';

export class SampleEntity implements EntityDelegate<unknown> {
	public readonly lifecycle: EntityLifecycle;
	public readonly children: EntityDelegate[];

	constructor() {
		this.children = [];
		this.lifecycle = new EntityLifecycle();
	}

	public async willChangeState(): Promise<boolean> {
		return this.lifecycle.phase('willChangeState');
	}

	public async didChangeState(): Promise<boolean> {
		return this.lifecycle.phase('didChangeState');
	}

	public async willInit(): Promise<boolean> {
		return this.lifecycle.phase('willInit');
	}

	public async willPlaySound(): Promise<boolean> {
		return this.lifecycle.phase('willPlaySound');
	}

	public async didPlaySound(): Promise<boolean> {
		return this.lifecycle.phase('didPlaySound');
	}

	public async willPlayAnimation(): Promise<boolean> {
		return this.lifecycle.phase('willPlayAnimation');
	}

	public async didPlayAnimation(): Promise<boolean> {
		return this.lifecycle.phase('didPlayAnimation');
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

	public async willLoadAsset(): Promise<boolean> {
		return this.lifecycle.phase('willLoadAsset');
	}

	public async didLoadAsset(): Promise<boolean> {
		return this.lifecycle.phase('didLoadAsset');
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

	public async didLoad(): Promise<boolean> {
		return this.lifecycle.phase('didLoad');
	}

	public async willStart(): Promise<boolean> {
		return this.lifecycle.phase('willStart');
	}

	public async didStart(): Promise<boolean> {
		return this.lifecycle.phase('didStart');
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

	public reset(): void {
		this.lifecycle.reset();
	}

	public toData(): EntityFlags {
		return this.lifecycle.toData();
	}
}
