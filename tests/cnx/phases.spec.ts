import {CnxPhase, cnxPhase} from '../../src/cnx/phase';

import {CnxFlags} from '../../src';
import {SampleCnx} from '../_data/sample/cnx';
import {cnxPhases} from '../../src/cnx/phases';
import {generatePhaseTests} from '../_data/lifecycle/tests';

const instance = new SampleCnx();

generatePhaseTests<CnxPhase, CnxFlags, SampleCnx>('Cnx', instance, cnxPhases, cnxPhase);
