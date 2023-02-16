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

import {Lifecycle} from '../lifecycle';
import type {LifecycleDelegateCommon} from './delegate/common';

/**
 *
 * @param o
 * @param phase
 * @returns
 *
 * @category Lifecycle
 */
export async function lifecyclePhase<
	PhaseKeyT extends string,
	LifecycleT extends Lifecycle<PhaseKeyT>,
	DelegateT extends LifecycleDelegateCommon<LifecycleT>
>(o: DelegateT, phase: PhaseKeyT & keyof DelegateT): Promise<boolean> {
	if (!phase || !o || !o.lifecycle) {
		return false;
	}

	const flag = o.lifecycle.get(phase);
	if (flag === true) {
		return false;
	}

	// @HACK: Using ANY here disables type safety.
	// phase is checked above before use, and checked
	// below. Type intersections haven't worked well and this
	// needs a carefully thought out non-ANY solution.
	// eslint-disable-next-line
	const ln = o[phase];
	if (typeof ln !== 'function') {
		return false;
	}

	let result: boolean = false;

	try {
		result = await ln();
	} catch (e) {
		result = false;
	}

	// Set flag active.
	o.lifecycle.set(phase, true);

	return result;
}
