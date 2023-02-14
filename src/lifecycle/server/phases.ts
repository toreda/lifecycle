import type {LifecycleServerPhase} from './phase';

export const lifecycleServerPhases: LifecycleServerPhase[] = [
	'didBecomeReady',
	'didInit',
	'didLoad',
	'didRestart',
	'didShutdown',
	'didStart',
	'didStop',
	'onInit',
	'onLoad',
	'onReady',
	'onRestart',
	'onShutdown',
	'onStart',
	'onStop',
	'willBecomeReady',
	'willInit',
	'willLoad',
	'willRestart',
	'willShutdown',
	'willStart',
	'willStop'
];
