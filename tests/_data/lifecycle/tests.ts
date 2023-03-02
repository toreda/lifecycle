import type {LifecycleDelegateCommon} from '../../../src/lifecycle/delegate/common';
import {Log} from '@toreda/log';

export type Invoker<PhaseT, DelegateT> = (
	phase: keyof PhaseT,
	delegate: DelegateT,
	log?: Log
) => Promise<boolean>;

export function generatePhaseTests<PhaseT, FlagsT, DelegateT extends LifecycleDelegateCommon<PhaseT, FlagsT>>(
	suiteName: string,
	o: DelegateT,
	phases: (keyof PhaseT)[],
	invoker: Invoker<PhaseT, DelegateT>
): void {
	describe(`${suiteName}`, () => {
		describe(`toData()`, () => {
			beforeEach(() => {
				o.reset();
			});

			it(`should have delegate object`, () => {
				expect(o).not.toBeUndefined();
			});

			for (const phase of phases) {
				generatePhaseFlagTest<PhaseT, FlagsT>(o, phase, true);
			}
		});

		describe('Listeners', () => {
			for (const phase of phases) {
				generatePhaseListenerTest<PhaseT, FlagsT, DelegateT>(o, phase, invoker);
			}
		});
	});
}

export function generatePhaseListenerTests<
	PhaseT,
	FlagsT,
	DelegateT extends LifecycleDelegateCommon<PhaseT, FlagsT>
>(o: DelegateT, phases: (keyof PhaseT)[], fn: Invoker<PhaseT, DelegateT>): void {
	describe(`Phase Listeners`, () => {
		beforeEach(() => {
			o.reset();
		});

		for (const phase of phases) {
			generatePhaseListenerTest<PhaseT, FlagsT, DelegateT>(o, phase, fn);
		}
	});
}

export function generatePhaseFlagTest<PhaseT, FlagsT>(
	o: LifecycleDelegateCommon<PhaseT, FlagsT>,
	phase: keyof PhaseT,
	value: boolean
): void {
	const name = String(phase);
	it(`should phase '${name} with value '${String(value)}'`, async () => {
		o.reset();
		o.lifecycle.set(phase, value);
		const result = o.toData();
		expect(result).toHaveProperty(name);
	});
}

export function generatePhaseResetTests<PhaseT, FlagsT>(
	o: LifecycleDelegateCommon<PhaseT, FlagsT>,
	phases: (keyof PhaseT)[]
): void {
	for (const phase of phases) {
		generatePhaseResetTest(o, phase);
	}
}

export function generatePhaseResetTest<PhaseT, FlagsT>(
	o: LifecycleDelegateCommon<PhaseT, FlagsT>,
	phase: keyof PhaseT
): void {}

export function generatePhaseListenerTest<
	PhaseT,
	FlagsT,
	DelegateT extends LifecycleDelegateCommon<PhaseT, FlagsT>
>(o: DelegateT, phase: keyof PhaseT, fn: Invoker<PhaseT, DelegateT>): void {
	it(`should invoke '${String(phase)}' listener`, async () => {
		o.reset();
		const spy = jest.spyOn(o, phase as any);
		expect(spy).not.toHaveBeenCalled();

		await fn(phase, o);

		expect(spy).toHaveBeenCalledTimes(1);
		spy.mockRestore();
	});

	it(`should not invoke '${String(phase)}' listener when it's already been invoked once`, async () => {
		o.reset();
		const spy = jest.spyOn(o, phase as any);
		expect(spy).not.toHaveBeenCalled();

		for (let i = 0; i < 5; i++) {
			await fn(phase, o);
		}

		expect(spy).toHaveBeenCalledTimes(1);
		spy.mockRestore();
	});
}
