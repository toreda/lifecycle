import {type TaskPhase, taskPhase} from '../../src/task/phase';

import {SampleTask} from '../_data/sample/task';
import {generatePhaseTests} from '../_data/lifecycle/tests';
import {taskPhases} from '../../src/task/phases';

const instance = new SampleTask();

generatePhaseTests<TaskPhase, SampleTask>('Task', instance, taskPhases, taskPhase);
