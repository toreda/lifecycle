import type {ClientPhase} from '../../../src/client/phase';

export const CLIENT_PHASES: {
	name: string;
	key: keyof ClientPhase;
	initial: boolean;
}[] = [
	{name: 'didBecomeReady', key: 'didBecomeReady', initial: false},
	{name: 'didGainFocus', key: 'didGainFocus', initial: false},
	{name: 'willInit', key: 'willInit', initial: false},
	{name: 'didInit', key: 'didInit', initial: false},
	{name: 'willLoad', key: 'willLoad', initial: false},
	{name: 'didLoad', key: 'didLoad', initial: false},
	{name: 'didLoseFocus', key: 'didLoseFocus', initial: false},
	{name: 'didStart', key: 'didStart', initial: false},
	{name: 'didUnpause', key: 'didUnpause', initial: false},
	{name: 'didPause', key: 'didPause', initial: false},
	{name: 'memoryWarning', key: 'memoryWarning', initial: false},
	{name: 'onInit', key: 'onInit', initial: false},
	{name: 'onLoad', key: 'onLoad', initial: false},
	{name: 'onReady', key: 'onReady', initial: false},
	{name: 'onStart', key: 'onStart', initial: false},
	{name: 'willBecomeReady', key: 'willBecomeReady', initial: false},
	{name: 'willGainFocus', key: 'willGainFocus', initial: false},
	{name: 'willLoseFocus', key: 'willLoseFocus', initial: false},
	{name: 'willPause', key: 'willPause', initial: false},
	{name: 'willStart', key: 'willStart', initial: false},
	{name: 'willStop', key: 'willStop', initial: false}
];
