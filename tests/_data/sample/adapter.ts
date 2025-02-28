import {AdapterDelegate} from '../../../src/adapter/delegate';
import {AdapterPhase} from '../../../src/adapter/phase';
import {Lifecycle} from '../../../src/lifecycle';
import type {ServerDelegate} from '../../../src/server/delegate';
import {ServerLifecycle} from '../../../src/server/lifecycle';

export class SampleAdapter implements AdapterDelegate<AdapterPhase> {
	public readonly lifecycle: Lifecycle<AdapterPhase>;
	public readonly children: AdapterDelegate<AdapterPhase, unknown>[];

	constructor() {
		this.children = [];
		this.lifecycle = new Lifecycle<AdapterPhase>();
	}

	public async willInit(): Promise<boolean> {
		return this.lifecycle.phase('willInit');
	}

	public async didInit(): Promise<boolean> {
		return this.lifecycle.phase('didInit');
	}

	public async willBecomeSpawnable(): Promise<boolean> {
		return this.lifecycle.phase('willBecomeSpawnable');
	}

	public async didBecomeSpawnable(): Promise<boolean> {
		return this.lifecycle.phase('didBecomeSpawnable');
	}

	public async willRegister(): Promise<boolean> {
		return this.lifecycle.phase('willRegister');
	}

	public async didRegister(): Promise<boolean> {
		return this.lifecycle.phase('didRegister');
	}

	public async willFetchManifest(): Promise<boolean> {
		return this.lifecycle.phase('willFetchManifest');
	}

	public async didFetchManifest(): Promise<boolean> {
		return this.lifecycle.phase('didFetchManifest');
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

	public async willBecomeReady(): Promise<boolean> {
		return this.lifecycle.phase('willBecomeReady');
	}

	public async didBecomeReady(): Promise<boolean> {
		return this.lifecycle.phase('didBecomeReady');
	}

	public async willStop(): Promise<boolean> {
		return this.lifecycle.phase('willStop');
	}

	public async willReset(): Promise<boolean> {
		return this.lifecycle.phase('willReset');
	}

	public async didReset(): Promise<boolean> {
		return this.lifecycle.phase('didReset');
	}

	public async didStop(): Promise<boolean> {
		return this.lifecycle.phase('didStop');
	}

	public async didUnload(): Promise<boolean> {
		return this.lifecycle.phase('didUnload');
	}

	public async willPause(): Promise<boolean> {
		return this.lifecycle.phase('willPause');
	}

	public async willUnload(): Promise<boolean> {
		return this.lifecycle.phase('willUnload');
	}

	public async didClearCache(): Promise<boolean> {
		return this.lifecycle.phase('didClearCache');
	}

	public async willClearCache(): Promise<boolean> {
		return this.lifecycle.phase('willClearCache');
	}

	public async willParseManifest(): Promise<boolean> {
		return this.lifecycle.phase('willParseManifest');
	}

	public async didPause(): Promise<boolean> {
		return this.lifecycle.phase('didPause');
	}

	public async didParseManifest(): Promise<boolean> {
		return this.lifecycle.phase('didParseManifest');
	}

	public async didSpawnInstance(): Promise<boolean> {
		return this.lifecycle.phase('didSpawnInstance');
	}

	public async willSpawnInstance(): Promise<boolean> {
		return this.lifecycle.phase('willSpawnInstance');
	}

	public async didSuspend(): Promise<boolean> {
		return this.lifecycle.phase('didSuspend');
	}
	public async willSuspend(): Promise<boolean> {
		return this.lifecycle.phase('willSuspend');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
