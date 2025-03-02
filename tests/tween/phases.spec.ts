import {type ServerPhase, serverPhase} from '../../src/server/phase';

import {generatePhaseTests} from '../_data/lifecycle/tests';
import {tweenPhase, TweenPhase, tweenPhases} from '../../src';
import {SampleTween} from '../_data/sample/tween';

const instance = new SampleTween();

generatePhaseTests<TweenPhase, SampleTween>('Tween', instance, tweenPhases, tweenPhase);
