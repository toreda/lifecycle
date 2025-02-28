import {Lifecycle} from '../../../src/lifecycle';
import {CnxPhase} from '../../../src/cnx/phase';
import type {CnxDelegate} from '../../../src/cnx/delegate';

export class SampleCnx implements CnxDelegate<CnxPhase> {
	public readonly lifecycle: Lifecycle<CnxPhase>;
	public readonly children: CnxDelegate<CnxPhase>[];

	constructor() {
		this.children = [];
		this.lifecycle = new Lifecycle<CnxPhase>();
	}

	public async cnxDidDisconnect(): Promise<boolean> {
		return this.lifecycle.phase('cnxDidDisconnect');
	}

	public async cnxDidFailClose(): Promise<boolean> {
		return this.lifecycle.phase('cnxDidFailClose');
	}

	public async cnxDidFailConnect(): Promise<boolean> {
		return this.lifecycle.phase('cnxDidFailConnect');
	}

	public async cnxWillStartHandshake(): Promise<boolean> {
		return this.lifecycle.endPhase('cnxWillStartHandshake');
	}

	public async cnxDidConnect(): Promise<boolean> {
		return this.lifecycle.phase('cnxDidConnect');
	}

	public async cnxDidReconnect(): Promise<boolean> {
		return this.lifecycle.phase('cnxDidReconnect');
	}

	public async cnxDidClose(): Promise<boolean> {
		return this.lifecycle.phase('cnxDidClose');
	}

	public async cnxWillTimeout(): Promise<boolean> {
		return this.lifecycle.phase('cnxWillTimeout');
	}

	public async cnxDidTimeout(): Promise<boolean> {
		return this.lifecycle.phase('cnxDidTimeout');
	}

	public async cnxDidFailReconnect(): Promise<boolean> {
		return this.lifecycle.phase('cnxDidFailReconnect');
	}

	public async cnxDidInit(): Promise<boolean> {
		return this.lifecycle.phase('cnxDidInit');
	}

	public async cnxDidLoad(): Promise<boolean> {
		return this.lifecycle.phase('cnxDidLoad');
	}

	public async cnxDidOpen(): Promise<boolean> {
		return this.lifecycle.phase('cnxDidOpen');
	}

	public async cnxDidPing(): Promise<boolean> {
		return this.lifecycle.phase('cnxDidPing');
	}

	public async cnxDidPong(): Promise<boolean> {
		return this.lifecycle.phase('cnxDidPong');
	}

	public async cnxDidReset(): Promise<boolean> {
		return this.lifecycle.phase('cnxDidReset');
	}

	public async cnxDidStartConnect(): Promise<boolean> {
		return this.lifecycle.phase('cnxDidStartConnect');
	}

	public async cnxDidStopConnect(): Promise<boolean> {
		return this.lifecycle.phase('cnxDidStopConnect');
	}

	public async cnxDidStopReconnect(): Promise<boolean> {
		return this.lifecycle.phase('cnxDidStopReconnect');
	}

	public async cnxWillClose(): Promise<boolean> {
		return this.lifecycle.phase('cnxWillClose');
	}

	public async cnxWillConnect(): Promise<boolean> {
		return this.lifecycle.phase('cnxWillConnect');
	}

	public async cnxWillDisconnect(): Promise<boolean> {
		return this.lifecycle.phase('cnxWillDisconnect');
	}

	public async cnxWillStopHandshake(): Promise<boolean> {
		return this.lifecycle.phase('cnxWillStopHandshake');
	}

	public async cnxWillStopReconnect(): Promise<boolean> {
		return this.lifecycle.phase('cnxWillStopReconnect');
	}

	public async cnxWillInit(): Promise<boolean> {
		return this.lifecycle.phase('cnxWillInit');
	}

	public async cnxWillLoad(): Promise<boolean> {
		return this.lifecycle.phase('cnxWillLoad');
	}

	public async cnxWillOpen(): Promise<boolean> {
		return this.lifecycle.phase('cnxWillOpen');
	}

	public async cnxWillStopConnect(): Promise<boolean> {
		return this.lifecycle.phase('cnxWillStopConnect');
	}

	public async cnxWillReconnect(): Promise<boolean> {
		return this.lifecycle.phase('cnxWillReconnect');
	}

	public async cnxWillReset(): Promise<boolean> {
		return this.lifecycle.phase('cnxWillReset');
	}

	public async cnxWillStartConnect(): Promise<boolean> {
		return this.lifecycle.phase('cnxWillStartConnect');
	}

	public async cnxWillStartReconnect(): Promise<boolean> {
		return this.lifecycle.phase('cnxWillStartReconnect');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
