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
import {TweenDelegate} from './delegate';
import {invokeListeners} from '../invoke/listeners';

/**
 * @category Sounds
 */
export type TweenPhase =
	| 'tweenDidCancel'
	| 'tweenDidFinish'
	| 'tweenDidReplay'
	| 'tweenDidReset'
	| 'tweenDidStart'
	| 'tweenOnCancel'
	| 'tweenOnFinish'
	| 'tweenOnStart'
	| 'tweenWillCancel'
	| 'tweenWillFinish'
	| 'tweenWillStart';

/**
 *
 * @param delegate
 * @param phase
 * @returns
 *
 * @category Sounds
 */
export async function tweenPhase<ArgsT = unknown>(
	phase: TweenPhase,
	delegate: TweenDelegate<ArgsT>,
	log?: Log
): Promise<boolean> {
	return invokeListeners<TweenPhase, TweenDelegate<ArgsT>>(phase, delegate, log);
}
