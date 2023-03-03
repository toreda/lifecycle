import type {LifecycleDelegateCommon} from '../../../src/lifecycle/delegate/common';
import {Log} from '@toreda/log';

export type Invoker<PhaseT, DelegateT> = (
	phase: keyof PhaseT,
	delegate: DelegateT,
	log?: Log
) => Promise<boolean>;

export function generatePhaseTests<PhaseT, DelegateT extends LifecycleDelegateCommon<PhaseT>>(
	suiteName: string,
	o: DelegateT,
	phases: (keyof PhaseT)[],
	invoker: Invoker<PhaseT, DelegateT>
): void {
	describe(`${suiteName}`, () => {
		describe('Listeners', () => {
			for (const phase of phases) {
				generatePhaseListenerTest<PhaseT, DelegateT>(o, phase, invoker);
			}
		});

		describe('Reset', () => {
			for (const phase of phases) {
				generatePhaseResetTest<PhaseT>(o, phase, false);
			}
		});
	});
}

export function generatePhaseListenerTests<PhaseT, DelegateT extends LifecycleDelegateCommon<PhaseT>>(
	o: DelegateT,
	phases: (keyof PhaseT)[],
	fn: Invoker<PhaseT, DelegateT>
): void {
	describe(`Phase Listeners`, () => {
		beforeEach(() => {
			o.reset();
		});

		for (const phase of phases) {
			generatePhaseListenerTest<PhaseT, DelegateT>(o, phase, fn);
		}
	});
}

export function generatePhaseResetTest<PhaseT>(
	o: LifecycleDelegateCommon<PhaseT>,
	phase: keyof PhaseT,
	initial: boolean
): void {
	it(`should reset '${String(phase)}' to '${String(initial)}'`, () => {
		const targetValue = !!initial;
		o.lifecycle.set(phase, targetValue);
		expect(o.lifecycle.get(phase)).toBe(targetValue);
		o.reset();
		expect(o.lifecycle.get(phase)).toBe(initial);
	});
}

export function generatePhaseListenerTest<PhaseT, DelegateT extends LifecycleDelegateCommon<PhaseT>>(
	o: DelegateT,
	phase: keyof PhaseT,
	fn: Invoker<PhaseT, DelegateT>
): void {
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
