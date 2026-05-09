/**
 *	MIT License
 *
 *	Copyright (c) 2019 – 2026 Toreda, Inc.
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

import {type LogLike} from '../log/like';
import {invokeListeners} from '../invoke/listeners';
import {type RequestDelegate} from './delegate';

/**
 * @category Requests
 */
export type RequestPhase =
	| 'requestDidBegin'
	| 'requestDidConnect'
	| 'requestDidEnd'
	| 'requestDidFail'
	| 'requestDidProcessPayload'
	| 'requestDidRedirect'
	| 'requestDidResolveHost'
	| 'requestDidStartHandshake'
	| 'requestDidTerminate'
	| 'requestWillBegin'
	| 'requestWillConnect'
	| 'requestWillEnd'
	| 'requestWillFail'
	| 'requestWillProcessPayload'
	| 'requestWillRedirect'
	| 'requestWillResolveHost'
	| 'requestWillStartHandshake'
	| 'requestWillTerminate'
	| 'requestDidClose'
	| 'requestDidCompleteHandshake'
	| 'requestDidReset'
	| 'requestDidSucceed'
	| 'requestDidTimeout'
	| 'requestWillClose'
	| 'requestWillCompleteHandshake'
	| 'requestWillReset'
	| 'requestWillSucceed'
	| 'requestWillTimeout';
/**
 *
 * @param delegate
 * @param phase
 *
 * @category Requests
 */
export async function requestPhase<ArgsT = unknown>(
	phase: RequestPhase,
	delegate: RequestDelegate<ArgsT> | RequestDelegate<ArgsT>[],
	base?: LogLike
): Promise<boolean> {
	return invokeListeners<RequestPhase, RequestDelegate<ArgsT>>({
		phase: phase,
		delegate: delegate,
		base: base
	});
}
