import {TxnDelegate, TxnLifecycle} from '../../../src';

export class SampleTxn implements TxnDelegate<unknown> {
	public readonly lifecycle: TxnLifecycle;
	public readonly children: TxnDelegate[];

	constructor() {
		this.children = [];
		this.lifecycle = new TxnLifecycle();
	}

	public async willBegin(): Promise<boolean> {
		return this.lifecycle.phase('willBegin');
	}

	public async didBegin(): Promise<boolean> {
		return this.lifecycle.phase('didBegin');
	}

	public async willInterrupt(): Promise<boolean> {
		return this.lifecycle.phase('willInterrupt');
	}

	public async didInterrupt(): Promise<boolean> {
		return this.lifecycle.phase('didInterrupt');
	}

	public async willPause(): Promise<boolean> {
		return this.lifecycle.phase('willPause');
	}

	public async didPause(): Promise<boolean> {
		return this.lifecycle.phase('didPause');
	}

	public async willTimeout(): Promise<boolean> {
		return this.lifecycle.phase('willTimeout');
	}

	public async didTimeout(): Promise<boolean> {
		return this.lifecycle.phase('didTimeout');
	}

	public async willResume(): Promise<boolean> {
		return this.lifecycle.phase('willResume');
	}

	public async didResume(): Promise<boolean> {
		return this.lifecycle.phase('didResume');
	}

	public async willCancel(): Promise<boolean> {
		return this.lifecycle.phase('willCancel');
	}

	public async didCancel(): Promise<boolean> {
		return this.lifecycle.phase('didCancel');
	}

	public async willRevert(): Promise<boolean> {
		return this.lifecycle.phase('willRevert');
	}

	public async didRevert(): Promise<boolean> {
		return this.lifecycle.phase('didRevert');
	}

	public async willFail(): Promise<boolean> {
		return this.lifecycle.phase('willFail');
	}

	public async didFail(): Promise<boolean> {
		return this.lifecycle.phase('didFail');
	}

	public async willSucceed(): Promise<boolean> {
		return this.lifecycle.phase('willSucceed');
	}

	public async didSucceed(): Promise<boolean> {
		return this.lifecycle.phase('didSucceed');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
