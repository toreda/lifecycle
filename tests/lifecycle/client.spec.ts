import {LifecycleClient} from '../../src/lifecycle/client';
import type {LifecycleClientData} from '../../src/lifecycle/client/data';

const PHASES = [
	{name: 'didBecomeReady', initial: false},
	{name: 'didGainFocus', initial: false},
	{name: 'willInit', initial: false},
	{name: 'didInit', initial: false},
	{name: 'willLoad', initial: false},
	{name: 'didLoad', initial: false},
	{name: 'didLoseFocus', initial: false},
	{name: 'didStart', initial: false},
	{name: 'didUnpause', initial: false},
	{name: 'didPause', initial: false},
	{name: 'memoryWarning', initial: false},
	{name: 'onInit', initial: false},
	{name: 'onLoad', initial: false},
	{name: 'onReady', initial: false},
	{name: 'onStart', initial: false},
	{name: 'willBecomeReady', initial: false},
	{name: 'willGainFocus', initial: false},
	{name: 'willLoseFocus', initial: false},
	{name: 'willPause', initial: false},
	{name: 'willStart', initial: false},
	{name: 'willStop', initial: false}
];

describe('LifecycleClient', () => {
	let instance: LifecycleClient;
	beforeAll(() => {
		instance = new LifecycleClient();
	});

	beforeEach(() => {
		instance.reset();
	});

	describe('Phases', () => {
		describe('init', () => {
			let phaseClient: LifecycleClient;

			beforeAll(() => {
				phaseClient = new LifecycleClient();
			});

			for (const phase of PHASES) {
				const custom = new LifecycleClient();
				custom[phase.name] = !!phase.initial;

				it(`should initialize phase '${phase.name}' to '${phase.initial}'`, () => {
					expect(phaseClient[phase.name]).toBe(phase.initial);
				});
			}
		});

		describe('reset', () => {
			for (const phase of PHASES) {
				const inverseInitial = !!phase.initial;

				it(`should reset '${phase.name}' to initial value '${inverseInitial}`, () => {
					const custom = new LifecycleClient();
					custom[phase.name] = inverseInitial;
					expect(custom[phase.name]).toBe(inverseInitial);
					custom.reset();
					expect(custom[phase.name]).toBe(phase.initial);
				});
			}
		});

		describe('toData', () => {
			let dataClient: LifecycleClient;
			let data: LifecycleClientData;

			beforeAll(() => {
				dataClient = new LifecycleClient();
				data = dataClient.toData();

				for (const phase of PHASES) {
					dataClient[phase.name] = phase.initial;
				}
			});

			for (const phase of PHASES) {
				it(`should include '${phase.name}' property on object created by 'toData()'`, () => {
					expect(data[phase.name]).toBeDefined();
				});
			}
		});
	});
});
