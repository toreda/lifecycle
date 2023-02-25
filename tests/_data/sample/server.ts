import type {ServerDelegate} from '../../../src/server/delegate';
import {ServerLifecycle} from '../../../src/server/lifecycle';
import {serverPhase} from '../../../src/server/phase';

export class SampleServer implements ServerDelegate<unknown> {
	public readonly lifecycle: ServerLifecycle;

	constructor() {
		this.lifecycle = new ServerLifecycle();
	}

	public async willInit(): Promise<boolean> {
		return serverPhase(this, 'willInit');
	}

	public async didInit(): Promise<boolean> {
		return serverPhase(this, 'didInit');
	}

	public async willLoad(): Promise<boolean> {
		return serverPhase(this, 'willLoad');
	}

	public async didLoad(): Promise<boolean> {
		return serverPhase(this, 'didLoad');
	}

	public async willStart(): Promise<boolean> {
		return serverPhase(this, 'willStart');
	}

	public async didStart(): Promise<boolean> {
		return serverPhase(this, 'didStart');
	}

	public async willBecomeReady(): Promise<boolean> {
		return serverPhase(this, 'willBecomeReady');
	}

	public async didBecomeReady(): Promise<boolean> {
		return serverPhase(this, 'didBecomeReady');
	}

	public async willStop(): Promise<boolean> {
		return serverPhase(this, 'willStop');
	}

	public async didStop(): Promise<boolean> {
		return serverPhase(this, 'didStop');
	}

	public async willShutdown(): Promise<boolean> {
		return serverPhase(this, 'willShutdown');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
