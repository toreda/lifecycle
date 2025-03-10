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
import {type LifecycleDelegateCommon} from '../../lifecycle/delegate/common';
import {invokeListener} from '../listener';

/**
 * @param phase
 * @param delegate
 * @param base
 *
 * @category Core
 */
export async function invokeChildListeners<PhaseT, DelegateT extends LifecycleDelegateCommon<PhaseT>>(
	phase: PhaseT,
	delegate: DelegateT,
	base?: Log
): Promise<boolean> {
	if (!delegate) {
		return false;
	}

	if (!Array.isArray(delegate.children)) {
		return false;
	}

	for (const child of delegate.children) {
		try {
			await invokeListener<PhaseT, LifecycleDelegateCommon<PhaseT>>(phase, child, base);
		} catch (e) {
			if (e instanceof Error) {
				base?.makeLog(`invokeListener:${String(phase)}`).error(`listener threw: ${e.message}.`);
			} else {
				base
					?.makeLog(`invokeListener:${String(phase)}`)
					.error(`listener threw: unknown exception type.`);
			}
		}
	}

	return true;
}
