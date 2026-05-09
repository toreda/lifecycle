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

import {type LifecycleDelegateCommon} from '../lifecycle/delegate/common';
import {invokeChildListeners} from './child/listeners';
import {invokeListener} from './listener';
import {type InvokeListenersInit} from './listeners/init';

/**
 * Invoke the phase listener on each target delegate, followed by the same
 * listener on its children. Returns `true` only when every target's main
 * listener succeeded.
 *
 * @category Core
 */
export async function invokeListeners<
	PhaseT extends string,
	DelegateT extends LifecycleDelegateCommon<PhaseT>
>(init: InvokeListenersInit<PhaseT, DelegateT>): Promise<boolean> {
	if (!init || !init.delegate) {
		return false;
	}

	const queue: DelegateT[] = Array.isArray(init.delegate) ? init.delegate : [init.delegate];

	if (queue.length === 0) {
		return false;
	}

	let successes = 0;
	for (const item of queue) {
		const mainResult = await invokeListener<PhaseT, DelegateT>(init.phase, item, init.base);
		await invokeChildListeners<PhaseT, DelegateT>(init.phase, item, init.base);
		if (mainResult === true) {
			successes++;
		}
	}

	return successes === queue.length;
}
