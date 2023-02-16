import type {ClientFlagsData} from '../../src/client/flags/data';
import {ClientLifecycle} from '../../src/client/lifecycle';
import {ClientPhase} from '../../src/client/phase';

const CLIENT_PHASES: {
	name: string;
	key: ClientPhase;
	initial: boolean;
}[] = [
	{name: 'didBecomeReady', key: 'didBecomeReady', initial: false},
	{name: 'didGainFocus', key: 'didGainFocus', initial: false},
	{name: 'willInit', key: 'willInit', initial: false},
	{name: 'didInit', key: 'didInit', initial: false},
	{name: 'willLoad', key: 'willLoad', initial: false},
	{name: 'didLoad', key: 'didLoad', initial: false},
	{name: 'didLoseFocus', key: 'didLoseFocus', initial: false},
	{name: 'didStart', key: 'didStart', initial: false},
	{name: 'didUnpause', key: 'didUnpause', initial: false},
	{name: 'didPause', key: 'didPause', initial: false},
	{name: 'memoryWarning', key: 'memoryWarning', initial: false},
	{name: 'onInit', key: 'onInit', initial: false},
	{name: 'onLoad', key: 'onLoad', initial: false},
	{name: 'onReady', key: 'onReady', initial: false},
	{name: 'onStart', key: 'onStart', initial: false},
	{name: 'willBecomeReady', key: 'willBecomeReady', initial: false},
	{name: 'willGainFocus', key: 'willGainFocus', initial: false},
	{name: 'willLoseFocus', key: 'willLoseFocus', initial: false},
	{name: 'willPause', key: 'willPause', initial: false},
	{name: 'willStart', key: 'willStart', initial: false},
	{name: 'willStop', key: 'willStop', initial: false}
];

describe('LifecycleClient', () => {
	let instance: ClientLifecycle;
	beforeAll(() => {
		instance = new ClientLifecycle();
	});

	beforeEach(() => {
		instance.reset();
	});

	describe('Phases', () => {
		describe('init', () => {
			let phaseClient: ClientLifecycle;

			beforeAll(() => {
				phaseClient = new ClientLifecycle();
			});

			for (const phase of CLIENT_PHASES) {
				const custom = new ClientLifecycle();
				custom[phase.name] = phase.initial;

				it(`should initialize phase '${phase.name}' to '${phase.initial}'`, () => {
					expect(phaseClient.get(phase.key)).toBe(phase.initial);
				});
			}
		});

		describe('reset', () => {
			for (const phase of CLIENT_PHASES) {
				const inverseInitial = !phase.initial;

				it(`should reset '${phase.name}' to initial value '${inverseInitial}`, () => {
					const custom = new ClientLifecycle();
					custom.set(phase.key, inverseInitial);
					expect(custom.get(phase.key)).toBe(inverseInitial);
					custom.reset();
					expect(custom.get(phase.key)).toBe(phase.initial);
				});
			}
		});

		describe('toData', () => {
			let client: ClientLifecycle;
			let data: ClientFlagsData;

			beforeAll(() => {
				client = new ClientLifecycle();
				for (const phase of CLIENT_PHASES) {
					client.set(phase.key, phase.initial);
				}

				data = client.toData();
			});

			for (const phase of CLIENT_PHASES) {
				it(`should include '${phase.name}' property on object created by 'toData()'`, () => {
					expect(data[phase.name]).toBeDefined();
				});
			}
		});
	});
});
