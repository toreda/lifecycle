import {AddonFlags} from '../../src/addon/flags';
import {AddonPhase} from '../../src/addon/phase';
import {SampleAddon} from '../_data/sample/addon';
import {addonPhases} from '../../src/addon/phases';
import {generatePhaseTests} from '../_data/lifecycle/tests';

describe('Addon Phases', () => {
	const instance = new SampleAddon();

	generatePhaseTests<AddonPhase, AddonFlags>('Addon Phases', instance, addonPhases);
});
