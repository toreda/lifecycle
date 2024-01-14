import {EntityPhase, entityPhase} from '../../src/entity/phase';

import {SampleEntity} from '../_data/sample/entity';
import {entityPhases} from '../../src/entity/phases';
import {generatePhaseTests} from '../_data/lifecycle/tests';

const instance = new SampleEntity();

generatePhaseTests<EntityPhase, SampleEntity>('Entity', instance, entityPhases, entityPhase);
