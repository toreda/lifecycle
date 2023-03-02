import {ClientPhase, clientPhase} from '../../src/client/phase';

import {ClientFlags} from '../../src/client/flags';
import {SampleClient} from '../_data/sample/client';
import {clientPhases} from '../../src/client/phases';
import {generatePhaseTests} from '../_data/lifecycle/tests';

const instance = new SampleClient();

generatePhaseTests<ClientPhase, ClientFlags, SampleClient>('Client', instance, clientPhases, clientPhase);
