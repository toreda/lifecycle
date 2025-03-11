import {type AssetDelegate} from '../../../src/asset/delegate';
import {AssetLifecycle} from '../../../src/asset/lifecycle';

export class SampleAsset implements AssetDelegate {
	public readonly lifecycle: AssetLifecycle;
	public readonly children: AssetDelegate<unknown>[];

	constructor() {
		this.children = [];
		this.lifecycle = new AssetLifecycle();
	}

	public async assetLoadDidFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('assetLoadDidFinish');
	}

	public async assetLoadDidStart(): Promise<boolean> {
		return this.lifecycle.endPhase('assetLoadDidStart');
	}

	public async assetSearchWillFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('assetSearchWillFinish');
	}

	public async assetSearchOnStart(): Promise<boolean> {
		return this.lifecycle.endPhase('assetSearchOnStart');
	}

	public async assetLoadDidAbort(): Promise<boolean> {
		return this.lifecycle.endPhase('assetLoadDidAbort');
	}

	public async assetLoadOnAbort(): Promise<boolean> {
		return this.lifecycle.endPhase('assetLoadOnAbort');
	}

	public async assetLoadOnFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('assetLoadOnFinish');
	}

	public async assetLoadOnProgress(): Promise<boolean> {
		return this.lifecycle.endPhase('assetLoadOnProgress');
	}

	public async assetLoadOnStart(): Promise<boolean> {
		return this.lifecycle.endPhase('assetLoadOnStart');
	}

	public async assetLoadWillFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('assetLoadWillFinish');
	}

	public async assetLoadWillStart(): Promise<boolean> {
		return this.lifecycle.endPhase('assetLoadWillStart');
	}

	public async assetSearchDidStart(): Promise<boolean> {
		return this.lifecycle.endPhase('assetSearchDidStart');
	}

	public async assetSearchDidFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('assetSearchDidFinish');
	}

	public async assetSearchOnFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('assetSearchOnFinish');
	}

	public async assetSearchWillStart(): Promise<boolean> {
		return this.lifecycle.endPhase('assetSearchWillStart');
	}

	public async assetUnloadDidAbort(): Promise<boolean> {
		return this.lifecycle.endPhase('assetUnloadDidAbort');
	}

	public async assetUnloadDidFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('assetUnloadDidFinish');
	}

	public async assetUnloadDidStart(): Promise<boolean> {
		return this.lifecycle.endPhase('assetUnloadDidStart');
	}

	public async assetUnloadOnAbort(): Promise<boolean> {
		return this.lifecycle.endPhase('assetUnloadOnAbort');
	}

	public async assetUnloadOnFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('assetUnloadOnFinish');
	}

	public async assetUnloadOnStart(): Promise<boolean> {
		return this.lifecycle.endPhase('assetUnloadOnStart');
	}

	public async assetUnloadWillAbort(): Promise<boolean> {
		return this.lifecycle.endPhase('assetUnloadWillAbort');
	}

	public async assetUnloadWillFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('assetUnloadWillFinish');
	}

	public async assetUnloadWillStart(): Promise<boolean> {
		return this.lifecycle.endPhase('assetUnloadWillStart');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
