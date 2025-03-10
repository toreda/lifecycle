/**
 *	MIT License
 *
 *	Copyright (c) 2019 – 2025 Toreda, Inc.
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:

 * 	The above copyright notice and this permission notice shall be included in all
 * 	copies or substantial portions of the Software.
 *
 * 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * 	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * 	SOFTWARE.
 *
 */

import {Log} from '@toreda/log';
import {type SoundDelegate} from './delegate';
import {invokeListeners} from '../invoke/listeners';

/**
 * @category Sounds
 */
export type SoundPhase =
	| 'soundDidCancel'
	| 'soundDidFinish'
	| 'soundDidGainFocus'
	| 'soundDidLoseFocus'
	| 'soundDidPause'
	| 'soundDidReset'
	| 'soundDidStart'
	| 'soundDidUnpause'
	| 'soundOnCancel'
	| 'soundOnError'
	| 'soundOnFinish'
	| 'soundOnGainFocus'
	| 'soundOnLoseFocus'
	| 'soundOnMissing'
	| 'soundOnPause'
	| 'soundOnStart'
	| 'soundOnUnpause'
	| 'soundWillCancel'
	| 'soundWillFinish'
	| 'soundWillGainFocus'
	| 'soundWillLoseFocus'
	| 'soundWillPause'
	| 'soundWillReset'
	| 'soundWillStart'
	| 'soundWillUnpause';

/**
 *
 * @param delegate
 * @param phase
 *
 * @category Sounds
 */
export async function soundPhase<ArgsT = unknown>(
	phase: SoundPhase,
	delegate: SoundDelegate<ArgsT> | SoundDelegate<ArgsT>[],
	base?: Log
): Promise<boolean> {
	return invokeListeners<SoundPhase, SoundDelegate<ArgsT>>({
		phase: phase,
		delegate: delegate,
		base: base
	});
}
