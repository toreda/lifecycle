import type {ServerPhase} from '../../../src/server/phase';
import {serverPhases} from '../../../src/server/phases';

const phases: ServerPhase[] = [
	'didBecomeReady',
	'didInit',
	'didLoad',
	'didStart',
	'didStop',
	'didRestart',
	'onInit',
	'onLoad',
	'onReady',
	'onRestart',
	'onShutdown',
	'onStart',
	'onStop',
	'willBecomeReady',
	'willInit',
	'willLoad',
	'willShutdown',
	'willStart',
	'willStop'
];

const EMPTY_STRING = '';

describe('ServerPhases', () => {
	for (const phase of phases) {
		it(`should return true for server phase '${phase}'`, () => {
			expect(serverPhases.includes(phase)).toBe(true);
		});
	}

	it(`should return false for undefined`, () => {
		expect(serverPhases.includes(undefined as any)).toBe(false);
	});

	it(`should return false for null`, () => {
		expect(serverPhases.includes(null as any)).toBe(false);
	});

	it(`should return false for an empty string`, () => {
		expect(serverPhases.includes(EMPTY_STRING as any)).toBe(false);
	});

	it(`should return false for single character`, () => {
		expect(serverPhases.includes('a' as any)).toBe(false);
	});

	it(`should return false for non-phase string`, () => {
		expect(serverPhases.includes('aaaaaaaaa' as any)).toBe(false);
	});
});
