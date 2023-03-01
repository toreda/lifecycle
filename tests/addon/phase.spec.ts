import {AddonPhase, addonPhase} from '../../src/addon/phase';
import {Levels, Log} from '@toreda/log';

import {SampleAddon} from '../_data/sample/addon';
import {addonPhases} from '../../src/addon/phases';

describe('addonPhase', () => {
	let instance: SampleAddon;
	let log: Log;

	beforeAll(() => {
		instance = new SampleAddon();
		log = new Log({
			globalLevel: Levels.ALL,
			consoleEnabled: true
		});
	});

	for (const phase of addonPhases) {
		it(`should invoke listener for phase '${phase}'`, async () => {
			const spy = jest.spyOn(instance, phase as any);
			expect(spy).not.toHaveBeenCalled();

			const result = await addonPhase(phase, instance, log);

			expect(spy).toHaveBeenCalledTimes(1);
			spy.mockRestore();
		});
	}
});
