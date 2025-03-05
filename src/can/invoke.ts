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
import {Log} from '@toreda/log';

/**
 * Determine if delegate has listener that can be invoked for target phase.
 * @param phase
 * @param delegate
 *
 * @category Core
 */
export function canInvoke<PhaseT, DelegateT extends LifecycleDelegateCommon<PhaseT>>(
	phase: PhaseT,
	delegate: DelegateT,
	log?: Log
): boolean {
	if (!delegate || !phase) {
		return false;
	}

	if (typeof phase !== 'string') {
		return false;
	}

	if (!delegate.lifecycle) {
		log?.makeLog(`canInvoke:${String(phase)}`).error(`delegate.lifecycle is missing`);
		return false;
	}

	if (!delegate.lifecycle.get) {
		log?.makeLog(`canInvoke:${String(phase)}`).error(`delegate.lifecycle.get is missing`);
		return false;
	}

	if (typeof delegate.lifecycle.get !== 'function') {
		log
			?.makeLog(`canInvoke:${String(phase)}`)
			.error(`delegate.lifecycle.get exists but is not a function`);
		return false;
	}

	if (!delegate.lifecycle.set) {
		log?.makeLog(`canInvoke:${String(phase)}`).error(`delegate.lifecycle.set is missing`);
		return false;
	}

	if (typeof delegate.lifecycle.set !== 'function') {
		log
			?.makeLog(`canInvoke:${String(phase)}`)
			.error(`delegate.lifecycle.set exists but is not a function`);
		return false;
	}

	if (delegate.lifecycle.get(phase) === true) {
		return false;
	}

	return true;
}
