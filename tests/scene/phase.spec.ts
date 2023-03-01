import {Levels, Log} from '@toreda/log';

import {SampleScene} from '../_data/sample/scene';
import {scenePhase} from '../../src/scene/phase';
import {scenePhases} from '../../src';

describe('scenePhase', () => {
	let instance: SampleScene;
	let log: Log;

	beforeAll(() => {
		instance = new SampleScene();
		log = new Log({
			globalLevel: Levels.ALL,
			consoleEnabled: true
		});
	});

	for (const phase of scenePhases) {
		it(`should invoke listener for phase '${phase}'`, async () => {
			const spy = jest.spyOn(instance, phase as any);
			expect(spy).not.toHaveBeenCalled();

			const result = await scenePhase(phase, instance, log);

			expect(spy).toHaveBeenCalledTimes(1);
			spy.mockRestore();
		});
	}
});
