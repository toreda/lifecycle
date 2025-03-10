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

	public async adapterDidFetchAsset(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterDidFetchAsset');
	}

	public async adapterDidUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterDidUnpause');
	}

	public async adapterDidUnregister(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterDidUnregister');
	}

	public async adapterOnFetchAsset(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterOnFetchAsset');
	}

	public async adapterOnSpawnInstance(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterOnSpawnInstance');
	}

	public async adapterOnSuspend(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterOnSuspend');
	}

	public async adapterOnUnload(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterOnUnload');
	}

	public async adapterOnUnregister(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterOnUnregister');
	}

	public async adapterWillFetchAsset(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterWillFetchAsset');
	}

	public async adapterWillUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterWillUnpause');
	}

	public async adapterWillUnregister(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterWillUnregister');
	}

	public async adapterWillInit(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterWillInit');
	}

	public async adapterDidInit(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterDidInit');
	}

	public async adapterOnReset(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterOnReset');
	}

	public async adapterOnPause(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterOnPause');
	}

	public async adapterOnParseManifest(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterOnParseManifest');
	}

	public async adapterOnLoseFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterOnLoseFocus');
	}

	public async adapterOnInit(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterOnInit');
	}

	public async adapterOnFetchManifest(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterOnFetchManifest');
	}

	public async adapterOnBecomeSpawnable(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterOnBecomeSpawnable');
	}

	public async adapterWillLoseFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterWillLoseFocus');
	}

	public async adapterWillLoadManifest(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterWillLoadManifest');
	}

	public async adapterOnStop(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterOnStop');
	}

	public async adapterOnStart(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterOnStart');
	}

	public async adapterOnUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterOnUnpause');
	}

	public async adapterWillGainFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterWillGainFocus');
	}

	public async adapterDidLoseFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterDidLoseFocus');
	}

	public async adapterDidLoadManifest(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterDidLoadManifest');
	}

	public async adapterDidGainFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterDidGainFocus');
	}

	public async adapterOnClearCache(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterOnClearCache');
	}

	public async adapterOnGainFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterOnGainFocus');
	}

	public async adapterOnLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterOnLoad');
	}

	public async adapterOnLoadManifest(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterOnLoadManifest');
	}

	public async adapterOnBecomeReady(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterOnBecomeReady');
	}

	public async adapterOnRegister(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterOnRegister');
	}

	public async adapterWillBecomeSpawnable(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterWillBecomeSpawnable');
	}

	public async adapterDidBecomeSpawnable(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterDidBecomeSpawnable');
	}

	public async adapterWillRegister(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterWillRegister');
	}

	public async adapterDidRegister(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterDidRegister');
	}

	public async adapterWillFetchManifest(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterWillFetchManifest');
	}

	public async adapterDidFetchManifest(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterDidFetchManifest');
	}

	public async adapterWillLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterWillLoad');
	}

	public async adapterDidLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterDidLoad');
	}

	public async adapterWillStart(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterWillStart');
	}

	public async adapterDidStart(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterDidStart');
	}

	public async adapterWillBecomeReady(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterWillBecomeReady');
	}

	public async adapterDidBecomeReady(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterDidBecomeReady');
	}

	public async adapterWillStop(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterWillStop');
	}

	public async adapterWillReset(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterWillReset');
	}

	public async adapterDidReset(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterDidReset');
	}

	public async adapterDidStop(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterDidStop');
	}

	public async adapterDidUnload(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterDidUnload');
	}

	public async adapterWillPause(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterWillPause');
	}

	public async adapterWillUnload(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterWillUnload');
	}

	public async adapterDidClearCache(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterDidClearCache');
	}

	public async adapterWillClearCache(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterWillClearCache');
	}

	public async adapterWillParseManifest(): Promise<boolean> {
		return this.lifecycle.endPhase('adapterWillParseManifest');
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
