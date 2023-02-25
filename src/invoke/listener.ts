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

export async function invokeListener<PhaseT, DelegateT extends LifecycleDelegateCommon<PhaseT>>(
	phase: keyof PhaseT,
	delegate: DelegateT,
	log?: Log
): Promise<boolean> {
	if (!canInvoke<PhaseT, DelegateT>(phase, delegate, log)) {
		if (log) {
			log.warn(`Can't invoke listener for server phase '${String(phase)}'.`);
		}

		return false;
	}

	// @HACK: casting to any to disable typechecks here due to type mismatch,
	// even though the result type is verified before invoking. Should use a typesafe
	// method so typechecking remains enabled.
	const ln = delegate[phase as keyof DelegateT];
	if (typeof ln !== 'function') {
		return false;
	}

	let result: boolean = false;

	try {
		result = await ln();
		delegate.lifecycle.set(phase, true);
	} catch (e: unknown) {
		result = false;
		if (log) {
			if (e instanceof Error) {
				log.error(`'${String(phase)}' listener threw: ${e.message}.`);
			} else {
				log.error(`'${String(phase)}' listener threw: unknown exception type.`);
			}
		}
	}

	return result;
}
