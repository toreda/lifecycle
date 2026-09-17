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

import type {TxnPhase} from './phase';

/**
 * Iterable collection of `TxnDelegate` phases.
 *
 * @category Transactions
 */
export const txnPhases = [
	'txnDidBegin',
	'txnDidCancel',
	'txnDidCommit',
	'txnDidFail',
	'txnDidInterrupt',
	'txnDidPause',
	'txnDidPrepare',
	'txnDidRevert',
	'txnDidSucceed',
	'txnDidTimeout',
	'txnDidUnpause',
	'txnDidValidate',
	'txnOnBegin',
	'txnOnCancel',
	'txnOnCommit',
	'txnOnFail',
	'txnOnInterrupt',
	'txnOnPause',
	'txnOnPrepare',
	'txnOnRevert',
	'txnOnSucceed',
	'txnOnTimeout',
	'txnOnUnpause',
	'txnOnValidate',
	'txnRevertDidFail',
	'txnRevertOnFail',
	'txnRevertWillFail',
	'txnWillBegin',
	'txnWillCancel',
	'txnWillCommit',
	'txnWillFail',
	'txnWillInterrupt',
	'txnWillPause',
	'txnWillPrepare',
	'txnWillRevert',
	'txnWillSucceed',
	'txnWillTimeout',
	'txnWillUnpause',
	'txnWillValidate'
] as const satisfies readonly TxnPhase[];

// Compile-time exhaustiveness check: every TxnPhase must appear in txnPhases.
// If a new phase is added to TxnPhase but missing here, this line errors.
type _TxnPhaseMissing = Exclude<TxnPhase, (typeof txnPhases)[number]>;
const _txnPhasesExhaustive: [_TxnPhaseMissing] extends [never] ? true : never = true;
void _txnPhasesExhaustive;
