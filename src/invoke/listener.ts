/**
 *	MIT License
 *
 *	Copyright (c) 2019 – 2023 Toreda, Inc.
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
import {canInvoke} from '../can/invoke';

/**
 * @category Helpers
 */
export async function invokeListener<PhaseT, DelegateT extends LifecycleDelegateCommon<PhaseT>>(
	phase: keyof PhaseT,
	delegate: DelegateT,
	log?: Log
): Promise<boolean> {
	if (!canInvoke<PhaseT, DelegateT>(phase, delegate, log)) {
		log?.makeLog(`invokeListener:${String(phase)}`).warn(
			`Can't invoke listener for server phase '${String(phase)}'.`
		);
		return false;
	}

	// @HACK: casting to any to disable typechecks here due to type mismatch,
	// even though the result type is verified before invoking. Should use a typesafe
	// method so typechecking remains enabled.
	const ln = delegate[phase as keyof DelegateT];

	// Calling a non-existent listener is valid and should abort here.
	if (!ln) {
		return false;
	}

	if (typeof ln !== 'function') {
		log?.makeLog(`invokeListener:${String(phase)}`).error(`listener exists but is not a function.`);
		return false;
	}

	let result: boolean = false;

	try {
		// Must call listener from its original context within delegate or 'this' will
		// be unbound here.
		result = await ln.call(delegate);
		delegate.lifecycle.set(phase, true);
	} catch (e: unknown) {
		result = false;

		if (e instanceof Error) {
			log?.makeLog(`invokeListener:${String(phase)}`).error(`listener threw: ${e.message}.`);
		} else {
			log?.makeLog(`invokeListener:${String(phase)}`).error(`listener threw: unknown exception type.`);
		}
	}

	return result;
}
