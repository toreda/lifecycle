import {LifecycleClientPhase} from '../../../src/lifecycle/client/phase';
import {lifecycleClientPhases} from '../../../src/lifecycle/client/phases';

const phases: LifecycleClientPhase[] = [
	'didBecomeReady',
	'didGainFocus',
	'didInit',
	'didLoad',
	'didLoseFocus',
	'didStart',
	'didUnpause',
	'memoryWarning',
	'onInit',
	'onLoad',
	'onReady',
	'onStart',
	'willBecomeReady',
	'willGainFocus',
	'willInit',
	'willLoad',
	'willLoseFocus',
	'willPause',
	'willStart',
	'willStop'
];

const EMPTY_STRING = '';

describe('LifecycleClientPhases', () => {
	for (const phase of phases) {
		it(`should return true for client phase '${phase}'`, () => {
			expect(lifecycleClientPhases.has(phase)).toBe(true);
		});
	}

	it(`should return false for undefined`, () => {
		expect(lifecycleClientPhases.has(undefined as any)).toBe(false);
	});

	it(`should return false for null`, () => {
		expect(lifecycleClientPhases.has(null as any)).toBe(false);
	});

	it(`should return false for an empty string`, () => {
		expect(lifecycleClientPhases.has(EMPTY_STRING as any)).toBe(false);
	});

	it(`should return false for single character`, () => {
		expect(lifecycleClientPhases.has('a' as any)).toBe(false);
	});

	it(`should return false for non-phase string`, () => {
		expect(lifecycleClientPhases.has('aaaaaaaaa' as any)).toBe(false);
	});
});
