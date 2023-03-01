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

	public toData(): EntityFlags {
		const o: EntityFlags = {} as any;

		for (const phase of entityPhases) {
			o[phase] = this.lifecycle.get(phase);
		}

		return o;
	}
}
