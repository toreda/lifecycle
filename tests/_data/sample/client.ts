import type {ClientDelegate} from '../../../src/client/delegate';
import {ClientLifecycle} from '../../../src/client/lifecycle';

export class SampleClient implements ClientDelegate<unknown> {
	public readonly lifecycle: ClientLifecycle;

	constructor() {
		this.lifecycle = new ClientLifecycle();
	}

	public async didBecomeReady(): Promise<boolean> {
		return true;
	}

	public async didGainFocus(): Promise<boolean> {
		return true;
	}

	public async didInit(): Promise<boolean> {
		return true;
	}

	public async didLoad(): Promise<boolean> {
		return true;
	}

	public async didLoseFocus(): Promise<boolean> {
		return true;
	}

	public async didStart(): Promise<boolean> {
		return true;
	}

	public async didUnpause(): Promise<boolean> {
		return true;
	}

	public async onInit(): Promise<boolean> {
		return true;
	}

	public async onLoad(): Promise<boolean> {
		return true;
	}

	public async onMemoryWarning(): Promise<boolean> {
		return true;
	}

	public async onReady(): Promise<boolean> {
		return true;
	}

	public async onStart(): Promise<boolean> {
		return true;
	}

	public async willBecomeReady(): Promise<boolean> {
		return true;
	}

	public async willGainFocus(): Promise<boolean> {
		return true;
	}

	public async willInit(): Promise<boolean> {
		return true;
	}

	public async willLoad(): Promise<boolean> {
		return true;
	}

	public async willLoseFocus(): Promise<boolean> {
		return true;
	}

	public async willPause(): Promise<boolean> {
		return true;
	}

	public async willStart(): Promise<boolean> {
		return true;
	}

	public async willStop(): Promise<boolean> {
		return true;
	}

	public async didStop(): Promise<boolean> {
		return true;
	}

	public reset(): void {
		//
	}
}
