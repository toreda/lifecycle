import type {CnxDelegate} from '../../../src/cnx/delegate';
import type {CnxFlags} from '../../../src/cnx/flags';
import {CnxLifecycle} from '../../../src/cnx/lifecycle';
import {cnxPhases} from '../../../src/cnx/phases';

export class SampleCnx implements CnxDelegate<unknown> {
	public readonly lifecycle: CnxLifecycle;
	public readonly children: CnxDelegate[];

	constructor() {
		this.children = [];
		this.lifecycle = new CnxLifecycle();
	}

	public async didDisconnect(): Promise<boolean> {
		return this.lifecycle.phase('didDisconnect');
	}

	public async didFailClose(): Promise<boolean> {
		return this.lifecycle.phase('didFailClose');
	}

	public async didFailConnect(): Promise<boolean> {
		return this.lifecycle.phase('didFailConnect');
	}

	public async didConnect(): Promise<boolean> {
		return this.lifecycle.phase('didConnect');
	}

	public async didReconnect(): Promise<boolean> {
		return this.lifecycle.phase('didReconnect');
	}

	public async didClose(): Promise<boolean> {
		return this.lifecycle.phase('didClose');
	}

	public async willTimeout(): Promise<boolean> {
		return this.lifecycle.phase('willTimeout');
	}

	public async didTimeout(): Promise<boolean> {
		return this.lifecycle.phase('didTimeout');
	}

	public async didFailReconnect(): Promise<boolean> {
		return this.lifecycle.phase('didFailReconnect');
	}

	public async didInit(): Promise<boolean> {
		return this.lifecycle.phase('didInit');
	}

	public async didLoad(): Promise<boolean> {
		return this.lifecycle.phase('didLoad');
	}

	public async didOpen(): Promise<boolean> {
		return this.lifecycle.phase('didOpen');
	}

	public async didPing(): Promise<boolean> {
		return this.lifecycle.phase('didPing');
	}

	public async didPong(): Promise<boolean> {
		return this.lifecycle.phase('didPong');
	}

	public async didReset(): Promise<boolean> {
		return this.lifecycle.phase('didReset');
	}

	public async didStartConnect(): Promise<boolean> {
		return this.lifecycle.phase('didStartConnect');
	}

	public async didStopConnect(): Promise<boolean> {
		return this.lifecycle.phase('didStopConnect');
	}

	public async didStopReconnect(): Promise<boolean> {
		return this.lifecycle.phase('didStopReconnect');
	}

	public async willClose(): Promise<boolean> {
		return this.lifecycle.phase('willClose');
	}

	public async willConnect(): Promise<boolean> {
		return this.lifecycle.phase('willConnect');
	}

	public async willDisconnect(): Promise<boolean> {
		return this.lifecycle.phase('willDisconnect');
	}

	public async willStopHandshake(): Promise<boolean> {
		return this.lifecycle.phase('willStopHandshake');
	}

	public async willStopReconnect(): Promise<boolean> {
		return this.lifecycle.phase('willStopReconnect');
	}

	public async willInit(): Promise<boolean> {
		return this.lifecycle.phase('willInit');
	}

	public async willLoad(): Promise<boolean> {
		return this.lifecycle.phase('willLoad');
	}

	public async willOpen(): Promise<boolean> {
		return this.lifecycle.phase('willOpen');
	}

	public async willStopConnect(): Promise<boolean> {
		return this.lifecycle.phase('willStopConnect');
	}

	public async willReconnect(): Promise<boolean> {
		return this.lifecycle.phase('willReconnect');
	}

	public async willReset(): Promise<boolean> {
		return this.lifecycle.phase('willReset');
	}

	public async willStartConnect(): Promise<boolean> {
		return this.lifecycle.phase('willStartConnect');
	}

	public async willStartReconnect(): Promise<boolean> {
		return this.lifecycle.phase('willStartReconnect');
	}

	public reset(): void {
		this.lifecycle.reset();
	}

	public toData(): CnxFlags {
		return this.lifecycle.toData();
	}
}
