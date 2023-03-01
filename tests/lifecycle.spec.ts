import {Lifecycle} from '../src/lifecycle';
import type {ServerPhase} from '../src/server/phase';

const EMPTY_STRING = '';

describe('Lifecycle', () => {
	let instance: Lifecycle<ServerPhase>;

	beforeAll(() => {
		instance = new Lifecycle<ServerPhase>();
	});

	beforeEach(() => {
		instance.reset();
	});

	describe('Constructor', () => {});

	describe('Implementation', () => {
		describe('get', () => {
			it(`should return flase when id arg is undefined`, async () => {
				expect(instance.get(undefined as any)).toBe(false);
			});

			it(`should return flase when id arg is null`, async () => {
				expect(instance.get(null as any)).toBe(false);
			});

			it(`should return false when key is an empty string`, () => {
				expect(instance.get(EMPTY_STRING as any)).toBe(false);
			});

			it(`should return true when target phase is true`, () => {
				expect(instance.get('didLoad')).toBe(false);
				instance.set('didLoad', true);
				expect(instance.get('didLoad')).toBe(true);
			});
		});

		describe('phase', () => {
			it(`should return flase when id arg is undefined`, async () => {
				expect(await instance.phase(undefined as any)).toBe(false);
			});

			it(`should return flase when id arg is null`, async () => {
				expect(await instance.phase(null as any)).toBe(false);
			});

			it(`should return flase when id arg is an empty string`, async () => {
				expect(await instance.phase(EMPTY_STRING as any)).toBe(false);
			});

			it(`should return false when target phase has already executed`, async () => {
				instance.set('didInit', true);
				expect(await instance.phase('didInit')).toBe(false);
			});

			it(`should return true when target phase has not yet executed`, async () => {
				expect(await instance.phase('didInit')).toBe(true);
			});

			it(`should return true when called for an unexecuted phase and false for subsequent calls`, async () => {
				expect(await instance.phase('didInit')).toBe(true);
				expect(await instance.phase('didInit')).toBe(false);
				expect(await instance.phase('didInit')).toBe(false);
			});

			it(`should return false when phase is already true`, async () => {
				instance.set('didStop', true);

				expect(await instance.phase('didStop')).toBe(false);
			});
		});

		describe('reset', () => {});
	});
});
