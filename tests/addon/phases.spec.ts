import {AddonPhase, addonPhase} from '../../src/addon/phase';

import {SampleAddon} from '../_data/sample/addon';
import {addonPhases} from '../../src/addon/phases';
import {generatePhaseTests} from '../_data/lifecycle/tests';

const instance = new SampleAddon();

generatePhaseTests<AddonPhase, SampleAddon>('Addon', instance, addonPhases, addonPhase);
