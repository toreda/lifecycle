import type {LifecycleDelegateCommon} from '../lifecycle/delegate/common';
import {Log} from '@toreda/log';

/**
 * Determine if delegate has listener that can be invoked for target phase.
 * @param phase
 * @param delegate
 * @returns
 *
 * @category Helpers
 */
export function canInvoke<PhaseT, FlagsT, DelegateT extends LifecycleDelegateCommon<PhaseT, FlagsT>>(
	phase: keyof PhaseT,
	delegate: DelegateT,
	log?: Log
): boolean {
	if (!delegate || !phase) {
		return false;
	}

	if (typeof phase !== 'string') {
		return false;
	}

	if (!delegate.lifecycle) {
		log?.makeLog(`canInvoke:${String(phase)}`).error(`delegate.lifecycle is missing`);
		return false;
	}

	if (!delegate.lifecycle.get) {
		log?.makeLog(`canInvoke:${String(phase)}`).error(`delegate.lifecycle.get is missing`);
		return false;
	}

	if (typeof delegate.lifecycle.get !== 'function') {
		log?.makeLog(`canInvoke:${String(phase)}`).error(
			`delegate.lifecycle.get exists but is not a function`
		);
		return false;
	}

	if (!delegate.lifecycle.set) {
		log?.makeLog(`canInvoke:${String(phase)}`).error(`delegate.lifecycle.set is missing`);
		return false;
	}

	if (typeof delegate.lifecycle.set !== 'function') {
		log?.makeLog(`canInvoke:${String(phase)}`).error(
			`delegate.lifecycle.set exists but is not a function`
		);
		return false;
	}

	if (delegate.lifecycle.get(phase) === true) {
		return false;
	}

	return true;
}
