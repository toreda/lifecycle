/**
 *	MIT License
 *
 *	Copyright (c) 2019 – 2024 Toreda, Inc.
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

import type {TxnDelegate} from './delegate';
import {Log} from '@toreda/log';
import {invokeListeners} from '../invoke/listeners';

/**
 * Expressive type describing phase names used in client lifecycle flow.
 *
 * @category Txn
 */
export type TxnPhase = Pick<
	TxnDelegate,
	| 'willBegin'
	| 'didBegin'
	| 'willInterrupt'
	| 'didInterrupt'
	| 'willPause'
	| 'didPause'
	| 'willResume'
	| 'didResume'
	| 'willCancel'
	| 'didCancel'
	| 'willTimeout'
	| 'didTimeout'
	| 'willRevert'
	| 'didRevert'
	| 'willFail'
	| 'didFail'
	| 'willSucceed'
	| 'didSucceed'
>;

/**
 *
 * @param delegate
 * @param phase
 * @returns
 *
 * @category Connection
 */
export async function txnPhase(phase: keyof TxnPhase, delegate: TxnDelegate, log?: Log): Promise<boolean> {
	return invokeListeners<TxnPhase, TxnDelegate>(phase, delegate, log);
}
