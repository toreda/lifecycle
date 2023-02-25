import {LifecycleDelegateCommon} from '../lifecycle/delegate/common';

/**
 * Determine if delegate has listener that can be invoked for target phase.
 * @param phase
 * @param delegate
 * @returns
 *
 * @category Helpers
 */
export function canInvoke<PhaseT, DelegateT extends LifecycleDelegateCommon<PhaseT>>(
	phase: keyof PhaseT,
	delegate: DelegateT
): boolean {
	if (!delegate || !phase || !delegate.lifecycle) {
		return false;
	}

	if (typeof phase !== 'string') {
		return false;
	}

	if (typeof delegate.lifecycle.get !== 'function' || typeof delegate.lifecycle.set !== 'function') {
		return false;
	}

	if (delegate.lifecycle.get(phase)) {
		return false;
	}

	return true;
}
