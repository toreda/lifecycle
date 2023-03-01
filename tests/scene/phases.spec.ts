import {Levels, Log} from '@toreda/log';

import {SampleScene} from '../_data/sample/scene';
import type {SceneFlags} from '../../src/scene/flags';
import type {ScenePhase} from '../../src/scene/phase';
import {generatePhaseTests} from '../_data/lifecycle/tests';
import {scenePhases} from '../../src/scene/phases';

describe('Scene Phases', () => {
	let log: Log;

	beforeAll(() => {
		log = new Log({
			globalLevel: Levels.ALL,
			consoleEnabled: true
		});
	});

	describe('Initial Values', () => {
		let initial: SampleScene;

		beforeAll(() => {
			initial = new SampleScene();
		});

		for (const phase of scenePhases) {
			it(`should initialize phase '${phase}' to false`, () => {
				expect(initial.lifecycle.get(phase)).toBe(false);
			});
		}
	});

	const instance: SampleScene = new SampleScene();
	generatePhaseTests<ScenePhase, SceneFlags>('Scene Phases', instance, scenePhases);
});
