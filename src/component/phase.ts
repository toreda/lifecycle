import {Log} from '@toreda/log';
import {invokeListeners} from '../invoke/listeners';
import {type ComponentDelegate} from './delegate';

/**
 * @category Components
 */
export type ComponentPhase =
	| 'componentCfgDidChange'
	| 'componentCfgOnChange'
	| 'componentCfgWillChange'
	| 'componentDidBecomeReady'
	| 'componentDidGainFocus'
	| 'componentDidInit'
	| 'componentDidLoad'
	| 'componentDidLoseFocus'
	| 'componentDidPause'
	| 'componentDidReload'
	| 'componentDidStart'
	| 'componentDidStop'
	| 'componentWillSaveState'
	| 'componentDidSaveState'
	| 'componentOnSaveState'
	| 'componentDidUnpause'
	| 'componentMemoryWarning'
	| 'componentOnBecomeReady'
	| 'componentOnError'
	| 'componentOnException'
	| 'componentOnGainFocus'
	| 'componentOnInit'
	| 'componentOnLoad'
	| 'componentOnLoseFocus'
	| 'componentOnPause'
	| 'componentOnReload'
	| 'componentOnStart'
	| 'componentOnStop'
	| 'componentOnUnpause'
	| 'componentWillBecomeReady'
	| 'componentWillGainFocus'
	| 'componentWillInit'
	| 'componentWillLoad'
	| 'componentWillLoseFocus'
	| 'componentWillPause'
	| 'componentWillReload'
	| 'componentWillStart'
	| 'componentWillStop'
	| 'componentWillUnpause';

/**
 * @category Components
 */
export async function componentPhase<ArgsT = unknown>(
	phase: ComponentPhase,
	delegate: ComponentDelegate<ArgsT>,
	log?: Log
): Promise<boolean> {
	return invokeListeners<ComponentPhase, ComponentDelegate<ArgsT>>(phase, delegate, log);
}
