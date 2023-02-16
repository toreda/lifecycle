import {ClientPhase} from '../../../src/client/phase';
import {clientPhases} from '../../../src/client/phases';

const phases: ClientPhase[] = [
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
	let phaseSet: Set<ClientPhase>;

	beforeAll(() => {
		phaseSet = new Set<ClientPhase>(clientPhases);
	});

	for (const phase of phases) {
		it(`should return true for client phase '${phase}'`, () => {
			expect(phaseSet.has(phase)).toBe(true);
		});
	}

	it(`should return false for undefined`, () => {
		expect(phaseSet.has(undefined as any)).toBe(false);
	});

	it(`should return false for null`, () => {
		expect(phaseSet.has(null as any)).toBe(false);
	});

	it(`should return false for an empty string`, () => {
		expect(phaseSet.has(EMPTY_STRING as any)).toBe(false);
	});

	it(`should return false for single character`, () => {
		expect(phaseSet.has('a' as any)).toBe(false);
	});

	it(`should return false for non-phase string`, () => {
		expect(phaseSet.has('aaaaaaaaa' as any)).toBe(false);
	});
});
