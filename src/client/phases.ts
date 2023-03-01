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
	'didStart',
	'didStop',
	'didUnpause',
	'didShutdown',
	'memoryWarning',
	'onInit',
	'onLoad',
	'onReady',
	'onStart',
	'onShutdown',
	'willBecomeReady',
	'willGainFocus',
	'willInit',
	'willLoad',
	'willLoseFocus',
	'willPause',
	'willStart',
	'willStop',
	'willShutdown'
];
