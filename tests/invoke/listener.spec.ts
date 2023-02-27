import {Levels, Log} from '@toreda/log';

import {SampleServer} from '../_data/sample/server';
import type {ServerPhase} from '../../src/server/phase';
import {invokeListener} from '../../src/invoke/listener';

const EMPTY_STRING = '';

describe('invokeListener', () => {
	let server: SampleServer;
	let log: Log;

	beforeAll(() => {
		server = new SampleServer();
		log = new Log({
			globalLevel: Levels.ALL,
			consoleEnabled: true
		});
	});

	beforeEach(() => {
		server.reset();
	});

	it(`should return false when phase has no listener`, async () => {
		const result = await invokeListener<ServerPhase, SampleServer>('___9297249274' as any, server);

		expect(result).toBe(false);
	});

	it(`should return false when phase arg is undefined`, async () => {
		const result = await invokeListener<ServerPhase, SampleServer>(undefined as any, server);

		expect(result).toBe(false);
	});

	it(`should return false when phase arg is null`, async () => {
		const result = await invokeListener<ServerPhase, SampleServer>(null as any, server);

		expect(result).toBe(false);
	});

	it(`should return false when phase arg is an empty string`, async () => {
		const result = await invokeListener<ServerPhase, SampleServer>(EMPTY_STRING as any, server);

		expect(result).toBe(false);
	});

	it(`should return false when listener is defined but is not a function`, async () => {
		const custom = new SampleServer();
		custom.didRestart = {} as any;
		const result = await invokeListener<ServerPhase, SampleServer>('didRestart', custom);

		expect(result).toBe(false);
	});

	it(`should return false when listener is undefined`, async () => {
		const custom = new SampleServer();
		custom.didInit = undefined as any;
		const result = await invokeListener<ServerPhase, SampleServer>('didInit', custom);

		expect(result).toBe(false);
	});

	it(`should return false when listener throws`, async () => {
		const custom = new SampleServer();
		custom.didStop = jest.fn(async () => {
			throw new Error('exception here');
		}) as any;
		const result = await invokeListener<ServerPhase, SampleServer>('didStop', custom);

		expect(result).toBe(false);
	});

	it(`should call phase listener and return true`, async () => {
		const spy = jest.spyOn(server, 'didRestart');
		expect(spy).not.toHaveBeenCalled();

		const result = await invokeListener<ServerPhase, SampleServer>('didRestart', server);
		expect(result).toBe(true);
		expect(spy).toHaveBeenCalledTimes(1);

		spy.mockRestore();
	});

	it(`should not call phase listener when phase has already been called`, async () => {
		const spy = jest.spyOn(server, 'didBecomeReady');
		expect(spy).not.toHaveBeenCalled();

		server.lifecycle.set('didBecomeReady', true);
		const result = await invokeListener<ServerPhase, SampleServer>('didBecomeReady', server);
		expect(result).toBe(false);
		expect(spy).not.toHaveBeenCalled();

		spy.mockRestore();
	});

	it(`should only call listener once`, async () => {
		const spy = jest.spyOn(server, 'didBecomeReady');
		expect(spy).not.toHaveBeenCalled();

		const a = await invokeListener<ServerPhase, SampleServer>('didBecomeReady', server);
		expect(a).toBe(true);

		for (let i = 0; i < 4; i++) {
			const result = await invokeListener<ServerPhase, SampleServer>('didBecomeReady', server);
			expect(result).toBe(false);
		}

		expect(spy).toHaveBeenCalledTimes(1);

		spy.mockRestore();
	});
});
