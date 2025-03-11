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

import {type LifecycleDelegateCommon} from '../lifecycle/delegate/common';
import {invokeChildListeners} from './child/listeners';
import {invokeListener} from './listener';
import {type InvokeListenersInit} from './listeners/init';

/**
 * Invoke phase listener on DelegateT or all target DelegateT[] (if it exists). Then,
 * invoke the listener on all DelegateT children.
 *
 * @category Core
 */
export async function invokeListeners<PhaseT, DelegateT extends LifecycleDelegateCommon<PhaseT>>(
	init: InvokeListenersInit<PhaseT, DelegateT>
): Promise<boolean> {
	if (!init || !init.delegate) {
		return false;
	}

	let queue: DelegateT[];

	if (Array.isArray(init.delegate)) {
		queue = init.delegate;
	} else {
		queue = [init.delegate];
	}

	let invokeCount = 0;
	if (queue.length === 0) {
		return false;
	}

	for (const item of queue) {
		const mainResult = await invokeListener<PhaseT, DelegateT>(init.phase, item, init.base);
		const childResult = await invokeChildListeners<PhaseT, DelegateT>(init.phase, item, init.base);
		invokeCount += mainResult === true ? 1 : 0;
		invokeCount += childResult === true ? 1 : 0;
	}

	return invokeCount >= queue.length;
}
