import {generatePhaseTests} from '../_data/lifecycle/tests';
import {AdapterPhase, adapterPhase, adapterPhases} from '../../src';
import {SampleAdapter} from '../_data/sample/adapter';

const instance = new SampleAdapter();

generatePhaseTests<AdapterPhase, SampleAdapter>('Adapter', instance, adapterPhases, adapterPhase);
