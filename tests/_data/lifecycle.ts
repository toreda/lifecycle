import type {ClientDelegate} from '../../src/client/delegate';
import {ClientLifecycle} from '../../src/client/lifecycle';
import {ClientPhase} from '../../src/client/phase';
import type {ServerDelegate} from '../../src/server/delegate';
import {ServerLifecycle} from '../../src/server/lifecycle';
import {ServerPhase} from '../../src/server/phase';

export class SampleServer implements ServerDelegate {
	public readonly lifecycle: ServerLifecycle;

	constructor() {
		this.lifecycle = new ServerLifecycle();
	}

	public async willInit(): Promise<boolean> {
		return true;
	}
	public async didInit(): Promise<boolean> {
		return true;
	}

	public async willLoad(): Promise<boolean> {
		return true;
	}

	public async didLoad(): Promise<boolean> {
		return true;
	}

	public async didStop(): Promise<boolean> {
		return true;
	}

	public async willBecomeReady(): Promise<boolean> {
		return true;
	}

	public async didBecomeReady(): Promise<boolean> {
		return true;
	}

	public async willStart(): Promise<boolean> {
		return true;
	}

	public async didStart(): Promise<boolean> {
		return true;
	}

	public async willStop(): Promise<boolean> {
		return true;
	}

	public async willShutdown(): Promise<boolean> {
		return true;
	}
}

export class SampleClient implements ClientDelegate {
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

export const ADDON_PHASES = [];

export const CLIENT_PHASES: {
	name: string;
	key: ClientPhase;
}[] = [
	{name: 'didBecomeReady', key: 'didBecomeReady'},
	{name: 'didGainFocus', key: 'didGainFocus'},
	{name: 'didLoad', key: 'didLoad'},
	{name: 'didLoseFocus', key: 'didLoseFocus'},
	{name: 'didStart', key: 'didStart'},
	{name: 'didStop', key: 'didStop'},
	{name: 'didUnpause', key: 'didUnpause'},
	{name: 'memoryWarning', key: 'memoryWarning'},
	{name: 'willBecomeReady', key: 'willBecomeReady'},
	{name: 'willGainFocus', key: 'willGainFocus'},
	{name: 'willGainFocus', key: 'willGainFocus'},
	{name: 'willInit', key: 'willInit'},
	{name: 'willLoad', key: 'willLoad'},
	{name: 'willLoseFocus', key: 'willLoseFocus'},
	{name: 'willLoseFocus', key: 'willLoseFocus'},
	{name: 'willPause', key: 'willPause'},
	{name: 'willStart', key: 'willStart'},
	{name: 'willStop', key: 'willStop'}
];

export const SERVER_PHASES: {
	name: string;
	key: ServerPhase;
}[] = [
	{name: 'didBecomeReady', key: 'didBecomeReady'},
	{name: 'didInit', key: 'didInit'},
	{name: 'didLoad', key: 'didLoad'},
	{name: 'didStart', key: 'didStart'},
	{name: 'didStop', key: 'didStop'},
	{name: 'didRestart', key: 'didRestart'},
	{name: 'didShutdown', key: 'didShutdown'},
	{name: 'didStart', key: 'didStart'},
	{name: 'onInit', key: 'onInit'},
	{name: 'onLoad', key: 'onLoad'},
	{name: 'onReady', key: 'onReady'},
	{name: 'onRestart', key: 'onRestart'},
	{name: 'onShutdown', key: 'onShutdown'},
	{name: 'onStart', key: 'onStart'},
	{name: 'onStop', key: 'onStop'},
	{name: 'willBecomeReady', key: 'willBecomeReady'},
	{name: 'willInit', key: 'willInit'},
	{name: 'willLoad', key: 'willLoad'},
	{name: 'willRestart', key: 'willRestart'},
	{name: 'willShutdown', key: 'willShutdown'},
	{name: 'willStart', key: 'willStart'},
	{name: 'willStop', key: 'willStop'}
];
