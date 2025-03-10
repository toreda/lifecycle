import type {ServerDelegate} from '../../../src/server/delegate';
import {ServerLifecycle} from '../../../src/server/lifecycle';

export class SampleServer implements ServerDelegate<unknown> {
	public readonly lifecycle: ServerLifecycle;
	public readonly children: ServerDelegate<unknown>[];

	constructor() {
		this.children = [];
		this.lifecycle = new ServerLifecycle();
	}

	public async serverWillInit(): Promise<boolean> {
		return this.lifecycle.endPhase('serverWillInit');
	}

	public async serverDidInit(): Promise<boolean> {
		return this.lifecycle.endPhase('serverDidInit');
	}

	public async serverWillLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('serverWillLoad');
	}

	public async serverDidLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('serverDidLoad');
	}

	public async serverWillStart(): Promise<boolean> {
		return this.lifecycle.endPhase('serverWillStart');
	}

	public async serverDidStart(): Promise<boolean> {
		return this.lifecycle.endPhase('serverDidStart');
	}

	public async serverWillBecomeReady(): Promise<boolean> {
		return this.lifecycle.endPhase('serverWillBecomeReady');
	}

	public async serverDidBecomeReady(): Promise<boolean> {
		return this.lifecycle.endPhase('serverDidBecomeReady');
	}

	public async serverWillStop(): Promise<boolean> {
		return this.lifecycle.endPhase('serverWillStop');
	}

	public async serverOnStart(): Promise<boolean> {
		return this.lifecycle.endPhase('serverOnStart');
	}

	public async serverOnStop(): Promise<boolean> {
		return this.lifecycle.endPhase('serverOnStop');
	}

	public async serverWillAddConnection(): Promise<boolean> {
		return this.lifecycle.endPhase('serverWillAddConnection');
	}

	public async serverDidStop(): Promise<boolean> {
		return this.lifecycle.endPhase('serverDidStop');
	}

	public async serverWillShutdown(): Promise<boolean> {
		return this.lifecycle.endPhase('serverWillShutdown');
	}

	public async serverWillRestart(): Promise<boolean> {
		return this.lifecycle.endPhase('serverWillRestart');
	}

	public async serverWillAcceptClient(): Promise<boolean> {
		return this.lifecycle.endPhase('serverWillAcceptClient');
	}

	public async serverWillAcceptConnection(): Promise<boolean> {
		return this.lifecycle.endPhase('serverWillAcceptConnection');
	}

	public async serverDidAddClient(): Promise<boolean> {
		return this.lifecycle.endPhase('serverDidAddClient');
	}

	public async serverDidAcceptConnection(): Promise<boolean> {
		return this.lifecycle.endPhase('serverDidAcceptConnection');
	}

	public async serverDidRemoveConnection(): Promise<boolean> {
		return this.lifecycle.endPhase('serverDidRemoveConnection');
	}

	public async serverDidRemoveClient(): Promise<boolean> {
		return this.lifecycle.endPhase('serverDidRemoveClient');
	}

	public async serverOnAcceptClient(): Promise<boolean> {
		return this.lifecycle.endPhase('serverOnAcceptClient');
	}

	public async serverOnAcceptConnection(): Promise<boolean> {
		return this.lifecycle.endPhase('serverOnAcceptConnection');
	}

	public async serverWillAddClient(): Promise<boolean> {
		return this.lifecycle.endPhase('serverWillAddClient');
	}

	public async serverOnAddClient(): Promise<boolean> {
		return this.lifecycle.endPhase('serverOnAddClient');
	}

	public async serverOnRemoveClient(): Promise<boolean> {
		return this.lifecycle.endPhase('serverOnRemoveClient');
	}

	public async serverOnBecomeReady(): Promise<boolean> {
		return this.lifecycle.endPhase('serverOnBecomeReady');
	}
	public async serverOnRemoveConnection(): Promise<boolean> {
		return this.lifecycle.endPhase('serverOnRemoveConnection');
	}

	public async serverWillRemoveClient(): Promise<boolean> {
		return this.lifecycle.endPhase('serverWillRemoveClient');
	}

	public async serverWillRemoveConnection(): Promise<boolean> {
		return this.lifecycle.endPhase('serverWillRemoveConnection');
	}

	public async serverOnShutdown(): Promise<boolean> {
		return this.lifecycle.endPhase('serverOnShutdown');
	}

	public async serverOnRestart(): Promise<boolean> {
		return this.lifecycle.endPhase('serverOnRestart');
	}

	public async serverOnReady(): Promise<boolean> {
		return this.lifecycle.endPhase('serverOnReady');
	}

	public async serverOnInit(): Promise<boolean> {
		return this.lifecycle.endPhase('serverOnInit');
	}

	public async serverDidShutdown(): Promise<boolean> {
		return this.lifecycle.endPhase('serverDidShutdown');
	}

	public async serverDidRestart(): Promise<boolean> {
		return this.lifecycle.endPhase('serverDidRestart');
	}

	public async serverOnLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('serverOnLoad');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
