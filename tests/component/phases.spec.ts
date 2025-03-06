import {generatePhaseTests} from '../_data/lifecycle/tests';
import {ComponentPhase} from '../../src/component/phase';
import {componentPhase} from '../../src/component/phase';
import {componentPhases} from '../../src/component/phases';
import {SampleComponent} from '../_data/sample/component';

const instance = new SampleComponent();

generatePhaseTests<ComponentPhase, SampleComponent>('Component', instance, componentPhases, componentPhase);
