import {Log} from '@toreda/log';
import {type LifecycleDelegateCommon} from '../../lifecycle/delegate/common';
import {invokeListener} from '../listener';

export async function invokeChildListeners<PhaseT, DelegateT extends LifecycleDelegateCommon<PhaseT>>(
	phase: keyof PhaseT,
	delegate: DelegateT,
	base?: Log
): Promise<boolean> {
	if (!delegate) {
		return false;
	}

	if (!Array.isArray(delegate.children)) {
		return false;
	}

	for (const child of delegate.children) {
		try {
			await invokeListener<PhaseT, LifecycleDelegateCommon<PhaseT>>(phase, child, base);
		} catch (e) {
			if (e instanceof Error) {
				base?.makeLog(`invokeListener:${String(phase)}`).error(`listener threw: ${e.message}.`);
			} else {
				base?.makeLog(`invokeListener:${String(phase)}`).error(
					`listener threw: unknown exception type.`
				);
			}
		}
	}

	return true;
}
