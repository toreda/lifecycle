import type {ClientFlags} from '../../src/client/flags';
import {ClientLifecycle} from '../../src/client/lifecycle';
import {clientPhases} from '../../src/client/phases';

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

			for (const phase of clientPhases) {
				const custom = new ClientLifecycle();
				custom[phase] = false;

				it(`should initialize phase '${phase}' to 'false'`, () => {
					expect(phaseClient.get(phase)).toBe(false);
				});
			}
		});

		describe('reset', () => {
			for (const phase of clientPhases) {
				it(`should reset '${phase}' to false`, () => {
					const custom = new ClientLifecycle();
					custom.set(phase, true);
					expect(custom.get(phase)).toBe(true);
					custom.reset();
					expect(custom.get(phase)).toBe(false);
				});
			}
		});

		describe('toData', () => {
			let client: ClientLifecycle;
			let data: ClientFlags;

			beforeAll(() => {
				client = new ClientLifecycle();
				for (const phase of clientPhases) {
					client.set(phase, false);
				}

				data = client.toData();
			});

			for (const phase of clientPhases) {
				it(`should include '${phase}' property on object created by 'toData()'`, () => {
					expect(data[phase]).toBeDefined();
				});
			}
		});
	});
});
