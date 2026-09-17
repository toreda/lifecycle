import {Lifecycle} from '../../../src/lifecycle';
import type {ClientDelegate} from '../../../src/client/delegate';
import {ClientPhase} from '../../../src';

export class SampleClient implements ClientDelegate {
	public readonly lifecycle: Lifecycle<ClientPhase>;

	constructor() {
		this.lifecycle = new Lifecycle<ClientPhase>();
	}

	public async clientDidBecomeReady(): Promise<boolean> {
		return this.lifecycle.endPhase('clientDidBecomeReady');
	}

	public async clientDidGainFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('clientDidGainFocus');
	}

	public async clientDidInit(): Promise<boolean> {
		return this.lifecycle.endPhase('clientDidInit');
	}

	public async clientOnGainFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('clientOnGainFocus');
	}

	public async clientOnLoseFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('clientOnLoseFocus');
	}

	public async clientDidLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('clientDidLoad');
	}

	public async clientDidLoseFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('clientDidLoseFocus');
	}

	public async clientDidStart(): Promise<boolean> {
		return this.lifecycle.endPhase('clientDidStart');
	}

	public async clientDidPause(): Promise<boolean> {
		return this.lifecycle.endPhase('clientDidPause');
	}

	public async clientDidUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('clientDidUnpause');
	}

	public async clientDidShutdown(): Promise<boolean> {
		return this.lifecycle.endPhase('clientDidShutdown');
	}

	public async clientOnLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('clientOnLoad');
	}

	public async clientOnInit(): Promise<boolean> {
		return this.lifecycle.endPhase('clientOnInit');
	}

	public async clientOnBecomeReady(): Promise<boolean> {
		return this.lifecycle.endPhase('clientOnBecomeReady');
	}

	public async clientOnStart(): Promise<boolean> {
		return this.lifecycle.endPhase('clientOnStart');
	}

	public async clientOnShutdown(): Promise<boolean> {
		return this.lifecycle.endPhase('clientOnShutdown');
	}

	public async clientWillBecomeReady(): Promise<boolean> {
		return this.lifecycle.endPhase('clientWillBecomeReady');
	}

	public async clientWillGainFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('clientWillGainFocus');
	}

	public async clientWillShutdown(): Promise<boolean> {
		return this.lifecycle.endPhase('clientWillShutdown');
	}

	public async clientWillLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('clientWillLoad');
	}

	public async clientWillInit(): Promise<boolean> {
		return this.lifecycle.endPhase('clientWillInit');
	}

	public async clientWillLoseFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('clientWillLoseFocus');
	}
	public async clientWillPause(): Promise<boolean> {
		return this.lifecycle.endPhase('clientWillPause');
	}

	public async clientWillStart(): Promise<boolean> {
		return this.lifecycle.endPhase('clientWillStart');
	}

	public async clientWillStop(): Promise<boolean> {
		return this.lifecycle.endPhase('clientWillStop');
	}

	public async clientDidStop(): Promise<boolean> {
		return this.lifecycle.endPhase('clientDidStop');
	}

	public async clientOnMemoryWarning(): Promise<boolean> {
		return this.lifecycle.endPhase('clientOnMemoryWarning');
	}

	public async clientOnPause(): Promise<boolean> {
		return this.lifecycle.endPhase('clientOnPause');
	}

	public async clientOnStop(): Promise<boolean> {
		return this.lifecycle.endPhase('clientOnStop');
	}

	public async clientWillUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('clientWillUnpause');
	}

	public async clientOnUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('clientOnUnpause');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
