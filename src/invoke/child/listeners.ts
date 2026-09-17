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

import {type LogLike} from '../../log/like';
import {type LifecycleDelegateCommon} from '../../lifecycle/delegate/common';
import {invokeListener} from '../listener';

/**
 * Recursively invoke the phase listener on each child of `delegate`, then on
 * each child's own children. Returns `true` when every reachable descendant
 * either ran its listener successfully or has no listener for the phase.
 * Returns `false` when `delegate.children` exists but is not an array
 * (malformed delegate), when a child entry is invalid, or when any
 * descendant's listener exists but didn't run.
 *
 * Descendants whose phase flag is already set are skipped along with their
 * subtree, which terminates traversal of cyclical child graphs.
 *
 * @param phase
 * @param delegate
 * @param base
 *
 * @category Core
 */
export async function invokeChildListeners<
	PhaseT extends string,
	DelegateT extends LifecycleDelegateCommon<PhaseT>
>(phase: PhaseT, delegate: DelegateT, base?: LogLike): Promise<boolean> {
	if (!delegate) {
		return false;
	}

	// Delegates are not required to have children.
	if (delegate.children === undefined) {
		return true;
	}

	// A `children` property that exists but isn't an array indicates a
	// malformed delegate.
	if (!Array.isArray(delegate.children)) {
		base?.error(`[invokeChildListeners:${String(phase)}] delegate.children exists but is not an array.`);
		return false;
	}

	let result = true;

	for (const child of delegate.children) {
		if (!child) {
			base?.error(`[invokeChildListeners:${String(phase)}] children contains an invalid entry.`);
			result = false;
			continue;
		}

		// Phase flag already set means this node was visited earlier in the
		// traversal (or invoked before it). Skip the entire subtree.
		if (child.lifecycle && typeof child.lifecycle.get === 'function' && child.lifecycle.get(phase)) {
			continue;
		}

		const ln = (child as unknown as Record<string, unknown>)[phase];
		const ran = await invokeListener<PhaseT, LifecycleDelegateCommon<PhaseT>>(phase, child, base);

		// Children aren't required to implement a listener for every phase.
		// A missing listener doesn't count against the result; a listener
		// that exists but didn't run does.
		if (ln !== undefined && ln !== null && !ran) {
			result = false;
		}

		const descendants = await invokeChildListeners<PhaseT, LifecycleDelegateCommon<PhaseT>>(
			phase,
			child,
			base
		);
		if (!descendants) {
			result = false;
		}
	}

	return result;
}
