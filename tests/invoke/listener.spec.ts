import {Levels, Log} from '@toreda/log';

import {SampleServer} from '../_data/sample/server';
import type {ServerPhase} from '../../src/server/phase';
import {invokeListener} from '../../src/invoke/listener';
import {invokeListeners} from '../../src/invoke/listeners';

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
		const result = await invokeListener<ServerPhase, SampleServer>('___9297249274' as any, server, log);

		expect(result).toBe(false);
	});

	it(`should return false when phase arg is undefined`, async () => {
		const result = await invokeListener<ServerPhase, SampleServer>(undefined as any, server, log);

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
		custom.serverDidRestart = {} as any;
		const result = await invokeListener<ServerPhase, SampleServer>('serverDidRestart', custom);

		expect(result).toBe(false);
	});

	it(`should return false when listener is undefined`, async () => {
		const custom = new SampleServer();
		custom.serverDidInit = undefined as any;
		const result = await invokeListener<ServerPhase, SampleServer>('serverDidInit', custom);

		expect(result).toBe(false);
	});

	it(`should return false when listener throws`, async () => {
		const custom = new SampleServer();
		custom.serverDidStop = jest.fn(async () => {
			throw new Error('exception here');
		}) as any;
		const result = await invokeListener<ServerPhase, SampleServer>('serverDidStop', custom);

		expect(result).toBe(false);
	});

	it(`should call phase listener and return true`, async () => {
		const spy = jest.spyOn(server, 'serverDidRestart');
		expect(spy).not.toHaveBeenCalled();

		const result = await invokeListener<ServerPhase, SampleServer>('serverDidRestart', server);
		expect(result).toBe(true);
		expect(spy).toHaveBeenCalledTimes(1);

		spy.mockRestore();
	});

	it(`should not call phase listener when phase has already been called`, async () => {
		const spy = jest.spyOn(server, 'serverDidBecomeReady');
		expect(spy).not.toHaveBeenCalled();

		server.lifecycle.set('serverDidBecomeReady', true);
		const result = await invokeListener<ServerPhase, SampleServer>('serverDidBecomeReady', server);
		expect(result).toBe(false);
		expect(spy).not.toHaveBeenCalled();

		spy.mockRestore();
	});

	it(`should only call listener once`, async () => {
		const spy = jest.spyOn(server, 'serverDidBecomeReady');
		expect(spy).not.toHaveBeenCalled();

		const a = await invokeListener<ServerPhase, SampleServer>('serverDidBecomeReady', server);
		expect(a).toBe(true);

		for (let i = 0; i < 4; i++) {
			const result = await invokeListener<ServerPhase, SampleServer>('serverDidBecomeReady', server);
			expect(result).toBe(false);
		}

		expect(spy).toHaveBeenCalledTimes(1);

		spy.mockRestore();
	});

	describe('Children', () => {
		it(`should invoke listeners on all children`, async () => {
			const custom = new SampleServer();
			const a = new SampleServer();
			const spyA = jest.spyOn(a, 'serverDidLoad');
			const b = new SampleServer();
			const spyB = jest.spyOn(b, 'serverDidLoad');
			custom.children.push(a);
			custom.children.push(b);

			expect(spyA).not.toHaveBeenCalled();
			expect(spyB).not.toHaveBeenCalled();

			const _result = await invokeListeners<ServerPhase, SampleServer>('serverDidLoad', custom);

			expect(spyA).toHaveBeenCalledTimes(1);
			expect(spyB).toHaveBeenCalledTimes(1);

			spyA.mockRestore();
			spyB.mockRestore();
		});
	});
});
