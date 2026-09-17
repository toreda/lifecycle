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
 * Most phases come in `Will` / `On` / `Did` triplets around an action verb:
 *
 * - `Will*` — fires immediately before the action. Last chance to prepare,
 *   gate, or short-circuit. Listener side effects observed here precede the
 *   action.
 * - `On*` — fires as the action occurs (the synchronous moment of the
 *   transition itself). Use when the listener represents the action rather
 *   than a hook around it.
 * - `Did*` — fires immediately after the action. Use for cleanup,
 *   post-conditions, and downstream notifications.
 *
 * @category Entities
 */
export type EntityPhase =
	/** Entity finished its become-ready transition and is now ready to participate in the world. */
	| 'entityDidBecomeReady'
	/** Entity finished despawning — it has been removed from the world. Resources may still be held; see `entityDidRecycle` / `entityDidReleaseAsset` for full teardown signals. */
	| 'entityDidDespawn'
	/** Entity finished receiving input focus. */
	| 'entityDidGainFocus'
	/** Entity finished hiding — it is no longer visible to the user/camera but still exists. */
	| 'entityDidHide'
	/** Entity finished entering its hover state (pointer/cursor over it, or equivalent). */
	| 'entityDidHover'
	/** Entity finished its one-time initialization. Construction is complete; safe to reference dependencies. */
	| 'entityDidInit'
	/** Entity finished handling an interaction (click, tap, activation). */
	| 'entityDidInteract'
	/** Entity finished loading its assets / data. Distinct from init: load may be re-run, init runs once. */
	| 'entityDidLoad'
	/** Entity finished giving up input focus. */
	| 'entityDidLoseFocus'
	/** Entity finished a position/transform move. Hook for spatial-index updates, collider sync, etc. */
	| 'entityDidMove'
	/** Entity finished pausing — its update loop / animations are halted. */
	| 'entityDidPause'
	/** Entity finished returning to a pool for reuse. State has been cleared per the recycle contract. */
	| 'entityDidRecycle'
	/** Entity finished releasing one or more held assets back to the asset manager / cache. */
	| 'entityDidReleaseAsset'
	/** Entity finished becoming visible after being hidden. */
	| 'entityDidShow'
	/** Entity finished spawning — it is now placed in the world. Initialization is assumed complete by this point. */
	| 'entityDidSpawn'
	/** Entity finished starting its active behavior (post-init, post-load). */
	| 'entityDidStart'
	/** Entity finished stopping its active behavior. State is preserved (unlike despawn/recycle). */
	| 'entityDidStop'
	/** Entity finished resuming from a paused state. */
	| 'entityDidUnpause'
	/** The entity becomes ready in this synchronous moment. Use when the listener performs the readiness handoff. */
	| 'entityOnBecomeReady'
	/** The entity despawns in this synchronous moment. */
	| 'entityOnDespawn'
	/** The entity gains input focus in this synchronous moment. */
	| 'entityOnGainFocus'
	/** The entity hides in this synchronous moment. */
	| 'entityOnHide'
	/** The entity enters its hover state in this synchronous moment. */
	| 'entityOnHover'
	/** The entity performs its one-time initialization in this synchronous moment. */
	| 'entityOnInit'
	/** An interaction event fires on the entity (click, tap, activation). */
	| 'entityOnInteract'
	/** The entity loads its assets / data in this synchronous moment. */
	| 'entityOnLoad'
	/** The entity gives up input focus in this synchronous moment. */
	| 'entityOnLoseFocus'
	/** OS / runtime is signaling memory pressure. Reactive only — there is no `Will` or `Did` form because the warning arrives without notice. Listeners should free non-essential caches/textures/buffers. */
	| 'entityOnMemoryWarning'
	/** The entity moves (position/transform changes) in this synchronous moment. */
	| 'entityOnMove'
	/** The entity pauses in this synchronous moment. */
	| 'entityOnPause'
	/** The entity is returned to a pool for reuse in this synchronous moment. Implementer is expected to clear per-instance state here. */
	| 'entityOnRecycle'
	/** The entity releases one or more assets in this synchronous moment. */
	| 'entityOnReleaseAsset'
	/** The entity becomes visible in this synchronous moment. */
	| 'entityOnShow'
	/** The entity spawns into the world in this synchronous moment. */
	| 'entityOnSpawn'
	/** The entity starts its active behavior in this synchronous moment. */
	| 'entityOnStart'
	/** The entity stops its active behavior in this synchronous moment. */
	| 'entityOnStop'
	/** The entity resumes from pause in this synchronous moment. */
	| 'entityOnUnpause'
	/** Entity finished an orientation change (e.g. device rotation, camera relative-up flip). */
	| 'entityOrientationDidChange'
	/** Orientation changes in this synchronous moment. */
	| 'entityOrientationOnChange'
	/** Entity is about to undergo an orientation change. Last chance to capture pre-change spatial state. */
	| 'entityOrientationWillChange'
	/** Entity finished a state-machine transition. Hook for triggering follow-on transitions, animations, etc. */
	| 'entityStateDidChange'
	/** State-machine transition occurs in this synchronous moment. */
	| 'entityStateOnChange'
	/** Entity is about to transition state. Listeners may inspect from/to to gate or annotate the transition. */
	| 'entityStateWillChange'
	/** Entity is about to enter its ready state. Last setup window before downstream consumers may interact. */
	| 'entityWillBecomeReady'
	/** Entity is about to despawn. Last chance to persist state, notify subscribers, etc. */
	| 'entityWillDespawn'
	/** Entity is about to gain input focus. */
	| 'entityWillGainFocus'
	/** Entity is about to hide. */
	| 'entityWillHide'
	/** Entity is about to enter its hover state. */
	| 'entityWillHover'
	/** Entity is about to run its one-time initialization. Pre-init hook for dependency injection / config. */
	| 'entityWillInit'
	/** Entity is about to handle an interaction. Hook for input gating / accessibility checks. */
	| 'entityWillInteract'
	/** Entity is about to load its assets / data. Hook for setting up progress reporting, cancellation tokens, etc. */
	| 'entityWillLoad'
	/** Entity is about to give up input focus. */
	| 'entityWillLoseFocus'
	/** Entity is about to move (position/transform change). Hook for predictive/optimistic updates. */
	| 'entityWillMove'
	/** Entity is about to pause. Hook for snapshotting transient state. */
	| 'entityWillPause'
	/** Entity is about to be returned to a pool for reuse. Last hook to release per-instance bindings. */
	| 'entityWillRecycle'
	/** Entity is about to release one or more held assets. Hook for ensuring no live refs remain. */
	| 'entityWillReleaseAsset'
	/** Entity is about to become visible. */
	| 'entityWillShow'
	/** Entity is about to spawn into the world. Pre-spawn hook for placement validation, collision pre-checks, etc. */
	| 'entityWillSpawn'
	/** Entity is about to start its active behavior. */
	| 'entityWillStart'
	/** Entity is about to stop its active behavior. State is preserved. */
	| 'entityWillStop'
	/** Entity is about to resume from a paused state. */
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
