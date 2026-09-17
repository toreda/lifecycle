import {Log} from '@toreda/log';
import type {LifecycleDelegateCommon} from '../../../src/lifecycle/delegate/common';

export type Invoker<PhaseT, DelegateT> = (
	phase: PhaseT,
	delegate: DelegateT,
	log?: Log
) => Promise<boolean>;

/**
 * Delegate with a `reset` method, used by generated phase tests to restore
 * a shared sample delegate between test cases. `reset` is not part of the
 * `LifecycleDelegateCommon` contract.
 */
export type ResettableDelegate<PhaseT extends string> = LifecycleDelegateCommon<PhaseT> & {
	reset: () => void;
};

export function generatePhaseTests<PhaseT extends string, DelegateT extends ResettableDelegate<PhaseT>>(
	suiteName: string,
	o: DelegateT,
	phases: readonly PhaseT[],
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

export function generatePhaseListenerTests<PhaseT extends string, DelegateT extends ResettableDelegate<PhaseT>>(
	o: DelegateT,
	phases: readonly PhaseT[],
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

export function generatePhaseResetTest<PhaseT extends string>(
	o: ResettableDelegate<PhaseT>,
	phase: PhaseT,
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

export function generatePhaseListenerTest<PhaseT extends string, DelegateT extends ResettableDelegate<PhaseT>>(
	o: DelegateT,
	phase: PhaseT,
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
