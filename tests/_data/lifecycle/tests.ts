import type {LifecycleDelegateCommon} from '../../../src/lifecycle/delegate/common';

export async function generatePhaseTests<PhaseT, FlagsT>(
	suiteName: string,
	o: LifecycleDelegateCommon<PhaseT, FlagsT>,
	phases: PhaseT[]
): Promise<void> {
	describe(`${suiteName} Flags`, async () => {
		beforeEach(() => {
			o.reset();
		});

		for (const phase of phases) {
			await generatePhaseTest<PhaseT, FlagsT>(o, phase);
		}
	});
}

export async function generatePhaseTest<PhaseT, FlagsT>(
	o: LifecycleDelegateCommon<PhaseT, FlagsT>,
	phase: keyof PhaseT
): Promise<void> {

	it(`should `, async () => {
		o.lifecycle.set(phase, true);
	});
}
