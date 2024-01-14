import {ScenePhase, scenePhase} from '../../src/scene/phase';

import {SampleScene} from '../_data/sample/scene';
import {generatePhaseTests} from '../_data/lifecycle/tests';
import {scenePhases} from '../../src/scene/phases';

const instance = new SampleScene();

generatePhaseTests<ScenePhase, SampleScene>('Scene', instance, scenePhases, scenePhase);
