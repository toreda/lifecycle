import {CLIENT_PHASES} from '../_data/client/phases';
import type {ClientFlags} from '../../src/client/flags';
import {ClientLifecycle} from '../../src/client/lifecycle';

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
			let data: ClientFlags;

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
