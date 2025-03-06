import {AdapterDelegate} from '../../../src/adapter/delegate';
import {AdapterPhase} from '../../../src/adapter/phase';
import {Lifecycle} from '../../../src/lifecycle';
import type {ServerDelegate} from '../../../src/server/delegate';
import {ServerLifecycle} from '../../../src/server/lifecycle';

export class SampleAdapter implements AdapterDelegate {
	public readonly lifecycle: Lifecycle<AdapterPhase>;
	public readonly children: AdapterDelegate<unknown>[];

	constructor() {
		this.children = [];
		this.lifecycle = new Lifecycle<AdapterPhase>();
	}

	public async adapterWillInit(): Promise<boolean> {
		return this.lifecycle.phase('adapterWillInit');
	}

	public async adapterDidInit(): Promise<boolean> {
		return this.lifecycle.phase('adapterDidInit');
	}

	public async adapterOnReset(): Promise<boolean> {
		return this.lifecycle.phase('adapterOnReset');
	}

	public async adapterOnPause(): Promise<boolean> {
		return this.lifecycle.phase('adapterOnPause');
	}

	public async adapterOnParseManifest(): Promise<boolean> {
		return this.lifecycle.phase('adapterOnParseManifest');
	}

	public async adapterOnLoseFocus(): Promise<boolean> {
		return this.lifecycle.phase('adapterOnLoseFocus');
	}

	public async adapterOnInit(): Promise<boolean> {
		return this.lifecycle.phase('adapterOnInit');
	}

	public async adapterOnFetchManifest(): Promise<boolean> {
		return this.lifecycle.phase('adapterOnFetchManifest');
	}

	public async adapterOnBecomeSpawnable(): Promise<boolean> {
		return this.lifecycle.phase('adapterOnBecomeSpawnable');
	}

	public async adapterWillLoseFocus(): Promise<boolean> {
		return this.lifecycle.phase('adapterWillLoseFocus');
	}

	public async adapterWillLoadManifest(): Promise<boolean> {
		return this.lifecycle.phase('adapterWillLoadManifest');
	}

	public async adapterOnStop(): Promise<boolean> {
		return this.lifecycle.phase('adapterOnStop');
	}

	public async adapterOnStart(): Promise<boolean> {
		return this.lifecycle.phase('adapterOnStart');
	}

	public async adapterOnUnpause(): Promise<boolean> {
		return this.lifecycle.phase('adapterOnUnpause');
	}

	public async adapterWillGainFocus(): Promise<boolean> {
		return this.lifecycle.phase('adapterWillGainFocus');
	}

	public async adapterDidLoseFocus(): Promise<boolean> {
		return this.lifecycle.phase('adapterDidLoseFocus');
	}

	public async adapterDidLoadManifest(): Promise<boolean> {
		return this.lifecycle.phase('adapterDidLoadManifest');
	}

	public async adapterDidGainFocus(): Promise<boolean> {
		return this.lifecycle.phase('adapterDidGainFocus');
	}

	public async adapterOnClearCache(): Promise<boolean> {
		return this.lifecycle.phase('adapterOnClearCache');
	}

	public async adapterOnGainFocus(): Promise<boolean> {
		return this.lifecycle.phase('adapterOnGainFocus');
	}

	public async adapterOnLoad(): Promise<boolean> {
		return this.lifecycle.phase('adapterOnLoad');
	}

	public async adapterOnLoadManifest(): Promise<boolean> {
		return this.lifecycle.phase('adapterOnLoadManifest');
	}

	public async adapterOnReady(): Promise<boolean> {
		return this.lifecycle.phase('adapterOnReady');
	}

	public async adapterOnRegister(): Promise<boolean> {
		return this.lifecycle.phase('adapterOnRegister');
	}

	public async adapterWillBecomeSpawnable(): Promise<boolean> {
		return this.lifecycle.phase('adapterWillBecomeSpawnable');
	}

	public async adapterDidBecomeSpawnable(): Promise<boolean> {
		return this.lifecycle.phase('adapterDidBecomeSpawnable');
	}

	public async adapterWillRegister(): Promise<boolean> {
		return this.lifecycle.phase('adapterWillRegister');
	}

	public async adapterDidRegister(): Promise<boolean> {
		return this.lifecycle.phase('adapterDidRegister');
	}

	public async adapterWillFetchManifest(): Promise<boolean> {
		return this.lifecycle.phase('adapterWillFetchManifest');
	}

	public async adapterDidFetchManifest(): Promise<boolean> {
		return this.lifecycle.phase('adapterDidFetchManifest');
	}

	public async adapterWillLoad(): Promise<boolean> {
		return this.lifecycle.phase('adapterWillLoad');
	}

	public async adapterDidLoad(): Promise<boolean> {
		return this.lifecycle.phase('adapterDidLoad');
	}

	public async adapterWillStart(): Promise<boolean> {
		return this.lifecycle.phase('adapterWillStart');
	}

	public async adapterDidStart(): Promise<boolean> {
		return this.lifecycle.phase('adapterDidStart');
	}

	public async adapterWillBecomeReady(): Promise<boolean> {
		return this.lifecycle.phase('adapterWillBecomeReady');
	}

	public async adapterDidBecomeReady(): Promise<boolean> {
		return this.lifecycle.phase('adapterDidBecomeReady');
	}

	public async adapterWillStop(): Promise<boolean> {
		return this.lifecycle.phase('adapterWillStop');
	}

	public async adapterWillReset(): Promise<boolean> {
		return this.lifecycle.phase('adapterWillReset');
	}

	public async adapterDidReset(): Promise<boolean> {
		return this.lifecycle.phase('adapterDidReset');
	}

	public async adapterDidStop(): Promise<boolean> {
		return this.lifecycle.phase('adapterDidStop');
	}

	public async adapterDidUnload(): Promise<boolean> {
		return this.lifecycle.phase('adapterDidUnload');
	}

	public async adapterWillPause(): Promise<boolean> {
		return this.lifecycle.phase('adapterWillPause');
	}

	public async adapterWillUnload(): Promise<boolean> {
		return this.lifecycle.phase('adapterWillUnload');
	}

	public async adapterDidClearCache(): Promise<boolean> {
		return this.lifecycle.phase('adapterDidClearCache');
	}

	public async adapterWillClearCache(): Promise<boolean> {
		return this.lifecycle.phase('adapterWillClearCache');
	}

	public async adapterWillParseManifest(): Promise<boolean> {
		return this.lifecycle.phase('adapterWillParseManifest');
	}

	public async adapterDidPause(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterDidPause');
	}

	public async adapterDidParseManifest(): Promise<boolean> {
		return this.lifecycle.phase('adapterDidParseManifest');
	}

	public async adapterDidSpawnInstance(): Promise<boolean> {
		return this.lifecycle.phase('adapterDidSpawnInstance');
	}

	public async adapterWillSpawnInstance(): Promise<boolean> {
		return this.lifecycle.phase('adapterWillSpawnInstance');
	}

	public async adapterDidSuspend(): Promise<boolean> {
		return this.lifecycle.phase('adapterDidSuspend');
	}
	public async adapterWillSuspend(): Promise<boolean> {
		return this.lifecycle.phase('adapterWillSuspend');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
