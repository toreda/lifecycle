import {SampleServer} from '../_data/sample/server';
import {ServerDelegate} from '../../src/server/delegate';
import {ServerLifecycle} from '../../src/server/lifecycle';
import type {ServerPhase} from '../../src/server/phase';
import {canInvoke} from '../../src/can/invoke';

describe('canInvoke', () => {
	let server: SampleServer;
	let mockDelegate: ServerDelegate;

	beforeAll(() => {
		server = new SampleServer();
	});

	beforeEach(() => {
		mockDelegate = {
			lifecycle: new ServerLifecycle(),
			reset: () => {}
		};

		server.reset();
	});

	it(`should return false when delegate arg is undefined`, () => {
		const result = canInvoke<ServerPhase, SampleServer>('willStop', undefined as any);

		expect(result).toBe(false);
	});

	it(`should return false when delegate arg is null`, () => {
		const result = canInvoke<ServerPhase, SampleServer>('didInit', null as any);

		expect(result).toBe(false);
	});

	it(`should return false when delegate arg has no lifecycle property`, () => {
		mockDelegate.lifecycle = undefined as any;
		const result = canInvoke<ServerPhase, ServerDelegate>('didInit', mockDelegate);

		expect(result).toBe(false);
	});

	it(`should return false when phase arg is an empty string`, () => {
		const result = canInvoke<ServerPhase, SampleServer>('' as any, server);

		expect(result).toBe(false);
	});

	it(`should return false when phase arg is undefined`, () => {
		const result = canInvoke<ServerPhase, SampleServer>(undefined as any, server);

		expect(result).toBe(false);
	});

	it(`should return false when phase arg is null`, () => {
		const result = canInvoke<ServerPhase, SampleServer>(null as any, server);

		expect(result).toBe(false);
	});

	it(`should return false when phase arg is an empty object`, () => {
		const result = canInvoke<ServerPhase, SampleServer>({} as any, server);

		expect(result).toBe(false);
	});

	it(`should return false when phase arg is an empty array`, () => {
		const result = canInvoke<ServerPhase, SampleServer>([] as any, server);

		expect(result).toBe(false);
	});

	it(`should return false when phase arg is a positive integer`, () => {
		const result = canInvoke<ServerPhase, SampleServer>(10 as any, server);

		expect(result).toBe(false);
	});

	it(`should return false when phase arg is a negative integer`, () => {
		const result = canInvoke<ServerPhase, SampleServer>(-22 as any, server);

		expect(result).toBe(false);
	});

	it(`should return false when phase arg is 0`, () => {
		const result = canInvoke<ServerPhase, SampleServer>(0 as any, server);

		expect(result).toBe(false);
	});

	it(`should return false when delegate.lifecycle.get is undefined`, () => {
		mockDelegate.lifecycle.get = undefined as any;

		const result = canInvoke<ServerPhase, ServerDelegate>('willStop', mockDelegate);
		expect(result).toBe(false);
	});

	it(`should return false when delegate.lifecycle.set is undefined`, () => {
		mockDelegate.lifecycle.set = undefined as any;

		const result = canInvoke<ServerPhase, ServerDelegate>('didInit', mockDelegate);
		expect(result).toBe(false);
	});

	it(`should return false when phase arg is 0`, () => {
		const result = canInvoke<ServerPhase, SampleServer>(0 as any, server);

		expect(result).toBe(false);
	});

	it(`should return true when phase has not already executed`, () => {
		expect(server.lifecycle.get('didInit')).toBe(false);
		const result = canInvoke<ServerPhase, SampleServer>('didInit', server);

		expect(result).toBe(true);
	});

	it(`should return false when phase has already executed`, () => {
		server.lifecycle.set('didInit', true);
		expect(server.lifecycle.get('didInit')).toBe(true);
		const result = canInvoke<ServerPhase, SampleServer>('didInit', server);

		expect(result).toBe(false);
	});
});
