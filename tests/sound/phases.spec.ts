import {type ServerPhase, serverPhase} from '../../src/server/phase';

import {generatePhaseTests} from '../_data/lifecycle/tests';
import {soundPhases} from '../../src/sound/phases';
import {soundPhase, SoundPhase} from '../../src/sound/phase';
import {SampleSound} from '../_data/sample/sound';

const instance = new SampleSound();

generatePhaseTests<SoundPhase, SampleSound>('Sound', instance, soundPhases, soundPhase);
