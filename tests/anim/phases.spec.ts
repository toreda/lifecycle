import {type AnimPhase, animPhase} from '../../src/anim/phase';

import {SampleAnim} from '../_data/sample/anim';
import {animPhases} from '../../src/anim/phases';
import {generatePhaseTests} from '../_data/lifecycle/tests';

const instance = new SampleAnim();

generatePhaseTests<AnimPhase, SampleAnim>('Anim', instance, animPhases, animPhase);
