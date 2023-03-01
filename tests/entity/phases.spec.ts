import {Levels, Log} from '@toreda/log';

import type {EntityFlags} from '../../src/entity/flags';
import {EntityLifecycle} from '../../src';
import type {EntityPhase} from '../../src/entity/phase';
import {SampleEntity} from '../_data/sample/entity';
import {entityPhases} from '../../src/entity/phases';
import {generatePhaseTests} from '../_data/lifecycle/tests';

describe('Entity Phases', () => {
	let log: Log;

	beforeAll(() => {
		log = new Log({
			globalLevel: Levels.ALL,
			consoleEnabled: true
		});
	});

	describe('Initial Values', () => {
		let instance: SampleEntity;

		beforeAll(() => {
			instance = new SampleEntity();
		});

		for (const phase of entityPhases) {
			it(`should initialize phase '${phase}' to '${phase}`, () => {
				expect(instance.lifecycle.get(phase)).toBe(false);
			});
		}
	});

	describe('reset', () => {
		for (const phase of entityPhases) {
			it(`should reset '${phase}' to false`, () => {
				const custom = new EntityLifecycle();
				custom.set(phase, true);
				expect(custom.get(phase)).toBe(true);
				custom.reset();
				expect(custom.get(phase)).toBe(false);
			});
		}
	});

	const instance = new SampleEntity();
	generatePhaseTests<EntityPhase, EntityFlags>('Entity Phases', instance, entityPhases);
});
