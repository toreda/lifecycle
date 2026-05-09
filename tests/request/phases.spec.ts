import {type RequestPhase} from '../../src';
import {SampleRequest} from '../_data/sample/request';
import {generatePhaseTests} from '../_data/lifecycle/tests';
import {requestPhase} from '../../src/request/phase';
import {requestPhases} from '../../src/request/phases';

const instance = new SampleRequest();

generatePhaseTests<RequestPhase, SampleRequest>('Asset', instance, requestPhases, requestPhase);
