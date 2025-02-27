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

import type {CnxDelegate} from './delegate';
import {Log} from '@toreda/log';
import {invokeListeners} from '../invoke/listeners';

/**
 * Expressive type describing phase names used in client lifecycle flow.
 *
 * @category Connection
 */
export type CnxPhase = Pick<
	CnxDelegate<unknown, unknown>,
	| 'didClose'
	| 'didConnect'
	| 'didDisconnect'
	| 'didFailClose'
	| 'didFailConnect'
	| 'didFailReconnect'
	| 'didInit'
	| 'didLoad'
	| 'didOpen'
	| 'didPing'
	| 'didPong'
	| 'didReconnect'
	| 'didReset'
	| 'didStartConnect'
	| 'didStopConnect'
	| 'didStopReconnect'
	| 'didTimeout'
	| 'willClose'
	| 'willConnect'
	| 'willDisconnect'
	| 'willInit'
	| 'willLoad'
	| 'willOpen'
	| 'willReconnect'
	| 'willReset'
	| 'willStartConnect'
	| 'willStartHandshake'
	| 'willStartReconnect'
	| 'willStopConnect'
	| 'willStopHandshake'
	| 'willStopReconnect'
	| 'willTimeout'
>;

/**
 *
 * @param delegate
 * @param phase
 * @returns
 *
 * @category Connection
 */
export async function cnxPhase<ArgsT = unknown>(phase: keyof CnxPhase, delegate: CnxDelegate<CnxPhase, ArgsT>, log?: Log): Promise<boolean> {
	return invokeListeners<CnxPhase, CnxDelegate<CnxPhase, ArgsT>>(phase, delegate, log);
}
