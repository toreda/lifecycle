import {Lifecycle, type TxnDelegate, TxnPhase} from '../../../src';

export class SampleTxn implements TxnDelegate<unknown> {
	public readonly lifecycle: Lifecycle<TxnPhase>;
	public readonly children: TxnDelegate[];

	constructor() {
		this.children = [];
		this.lifecycle = new Lifecycle<TxnPhase>();
	}

	public async txnWillBegin(): Promise<boolean> {
		return this.lifecycle.phase('txnWillBegin');
	}

	public async txnDidBegin(): Promise<boolean> {
		return this.lifecycle.phase('txnDidBegin');
	}

	public async txnWillInterrupt(): Promise<boolean> {
		return this.lifecycle.phase('txnWillInterrupt');
	}

	public async txnOnFail(): Promise<boolean> {
		return this.lifecycle.phase('txnOnFail');
	}

	public async txnOnInterrupt(): Promise<boolean> {
		return this.lifecycle.phase('txnOnInterrupt');
	}

	public async txnOnRevert(): Promise<boolean> {
		return this.lifecycle.phase('txnOnRevert');
	}

	public async txnDidInterrupt(): Promise<boolean> {
		return this.lifecycle.phase('txnDidInterrupt');
	}

	public async txnOnTimeout(): Promise<boolean> {
		return this.lifecycle.phase('txnOnTimeout');
	}

	public async txnOnPause(): Promise<boolean> {
		return this.lifecycle.phase('txnOnPause');
	}
	public async txnOnSucceed(): Promise<boolean> {
		return this.lifecycle.phase('txnOnSucceed');
	}

	public async txnOnResume(): Promise<boolean> {
		return this.lifecycle.phase('txnOnResume');
	}

	public async txnOnBegin(): Promise<boolean> {
		return this.lifecycle.phase('txnOnBegin');
	}

	public async txnWillPause(): Promise<boolean> {
		return this.lifecycle.phase('txnWillPause');
	}

	public async txnDidPause(): Promise<boolean> {
		return this.lifecycle.phase('txnDidPause');
	}

	public async txnWillTimeout(): Promise<boolean> {
		return this.lifecycle.phase('txnWillTimeout');
	}

	public async txnDidTimeout(): Promise<boolean> {
		return this.lifecycle.phase('txnDidTimeout');
	}

	public async txnWillResume(): Promise<boolean> {
		return this.lifecycle.phase('txnWillResume');
	}

	public async txnDidResume(): Promise<boolean> {
		return this.lifecycle.phase('txnDidResume');
	}

	public async txnWillCancel(): Promise<boolean> {
		return this.lifecycle.phase('txnWillCancel');
	}

	public async txnOnCancel(): Promise<boolean> {
		return this.lifecycle.phase('txnOnCancel');
	}

	public async txnDidCancel(): Promise<boolean> {
		return this.lifecycle.phase('txnDidCancel');
	}

	public async txnWillRevert(): Promise<boolean> {
		return this.lifecycle.phase('txnWillRevert');
	}

	public async txnDidRevert(): Promise<boolean> {
		return this.lifecycle.phase('txnDidRevert');
	}

	public async txnWillFail(): Promise<boolean> {
		return this.lifecycle.phase('txnWillFail');
	}

	public async txnDidFail(): Promise<boolean> {
		return this.lifecycle.phase('txnDidFail');
	}

	public async txnWillSucceed(): Promise<boolean> {
		return this.lifecycle.phase('txnWillSucceed');
	}

	public async txnDidSucceed(): Promise<boolean> {
		return this.lifecycle.phase('txnDidSucceed');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
