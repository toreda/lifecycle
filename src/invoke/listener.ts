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
import {type LogLike} from '../log/like';
import {canInvoke} from '../can/invoke';

/**
 * Phases currently mid-invocation, per delegate. The phase flag isn't set
 * until the listener finishes (so listeners may `return
 * this.lifecycle.endPhase(phase)`), which leaves a window where a listener
 * that re-invokes its own phase would recurse infinitely. Tracking in-flight
 * phases closes that window without touching the delegate or `Lifecycle`.
 */
const inflight = new WeakMap<object, Set<string>>();

/**
 * @category Core
 */
export async function invokeListener<
	PhaseT extends string,
	DelegateT extends LifecycleDelegateCommon<PhaseT>
>(phase: PhaseT, delegate: DelegateT, log?: LogLike): Promise<boolean> {
	if (!canInvoke<PhaseT, DelegateT>(phase, delegate, log)) {
		log?.warn(`[invokeListener:${String(phase)}] Can't invoke listener for phase '${String(phase)}'.`);
		return false;
	}

	const inflightPhases = inflight.get(delegate);
	if (inflightPhases && inflightPhases.has(phase)) {
		log?.warn(`[invokeListener:${String(phase)}] blocked re-entrant invocation of in-flight phase.`);
		return false;
	}

	if (inflightPhases) {
		inflightPhases.add(phase);
	} else {
		inflight.set(delegate, new Set([phase]));
	}

	let result = false;

	try {
		// @HACK: casting to any to disable typechecks here due to type mismatch,
		// even though the result type is verified before invoking. Should use a typesafe
		// method so typechecking remains enabled.
		const ln = delegate[phase as keyof DelegateT];

		// Calling a non-existent listener is valid and should abort here.
		if (!ln) {
			return false;
		}

		if (typeof ln !== 'function') {
			log?.error(`[invokeListener:${String(phase)}] listener exists but is not a function.`);
			return false;
		}

		// Must call listener from its original context within delegate or 'this' will
		// be unbound here.
		result = (await ln.call(delegate)) === true;
	} catch (e: unknown) {
		result = false;
		if (e instanceof Error) {
			log?.error(`[invokeListener:${String(phase)}] listener threw: ${e.message}.`);
		} else {
			log?.error(`[invokeListener:${String(phase)}] listener threw: unknown exception type.`);
		}
	} finally {
		// Every invocation attempt consumes the phase, regardless of outcome —
		// lifecycle phases are one-off calls. Set after the listener runs so
		// listeners may `return this.lifecycle.endPhase(phase)` and still
		// report success.
		delegate.lifecycle.set(phase, true);

		const cleanup = inflight.get(delegate);
		if (cleanup) {
			cleanup.delete(phase);
			if (cleanup.size === 0) {
				inflight.delete(delegate);
			}
		}
	}

	return result;
}
