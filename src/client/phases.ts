import {type ClientPhase} from './phase';

/**
 * @category Client
 */
export const clientPhases: (keyof ClientPhase)[] = [
	'clientDidBecomeReady',
	'clientDidGainFocus',
	'clientDidInit',
	'clientDidLoad',
	'clientDidLoseFocus',
	'clientDidPause',
	'clientDidShutdown',
	'clientDidStart',
	'clientDidStop',
	'clientDidUnpause',
	'clientMemoryWarning',
	'clientOnInit',
	'clientOnLoad',
	'clientOnReady',
	'clientOnShutdown',
	'clientOnStart',
	'clientWillBecomeReady',
	'clientWillGainFocus',
	'clientWillInit',
	'clientWillLoad',
	'clientWillLoseFocus',
	'clientWillPause',
	'clientWillShutdown',
	'clientWillStart',
	'clientWillStop'
];
