import {type ServerPhase, serverPhase} from '../../src/server/phase';

import {SampleServer} from '../_data/sample/server';
import {generatePhaseTests} from '../_data/lifecycle/tests';
import {serverPhases} from '../../src/server/phases';

const instance = new SampleServer();

generatePhaseTests<ServerPhase, SampleServer>('Server', instance, serverPhases, serverPhase);
