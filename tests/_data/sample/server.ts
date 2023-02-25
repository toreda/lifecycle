import type {ServerDelegate} from '../../../src/server/delegate';
import {ServerLifecycle} from '../../../src/server/lifecycle';
import {serverPhase} from '../../../src/server/phase';

export class SampleServer implements ServerDelegate<unknown> {
	public readonly lifecycle: ServerLifecycle;

	constructor() {
		this.lifecycle = new ServerLifecycle();
	}

	public async willInit(): Promise<boolean> {
		return serverPhase('willInit', this);
	}

	public async didInit(): Promise<boolean> {
		return serverPhase('didInit', this);
	}

	public async willLoad(): Promise<boolean> {
		return serverPhase('willLoad', this);
	}

	public async didLoad(): Promise<boolean> {
		return serverPhase('didLoad', this);
	}

	public async willStart(): Promise<boolean> {
		return serverPhase('willStart', this);
	}

	public async didStart(): Promise<boolean> {
		return serverPhase('didStart', this);
	}

	public async willBecomeReady(): Promise<boolean> {
		return serverPhase('willBecomeReady', this);
	}

	public async didBecomeReady(): Promise<boolean> {
		return serverPhase('didBecomeReady', this);
	}

	public async willStop(): Promise<boolean> {
		return serverPhase('willStop', this);
	}

	public async didStop(): Promise<boolean> {
		return serverPhase('didStop', this);
	}

	public async willShutdown(): Promise<boolean> {
		return serverPhase('willShutdown', this);
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
