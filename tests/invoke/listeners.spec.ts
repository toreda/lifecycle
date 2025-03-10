import {type ServerPhase} from '../../src/server/phase';
import {invokeListeners} from '../../src/invoke/listeners';
import {type InvokeListenersInit} from '../../src/invoke/listeners/init';
import {SampleServer} from '../_data/sample/server';
import {Levels, Log} from '@toreda/log';
import {type ServerDelegate} from '../../src/server/delegate';
import {LifecycleDelegateCommon} from '../../src';

const EMPTY_DELEGATE_ARRAY: ServerDelegate[] = [];

describe('invokeListeners', () => {
	let init: InvokeListenersInit<ServerPhase, SampleServer>;
	let sample: SampleServer;
	let base: Log;

	beforeAll(() => {
		base = new Log({
			consoleEnabled: true,
			groupsStartEnabled: true,
			globalLevel: Levels.ALL
		});
		sample = new SampleServer();
	});

	beforeEach(() => {
		init = {
			delegate: sample,
			phase: 'serverDidInit'
		};
	});

	describe(`Argument Validation`, () => {
		it(`should return false when init argument is undefined`, async () => {
			const result = await invokeListeners(undefined as any);

			expect(result).toBe(false);
		});

		it(`should return false when init argument is null`, async () => {
			const result = await invokeListeners(null as any);

			expect(result).toBe(false);
		});

		it(`should return false when init.delegate is undefined`, async () => {
			init.delegate = undefined as any;
			const result = await invokeListeners(init);
			expect(result).toBe(false);
		});

		it(`should return false when init.delegate is null`, async () => {
			init.delegate = null as any;
			const result = await invokeListeners(init);
			expect(result).toBe(false);
		});
	});

	describe('Delegates', () => {
		it(`should invoke a phase listener on all sample delegates`, async () => {
			const phase: ServerPhase = 'serverDidInit';
			const a = new SampleServer();
			const aSpy = jest.spyOn(a, 'serverDidInit');
			const b = new SampleServer();
			const bSpy = jest.spyOn(b, 'serverDidInit');
			const c = new SampleServer();
			const cSpy = jest.spyOn(c, 'serverDidInit');

			const samples: LifecycleDelegateCommon<any>[] = [a, b, c];

			const result = await invokeListeners({
				'delegate': samples,
				'phase': phase,
				'base': base
			});
			expect(result).toBe(true);
			expect(aSpy).toHaveBeenCalledTimes(1);
			expect(bSpy).toHaveBeenCalledTimes(1);
			expect(cSpy).toHaveBeenCalledTimes(1);

			aSpy.mockRestore();
			bSpy.mockRestore();
			cSpy.mockRestore();
		});

		it(`should invoke a phase listener on array with a single sample delegate`, async () => {
			const phase: ServerPhase = 'serverDidInit';
			const a = new SampleServer();
			const aSpy = jest.spyOn(a, 'serverDidInit');
			const samples: LifecycleDelegateCommon<any>[] = [a];

			const result = await invokeListeners<ServerPhase, ServerDelegate>({
				delegate: samples,
				phase: phase,
				base: base
			});
			expect(result).toBe(true);
			expect(aSpy).toHaveBeenCalledTimes(1);
		});

		it(`should invoke a phase listener on a single sample delegate`, async () => {
			const phase: ServerPhase = 'serverDidInit';
			const a = new SampleServer();
			const aSpy = jest.spyOn(a, 'serverDidInit');

			const result = await invokeListeners<ServerPhase, ServerDelegate>({
				delegate: a,
				phase: phase,
				base: base
			});
			expect(result).toBe(true);
			expect(aSpy).toHaveBeenCalledTimes(1);
		});

		it(`should return false when init.delegate is an empty array`, async () => {
			const phase: ServerPhase = 'serverDidInit';

			const result = await invokeListeners<ServerPhase, ServerDelegate>({
				delegate: EMPTY_DELEGATE_ARRAY,
				phase: phase,
				base: base
			});

			expect(result).toBe(false);
		});
	});
});
