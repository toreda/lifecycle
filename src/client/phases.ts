import {type ClientPhase} from './phase';

/**
 * Iterable collection of all valid `ClientPhase` values.
 *
 * @category Clients
 */
export const clientPhases: (ClientPhase)[] = [
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
