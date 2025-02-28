import {Lifecycle} from '../../../src/lifecycle';
import type {ClientDelegate} from '../../../src/client/delegate';
import {ClientPhase} from '../../../src';

export class SampleClient implements ClientDelegate {
	public readonly lifecycle: Lifecycle<ClientPhase>;

	constructor() {
		this.lifecycle = new Lifecycle<ClientPhase>();
	}

	public async clientDidBecomeReady(): Promise<boolean> {
		return this.lifecycle.phase('clientDidBecomeReady');
	}

	public async clientDidGainFocus(): Promise<boolean> {
		return this.lifecycle.phase('clientDidGainFocus');
	}

	public async clientDidInit(): Promise<boolean> {
		return this.lifecycle.phase('clientDidInit');
	}

	public async clientDidLoad(): Promise<boolean> {
		return this.lifecycle.phase('clientDidLoad');
	}
	public async clientDidLoseFocus(): Promise<boolean> {
		return this.lifecycle.phase('clientDidLoseFocus');
	}

	public async clientDidStart(): Promise<boolean> {
		return this.lifecycle.phase('clientDidStart');
	}

	public async clientDidPause(): Promise<boolean> {
		return this.lifecycle.phase('clientDidPause');
	}

	public async clientDidUnpause(): Promise<boolean> {
		return this.lifecycle.phase('clientDidUnpause');
	}

	public async clientDidShutdown(): Promise<boolean> {
		return this.lifecycle.phase('clientDidShutdown');
	}

	public async clientOnLoad(): Promise<boolean> {
		return this.lifecycle.phase('clientOnLoad');
	}

	public async clientOnInit(): Promise<boolean> {
		return this.lifecycle.phase('clientOnInit');
	}

	public async clientOnReady(): Promise<boolean> {
		return this.lifecycle.phase('clientOnReady');
	}

	public async clientOnStart(): Promise<boolean> {
		return this.lifecycle.phase('clientOnStart');
	}

	public async clientOnShutdown(): Promise<boolean> {
		return this.lifecycle.phase('clientOnShutdown');
	}

	public async clientWillBecomeReady(): Promise<boolean> {
		return this.lifecycle.phase('clientWillBecomeReady');
	}

	public async clientWillGainFocus(): Promise<boolean> {
		return this.lifecycle.phase('clientWillGainFocus');
	}

	public async clientWillShutdown(): Promise<boolean> {
		return this.lifecycle.phase('clientWillShutdown');
	}

	public async clientWillLoad(): Promise<boolean> {
		return this.lifecycle.phase('clientWillLoad');
	}

	public async clientWillInit(): Promise<boolean> {
		return this.lifecycle.phase('clientWillInit');
	}

	public async clientWillLoseFocus(): Promise<boolean> {
		return this.lifecycle.phase('clientWillLoseFocus');
	}
	public async clientWillPause(): Promise<boolean> {
		return this.lifecycle.phase('clientWillPause');
	}

	public async clientWillStart(): Promise<boolean> {
		return this.lifecycle.phase('clientWillStart');
	}

	public async clientWillStop(): Promise<boolean> {
		return this.lifecycle.phase('clientWillStop');
	}

	public async clientDidStop(): Promise<boolean> {
		return this.lifecycle.phase('clientDidStop');
	}

	public async clientMemoryWarning(): Promise<boolean> {
		return this.lifecycle.phase('clientMemoryWarning');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
