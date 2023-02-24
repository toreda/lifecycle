import {LifecycleDelegateCommon} from '../lifecycle/delegate/common';

export function canInvoke<PhaseT, DelegateT extends LifecycleDelegateCommon<PhaseT>>(
	delegate: DelegateT,
	phase: unknown
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

	return true;
}
