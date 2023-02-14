import {LifecycleServerPhase} from '../../../src/lifecycle/server/phase';
import {lifecycleServerPhases} from '../../../src/lifecycle/server/phases';

const phases: LifecycleServerPhase[] = [
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

describe('LifecycleServerPhases', () => {
	for (const phase of phases) {
		it(`should return true for server phase '${phase}'`, () => {
			expect(lifecycleServerPhases.includes(phase)).toBe(true);
		});
	}

	it(`should return false for undefined`, () => {
		expect(lifecycleServerPhases.includes(undefined as any)).toBe(false);
	});

	it(`should return false for null`, () => {
		expect(lifecycleServerPhases.includes(null as any)).toBe(false);
	});

	it(`should return false for an empty string`, () => {
		expect(lifecycleServerPhases.includes(EMPTY_STRING as any)).toBe(false);
	});

	it(`should return false for single character`, () => {
		expect(lifecycleServerPhases.includes('a' as any)).toBe(false);
	});

	it(`should return false for non-phase string`, () => {
		expect(lifecycleServerPhases.includes('aaaaaaaaa' as any)).toBe(false);
	});
});
