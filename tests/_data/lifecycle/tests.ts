import type {LifecycleDelegateCommon} from '../../../src/lifecycle/delegate/common';

export function generatePhaseTests<PhaseT, FlagsT>(
	suiteName: string,
	o: LifecycleDelegateCommon<PhaseT, FlagsT>,
	phases: (keyof PhaseT)[]
): void {
	describe(`${suiteName}`, () => {
		const flags = o.toData();

		describe(`toData()`, () => {
			beforeEach(() => {
				o.reset();
			});

			it(`should have delegate object`, () => {
				expect(o).not.toBeUndefined();
			});

			for (const phase of phases) {
				generatePhaseFlagTest<PhaseT, FlagsT>(o, phase, flags);
			}
		});
	});
}

export function generatePhaseFlagTest<PhaseT, FlagsT>(
	o: LifecycleDelegateCommon<PhaseT, FlagsT>,
	phase: keyof PhaseT,
	flags: FlagsT
): void {
	const name = String(phase);
	it(`should include property '${name} with value 'true'`, async () => {
		o.lifecycle.set(phase, true);
		expect(flags).toHaveProperty(name);
	});
}
