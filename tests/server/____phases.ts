import {SERVER_PHASES} from '../_data/server/phases';
import {ServerLifecycle} from '../../src/server/lifecycle';

describe('Server Phases', () => {
	let instance: ServerLifecycle;

	beforeAll(() => {
		instance = new ServerLifecycle();
	});

	beforeEach(() => {
		instance.reset();
	});

	describe('Constructor', () => {
		let custom = new ServerLifecycle();

		beforeAll(() => {
			custom = new ServerLifecycle();
		});

		for (const phase of SERVER_PHASES) {
			it(`should initialize '${phase}' to false`, () => {
				expect(custom.get(phase.key)).toBe(false);
			});
		}
	});

	describe('Implementation', () => {
		describe('reset', () => {
			it(`should reset all phases to initial value`, () => {
				for (const phase of SERVER_PHASES) {
					instance.set(phase.key, true);
				}

				instance.reset();

				for (const phase of SERVER_PHASES) {
					expect(instance.get(phase.key)).toBe(false);
				}
			});
		});

		describe('toData', () => {
			let custom: ServerLifecycle;

			beforeAll(() => {
				custom = new ServerLifecycle();
			});

			for (const phase of SERVER_PHASES) {
				it(`should return object with '${phase.name}' boolean property when '${phase.name}' is true`, () => {
					custom.set(phase.key, true);
					const result = custom.toData();
					expect(result).toHaveProperty(phase.name);
					expect(result[phase.name]).toBe(true);
				});

				it(`should return object with '${phase.name}' boolean property when '${phase.name}' is false`, () => {
					custom.set(phase.key, false);
					const result = custom.toData();
					expect(result).toHaveProperty(phase.name);
					expect(result[phase.name]).toBe(false);
				});
			}
		});
	});
});
