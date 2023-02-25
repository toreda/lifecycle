import type {ServerPhase} from '../../../src/server/phase';

export const SERVER_PHASES: {
	name: string;
	key: keyof ServerPhase;
	initial: boolean;
}[] = [
	{name: 'didBecomeReady', key: 'didBecomeReady', initial: false},
	{name: 'didInit', key: 'didInit', initial: false},
	{name: 'didLoad', key: 'didLoad', initial: false},
	{name: 'didRestart', key: 'didRestart', initial: false},
	{name: 'didShutdown', key: 'didShutdown', initial: false},
	{name: 'didStart', key: 'didStart', initial: false},
	{name: 'onInit', key: 'onInit', initial: false},
	{name: 'onLoad', key: 'onLoad', initial: false},
	{name: 'onReady', key: 'onReady', initial: false},
	{name: 'onRestart', key: 'onRestart', initial: false},
	{name: 'onShutdown', key: 'onShutdown', initial: false},
	{name: 'onStart', key: 'onStart', initial: false},
	{name: 'onStop', key: 'onStop', initial: false},
	{name: 'willBecomeReady', key: 'willBecomeReady', initial: false},
	{name: 'willInit', key: 'willInit', initial: false},
	{name: 'willLoad', key: 'willLoad', initial: false},
	{name: 'willRestart', key: 'willRestart', initial: false},
	{name: 'willShutdown', key: 'willShutdown', initial: false},
	{name: 'willStart', key: 'willStart', initial: false},
	{name: 'willStop', key: 'willStop', initial: false}
];
