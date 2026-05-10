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

import type {EntityDelegate} from './delegate';
import {type LogLike} from '../log/like';
import {invokeListeners} from '../invoke/listeners';

/**
 * Identifiers for each phase in the Entity Lifecycle flow.
 *
 * @category Entities
 */
export type EntityPhase =
	| 'entityDidBecomeReady'
	| 'entityDidDespawn'
	| 'entityDidGainFocus'
	| 'entityDidHide'
	| 'entityDidHover'
	| 'entityDidInit'
	| 'entityDidInteract'
	| 'entityDidLoad'
	| 'entityDidLoseFocus'
	| 'entityDidMove'
	| 'entityDidPause'
	| 'entityDidRecycle'
	| 'entityDidReleaseAsset'
	| 'entityDidShow'
	| 'entityDidSpawn'
	| 'entityDidStart'
	| 'entityDidStop'
	| 'entityDidUnpause'
	| 'entityOnBecomeReady'
	| 'entityOnDespawn'
	| 'entityOnGainFocus'
	| 'entityOnHide'
	| 'entityOnHover'
	| 'entityOnInit'
	| 'entityOnInteract'
	| 'entityOnLoad'
	| 'entityOnLoseFocus'
	| 'entityOnMemoryWarning'
	| 'entityOnMove'
	| 'entityOnPause'
	| 'entityOnRecycle'
	| 'entityOnReleaseAsset'
	| 'entityOnShow'
	| 'entityOnSpawn'
	| 'entityOnStart'
	| 'entityOnStop'
	| 'entityOnUnpause'
	| 'entityOrientationDidChange'
	| 'entityOrientationOnChange'
	| 'entityOrientationWillChange'
	| 'entityStateDidChange'
	| 'entityStateOnChange'
	| 'entityStateWillChange'
	| 'entityWillBecomeReady'
	| 'entityWillDespawn'
	| 'entityWillGainFocus'
	| 'entityWillHide'
	| 'entityWillHover'
	| 'entityWillInit'
	| 'entityWillInteract'
	| 'entityWillLoad'
	| 'entityWillLoseFocus'
	| 'entityWillMove'
	| 'entityWillPause'
	| 'entityWillRecycle'
	| 'entityWillReleaseAsset'
	| 'entityWillShow'
	| 'entityWillSpawn'
	| 'entityWillStart'
	| 'entityWillStop'
	| 'entityWillUnpause';

/**
 * Invoke the listener registered for a given `EntityPhase` on a delegate (or
 * array of delegates), then recurse into each delegate's children. Each phase
 * fires at most once per delegate per lifecycle — repeat calls for the same
 * phase on the same delegate are skipped.
 *
 * Convenience wrapper around `invokeListeners` that fixes the phase/delegate
 * type parameters to `EntityPhase` / `EntityDelegate<ArgsT>`. Prefer this
 * over calling `invokeListeners` directly when working with entity
 * lifecycles — it keeps phase names and delegate shape type-safe.
 *
 * @param phase    Phase to invoke (e.g. `'entityWillSpawn'`,
 *                 `'entityDidLoad'`). See `EntityPhase` for the full list.
 * @param delegate The `EntityDelegate` (or array of delegates) whose
 *                 listener for `phase` should fire. Children are visited
 *                 recursively.
 * @param base     Optional logger satisfying `LogLike`. When omitted,
 *                 internal diagnostic messages are silently dropped.
 * @returns `true` only when every target delegate's main listener exists,
 *          executed without throwing, and returned `true`. `false` if any
 *          delegate is missing the listener, the listener throws or returns
 *          non-`true`, the phase was already fired (skipped), or the input
 *          is empty/invalid. Child-listener results do not affect the
 *          returned value.
 *
 * @category Entities
 */
export async function entityPhase<ArgsT = unknown>(
	phase: EntityPhase,
	delegate: EntityDelegate<ArgsT> | EntityDelegate<ArgsT>[],
	base?: LogLike
): Promise<boolean> {
	return invokeListeners<EntityPhase, EntityDelegate<ArgsT>>({
		phase: phase,
		delegate: delegate,
		base: base
	});
}
