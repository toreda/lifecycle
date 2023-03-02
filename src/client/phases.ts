import {ClientPhase} from './phase';

/**
 * @category Client
 */
export const clientPhases: (keyof ClientPhase)[] = [
	'didBecomeReady',
	'didGainFocus',
	'didInit',
	'didLoad',
	'didLoseFocus',
	'didPause',
	'didShutdown',
	'didStart',
	'didStop',
	'didUnpause',
	'memoryWarning',
	'onInit',
	'onLoad',
	'onReady',
	'onShutdown',
	'onStart',
	'willBecomeReady',
	'willGainFocus',
	'willInit',
	'willLoad',
	'willLoseFocus',
	'willPause',
	'willShutdown',
	'willStart',
	'willStop'
];
