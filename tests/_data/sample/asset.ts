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
		return this.lifecycle.phase('assetLoadDidFinish');
	}

	public async assetLoadDidStart(): Promise<boolean> {
		return this.lifecycle.phase('assetLoadDidStart');
	}

	public async assetLoadOnAbort(): Promise<boolean> {
		return this.lifecycle.phase('assetLoadOnAbort');
	}

	public async assetLoadOnFinish(): Promise<boolean> {
		return this.lifecycle.phase('assetLoadOnFinish');
	}

	public async assetLoadOnProgress(): Promise<boolean> {
		return this.lifecycle.phase('assetLoadOnProgress');
	}

	public async assetLoadOnStart(): Promise<boolean> {
		return this.lifecycle.phase('assetLoadOnStart');
	}

	public async assetLoadWillFinish(): Promise<boolean> {
		return this.lifecycle.phase('assetLoadWillFinish');
	}

	public async assetLoadWillStart(): Promise<boolean> {
		return this.lifecycle.phase('assetLoadWillStart');
	}

	public async assetSearchDidStart(): Promise<boolean> {
		return this.lifecycle.phase('assetSearchDidStart');
	}

	public async assetSearchDidFinish(): Promise<boolean> {
		return this.lifecycle.phase('assetSearchDidFinish');
	}

	public async assetSearchOnFinish(): Promise<boolean> {
		return this.lifecycle.phase('assetSearchOnFinish');
	}

	public async assetSearchWillStart(): Promise<boolean> {
		return this.lifecycle.phase('assetSearchWillStart');
	}

	public async assetUnloadDidAbort(): Promise<boolean> {
		return this.lifecycle.phase('assetUnloadDidAbort');
	}

	public async assetUnloadDidFinish(): Promise<boolean> {
		return this.lifecycle.phase('assetUnloadDidFinish');
	}

	public async assetUnloadDidStart(): Promise<boolean> {
		return this.lifecycle.phase('assetUnloadDidStart');
	}

	public async assetUnloadOnAbort(): Promise<boolean> {
		return this.lifecycle.phase('assetUnloadOnAbort');
	}

	public async assetUnloadOnFinish(): Promise<boolean> {
		return this.lifecycle.phase('assetUnloadOnFinish');
	}

	public async assetUnloadOnStart(): Promise<boolean> {
		return this.lifecycle.phase('assetUnloadOnStart');
	}

	public async assetUnloadWillAbort(): Promise<boolean> {
		return this.lifecycle.phase('assetUnloadWillAbort');
	}

	public async assetUnloadWillFinish(): Promise<boolean> {
		return this.lifecycle.phase('assetUnloadWillFinish');
	}

	public async assetUnloadWillStart(): Promise<boolean> {
		return this.lifecycle.phase('assetUnloadWillStart');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
