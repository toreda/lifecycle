import {Lifecycle, TextureDelegate, TexturePhase, type TxnDelegate, TxnPhase} from '../../../src';

export class SampleTexture implements TextureDelegate<unknown> {
	public readonly lifecycle: Lifecycle<TexturePhase>;
	public readonly children: TextureDelegate[];

	constructor() {
		this.children = [];
		this.lifecycle = new Lifecycle<TexturePhase>();
	}

	public async textureDidChange(): Promise<boolean> {
		return this.lifecycle.endPhase('textureDidChange');
	}

	public async textureLoadDidFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('textureLoadDidFinish');
	}

	public async textureLoadDidStart(): Promise<boolean> {
		return this.lifecycle.endPhase('textureLoadDidStart');
	}

	public async textureLoadOnError(): Promise<boolean> {
		return this.lifecycle.endPhase('textureLoadOnError');
	}

	public async textureLoadOnFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('textureLoadOnFinish');
	}

	public async textureLoadOnStart(): Promise<boolean> {
		return this.lifecycle.endPhase('textureLoadOnStart');
	}

	public async textureLoadWillFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('textureLoadWillFinish');
	}

	public async textureLoadWillStart(): Promise<boolean> {
		return this.lifecycle.endPhase('textureLoadWillStart');
	}

	public async textureOnChange(): Promise<boolean> {
		return this.lifecycle.endPhase('textureOnChange');
	}

	public async textureUnloadDidFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('textureUnloadDidFinish');
	}

	public async textureUnloadDidStart(): Promise<boolean> {
		return this.lifecycle.endPhase('textureUnloadDidStart');
	}

	public async textureUnloadOnError(): Promise<boolean> {
		return this.lifecycle.endPhase('textureUnloadOnError');
	}

	public async textureUnloadOnFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('textureUnloadOnFinish');
	}

	public async textureUnloadOnStart(): Promise<boolean> {
		return this.lifecycle.endPhase('textureUnloadOnStart');
	}

	public async textureUnloadWillFinish(): Promise<boolean> {
		return this.lifecycle.endPhase('textureUnloadWillFinish');
	}

	public async textureUnloadWillStart(): Promise<boolean> {
		return this.lifecycle.endPhase('textureUnloadWillStart');
	}

	public async textureWillResize(): Promise<boolean> {
		return this.lifecycle.endPhase('textureWillResize');
	}

	public async textureWillChange(): Promise<boolean> {
		return this.lifecycle.endPhase('textureWillChange');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
