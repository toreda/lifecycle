import {Log} from '@toreda/log';
import {type LifecycleDelegateCommon} from '../lifecycle/delegate/common';
import {invokeChildListeners} from './child/listeners';
import {invokeListener} from './listener';

/**
 * @category Helpers
 */
export async function invokeListeners<PhaseT, DelegateT extends LifecycleDelegateCommon<PhaseT>>(
	phase: keyof PhaseT,
	delegate: DelegateT,
	base?: Log
): Promise<boolean> {
	const mainResult = await invokeListener<PhaseT, DelegateT>(phase, delegate, base);
	const childResult = await invokeChildListeners<PhaseT, DelegateT>(phase, delegate, base);

	return mainResult || childResult;
}
