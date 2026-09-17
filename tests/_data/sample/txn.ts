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

	public async txnOnUnpause(): Promise<boolean> {
		return this.lifecycle.phase('txnOnUnpause');
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

	public async txnWillUnpause(): Promise<boolean> {
		return this.lifecycle.phase('txnWillUnpause');
	}

	public async txnDidUnpause(): Promise<boolean> {
		return this.lifecycle.phase('txnDidUnpause');
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

	public async txnWillValidate(): Promise<boolean> {
		return this.lifecycle.phase('txnWillValidate');
	}

	public async txnOnValidate(): Promise<boolean> {
		return this.lifecycle.phase('txnOnValidate');
	}

	public async txnDidValidate(): Promise<boolean> {
		return this.lifecycle.phase('txnDidValidate');
	}

	public async txnWillPrepare(): Promise<boolean> {
		return this.lifecycle.phase('txnWillPrepare');
	}

	public async txnOnPrepare(): Promise<boolean> {
		return this.lifecycle.phase('txnOnPrepare');
	}

	public async txnDidPrepare(): Promise<boolean> {
		return this.lifecycle.phase('txnDidPrepare');
	}

	public async txnWillCommit(): Promise<boolean> {
		return this.lifecycle.phase('txnWillCommit');
	}

	public async txnOnCommit(): Promise<boolean> {
		return this.lifecycle.phase('txnOnCommit');
	}

	public async txnDidCommit(): Promise<boolean> {
		return this.lifecycle.phase('txnDidCommit');
	}

	public async txnRevertWillFail(): Promise<boolean> {
		return this.lifecycle.phase('txnRevertWillFail');
	}

	public async txnRevertOnFail(): Promise<boolean> {
		return this.lifecycle.phase('txnRevertOnFail');
	}

	public async txnRevertDidFail(): Promise<boolean> {
		return this.lifecycle.phase('txnRevertDidFail');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
