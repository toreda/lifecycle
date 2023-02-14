import {PHASES} from '../../../_data/lifecycle';
import {lifecyclePhaseListenerName} from '../../../../src/lifecycle/phase/listener/name';

describe('lifecyclePhaseListenerName', () => {
	for (const phase of PHASES) {
		it(`should return listener name '${phase.listener}' for phase '${phase.name}'`, () => {
			expect(lifecyclePhaseListenerName(phase.name)).toBe(phase.listener);
		});
	}
});
