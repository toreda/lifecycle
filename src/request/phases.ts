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

import {type RequestPhase} from './phase';

/**
 * Iterable collection of `RequestDelegate` phases.
 *
 * @category Requests
 */
export const requestPhases = [
	'requestDidBegin',
	'requestDidCancel',
	'requestDidClose',
	'requestDidCompleteHandshake',
	'requestDidConnect',
	'requestDidEnd',
	'requestDidFail',
	'requestDidProcessPayload',
	'requestDidQueue',
	'requestDidReceiveBody',
	'requestDidReceiveResponse',
	'requestDidRedirect',
	'requestDidResolveHost',
	'requestDidRetry',
	'requestDidSend',
	'requestDidStartHandshake',
	'requestDidSucceed',
	'requestDidTerminate',
	'requestDidTimeout',
	'requestWillBegin',
	'requestWillCancel',
	'requestWillClose',
	'requestWillCompleteHandshake',
	'requestWillConnect',
	'requestWillEnd',
	'requestWillFail',
	'requestWillProcessPayload',
	'requestWillQueue',
	'requestWillReceiveBody',
	'requestWillReceiveResponse',
	'requestWillRedirect',
	'requestWillResolveHost',
	'requestWillRetry',
	'requestWillSend',
	'requestWillStartHandshake',
	'requestWillSucceed',
	'requestWillTerminate',
	'requestWillTimeout'
] as const satisfies readonly RequestPhase[];

// Compile-time exhaustiveness check: every RequestPhase must appear in requestPhases.
// If a new phase is added to RequestPhase but missing here, this line errors.
type _RequestPhaseMissing = Exclude<RequestPhase, (typeof requestPhases)[number]>;
const _requestPhasesExhaustive: [_RequestPhaseMissing] extends [never] ? true : never = true;
void _requestPhasesExhaustive;
