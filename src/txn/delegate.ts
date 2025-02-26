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

import {TxnLifecycle} from './lifecycle';
import type {LifecycleDelegateCommon} from '../lifecycle/delegate/common';
import type {LifecycleListener} from '../lifecycle/listener';
import {TxnPhase} from './phase';

/**
 * Adds support for calling optional txn lifecycle methods.
 *
 * @category Transactions
 */
export interface TxnDelegate<ArgsT = unknown> extends LifecycleDelegateCommon<TxnPhase> {
	lifecycle: TxnLifecycle;

	willBegin?: LifecycleListener<ArgsT>;
	onBegin?: LifecycleListener<ArgsT>;
	didBegin?: LifecycleListener<ArgsT>;

	willInterrupt?: LifecycleListener<ArgsT>;
	onInterrupt?: LifecycleListener<ArgsT>;
	didInterrupt?: LifecycleListener<ArgsT>;

	willPause?: LifecycleListener<ArgsT>;
	onPause?: LifecycleListener<ArgsT>;
	didPause?: LifecycleListener<ArgsT>;

	willResume?: LifecycleListener<ArgsT>;
	onResume?: LifecycleListener<ArgsT>;
	didResume?: LifecycleListener<ArgsT>;

	willCancel?: LifecycleListener<ArgsT>;
	onCancel?: LifecycleListener<ArgsT>;
	didCancel?: LifecycleListener<ArgsT>;

	willTimeout?: LifecycleListener<ArgsT>;
	onTimeout?: LifecycleListener<ArgsT>;
	didTimeout?: LifecycleListener<ArgsT>;

	willRevert?: LifecycleListener<ArgsT>;
	onRevert?: LifecycleListener<ArgsT>;
	didRevert?: LifecycleListener<ArgsT>;

	/**
	 * Transaction will fail.
	 */
	willFail?: LifecycleListener<ArgsT>;
	onFail?: LifecycleListener<ArgsT>;
	/**
	 * Transaction failed due to error, timeout, or other problem.
	 */
	didFail?: LifecycleListener<ArgsT>;
	/**
	 * Transaction will finish successfully.
	 */
	willSucceed?: LifecycleListener<ArgsT>;
	onSucceed?: LifecycleListener<ArgsT>;
	/**
	 * Transaction completed successfully.
	 */
	didSucceed?: LifecycleListener<ArgsT>;
}
