import {LifecycleServer} from '../../src/lifecycle/server';
import {SERVER_PHASES} from '../_data/lifecycle';

describe('LifecycleServer', () => {
	let instance: LifecycleServer;

	beforeAll(() => {
		instance = new LifecycleServer();
	});

	beforeEach(() => {
		instance.reset();
	});

	describe('Constructor', () => {
		let custom = new LifecycleServer();

		beforeAll(() => {
			custom = new LifecycleServer();
		});

		for (const phase of SERVER_PHASES) {
			it(`should initialize '${phase}' to false`, () => {
				expect(custom.get(phase.listener)).toBe(false);
			});
		}
	});

	describe('Implementation', () => {
		describe('reset', () => {
			it(`should reset all phases to false`, () => {
				for (const phase of SERVER_PHASES) {
					instance[phase.name] = true;
				}

				instance.reset();

				for (const phase of SERVER_PHASES) {
					expect(instance[phase.name]).toBe(false);
				}
			});
		});

		describe('toData', () => {
			let custom: LifecycleServer;

			beforeAll(() => {
				custom = new LifecycleServer();
			});

			for (const phase of SERVER_PHASES) {
				it(`should return object with '${phase.name}' boolean property when '${phase.name}' is true`, () => {
					custom.set(phase.listener, true);
					const result = custom.toData();
					expect(result).toHaveProperty(phase.name);
					expect(result[phase.name]).toBe(true);
				});

				it(`should return object with '${phase.name}' boolean property when '${phase.name}' is false`, () => {
					custom.set(phase.listener, false);
					const result = custom.toData();
					expect(result).toHaveProperty(phase.name);
					expect(result[phase.name]).toBe(false);
				});
			}
		});
	});
});
