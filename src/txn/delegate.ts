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

import type {LifecycleDelegateCommon} from '../lifecycle/delegate/common';
import type {LifecycleListener} from '../lifecycle/listener';
import {type TxnPhase} from './phase';

/**
 * Adds support for calling optional txn lifecycle methods.
 *
 * @category Transactions
 */
export interface TxnDelegate<ArgsT = unknown> extends LifecycleDelegateCommon<TxnPhase> {
	txnWillBegin?: LifecycleListener<ArgsT>;
	onBegin?: LifecycleListener<ArgsT>;
	txnDidBegin?: LifecycleListener<ArgsT>;

	txnWillInterrupt?: LifecycleListener<ArgsT>;
	txnOnInterrupt?: LifecycleListener<ArgsT>;
	txnDidInterrupt?: LifecycleListener<ArgsT>;

	txnWillPause?: LifecycleListener<ArgsT>;
	txnOnPause?: LifecycleListener<ArgsT>;
	txnDidPause?: LifecycleListener<ArgsT>;

	txnWillResume?: LifecycleListener<ArgsT>;
	txnOnResume?: LifecycleListener<ArgsT>;
	txnDidResume?: LifecycleListener<ArgsT>;

	txnWillCancel?: LifecycleListener<ArgsT>;
	txnOnCancel?: LifecycleListener<ArgsT>;
	txnDidCancel?: LifecycleListener<ArgsT>;

	txnWillTimeout?: LifecycleListener<ArgsT>;
	txnOnTimeout?: LifecycleListener<ArgsT>;
	txnDidTimeout?: LifecycleListener<ArgsT>;

	txnWillRevert?: LifecycleListener<ArgsT>;
	txnOnRevert?: LifecycleListener<ArgsT>;
	txnDidRevert?: LifecycleListener<ArgsT>;

	/**
	 * Transaction will fail.
	 */
	txnWillFail?: LifecycleListener<ArgsT>;
	txnOnFail?: LifecycleListener<ArgsT>;
	/**
	 * Transaction failed due to error, timeout, or other problem.
	 */
	txnDidFail?: LifecycleListener<ArgsT>;
	/**
	 * Transaction will finish successfully.
	 */
	txnWillSucceed?: LifecycleListener<ArgsT>;
	txnOnSucceed?: LifecycleListener<ArgsT>;
	/**
	 * Transaction completed successfully.
	 */
	txnDidSucceed?: LifecycleListener<ArgsT>;
}
