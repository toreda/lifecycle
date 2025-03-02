import {type AnimDelegate} from '../../../src';
import {AnimLifecycle} from '../../../src/anim/lifecycle';

export class SampleAnim implements AnimDelegate {
	public readonly lifecycle: AnimLifecycle;
	public readonly children: AnimDelegate<unknown>[];

	constructor() {
		this.children = [];
		this.lifecycle = new AnimLifecycle();
	}

	public async animDidCancel(): Promise<boolean> {
		return this.lifecycle.phase('animDidCancel');
	}

	public async animDidFinish(): Promise<boolean> {
		return this.lifecycle.phase('animDidFinish');
	}

	public async animDidStart(): Promise<boolean> {
		return this.lifecycle.phase('animDidStart');
	}

	public async animOnCancel(): Promise<boolean> {
		return this.lifecycle.phase('animOnCancel');
	}

	public async animOnError(): Promise<boolean> {
		return this.lifecycle.phase('animOnError');
	}

	public async animOnFinish(): Promise<boolean> {
		return this.lifecycle.phase('animOnFinish');
	}

	public async animOnMissing(): Promise<boolean> {
		return this.lifecycle.phase('animOnMissing');
	}

	public async animOnStart(): Promise<boolean> {
		return this.lifecycle.phase('animOnStart');
	}

	public async animWillStart(): Promise<boolean> {
		return this.lifecycle.phase('animWillStart');
	}

	public async animWillFinish(): Promise<boolean> {
		return this.lifecycle.phase('animWillFinish');
	}

	public async animWillCancel(): Promise<boolean> {
		return this.lifecycle.phase('animWillCancel');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
