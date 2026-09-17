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

import {type LogLike} from '../log/like';
import type {SceneDelegate} from './delegate';
import {invokeListeners} from '../invoke/listeners';

/**
 * Unique scene-related phase IDs.
 *
 * A scene is a self-contained slice of a game — a level, menu, or screen —
 * that loads its content, is shown or hidden, gains or loses focus while
 * other scenes are stacked over it, and can be reset and replayed without
 * being re-initialized.
 *
 * Most phases come in `Will` / `On` / `Did` triplets around an action verb:
 *
 * - `Will*` — fires immediately before the action. Last chance to prepare,
 *   gate, or short-circuit.
 * - `On*` — fires as the action occurs (the synchronous moment of the
 *   transition itself).
 * - `Did*` — fires immediately after the action. Use for cleanup,
 *   post-conditions, downstream notifications.
 *
 * @category Scenes
 */
export type ScenePhase =
	/** Scene finished its become-ready transition — initialized, loaded, and eligible to be shown. Distinct from `Init` (constructed) and `Load` (assets resident). */
	| 'sceneDidBecomeReady'
	/** Scene finished gaining focus — it is now the active scene receiving input and driving the update loop. */
	| 'sceneDidGainFocus'
	/** Scene finished hiding — it is no longer rendered but remains loaded in memory. */
	| 'sceneDidHide'
	/** Scene finished its one-time initialization. Construction is complete; safe to reference dependencies. */
	| 'sceneDidInit'
	/** Scene finished loading its assets, entities, and world data. Distinct from init: load may be re-run, init runs once. */
	| 'sceneDidLoad'
	/** Scene finished losing focus — another scene is now active. It may still render (e.g. behind a pause overlay). */
	| 'sceneDidLoseFocus'
	/** Scene finished pausing — its simulation, timers, and animations are halted. */
	| 'sceneDidPause'
	/** Scene finished resetting — entities and scene state are back to their initial values without a reload or re-init. */
	| 'sceneDidReset'
	/** Scene finished becoming visible — it is now being rendered. */
	| 'sceneDidShow'
	/** Scene finished starting — its update loop and gameplay are running. */
	| 'sceneDidStart'
	/** Scene finished stopping. Loaded assets are retained (unlike an unload), so it can be started again. */
	| 'sceneDidStop'
	/** Scene finished resuming from a paused state. */
	| 'sceneDidUnpause'
	/** Scene becomes ready in this synchronous moment — the implementation that performs the readiness handoff. */
	| 'sceneOnBecomeReady'
	/** Scene gains focus in this synchronous moment — the implementation that hands it input and update control. */
	| 'sceneOnGainFocus'
	/** Scene hides in this synchronous moment — the implementation that removes it from the render pass. */
	| 'sceneOnHide'
	/** Scene performs its one-time initialization in this synchronous moment. */
	| 'sceneOnInit'
	/** Scene loads its assets, entities, and world data in this synchronous moment. */
	| 'sceneOnLoad'
	/** Scene gives up focus in this synchronous moment. */
	| 'sceneOnLoseFocus'
	/** Scene pauses in this synchronous moment — the implementation that halts simulation and timers. */
	| 'sceneOnPause'
	/** Scene restores its entities and state to initial values in this synchronous moment. */
	| 'sceneOnReset'
	/** Scene becomes visible in this synchronous moment — the implementation that adds it to the render pass. */
	| 'sceneOnShow'
	/** Scene starts its update loop in this synchronous moment. */
	| 'sceneOnStart'
	/** Scene stops its update loop in this synchronous moment. Loaded assets are retained. */
	| 'sceneOnStop'
	/** Scene resumes from pause in this synchronous moment. */
	| 'sceneOnUnpause'
	/** Scene is about to enter its ready state. Last hook before the scene manager may show or start it. */
	| 'sceneWillBecomeReady'
	/** Scene is about to gain focus. Hook for rebinding input handlers and resuming per-scene audio. */
	| 'sceneWillGainFocus'
	/** Scene is about to hide. Hook for starting an exit transition or releasing render targets. */
	| 'sceneWillHide'
	/** Scene is about to run its one-time initialization. Pre-init hook for dependency injection / config. */
	| 'sceneWillInit'
	/** Scene is about to load its assets and world data. Hook for showing a loading screen or setting up progress reporting. */
	| 'sceneWillLoad'
	/** Scene is about to lose focus. Hook for releasing input handlers and persisting in-progress player state. */
	| 'sceneWillLoseFocus'
	/** Scene is about to pause. Hook for snapshotting transient simulation state. */
	| 'sceneWillPause'
	/** Scene is about to reset. Hook for capturing results of the finished run (score, stats) before state is cleared. */
	| 'sceneWillReset'
	/** Scene is about to become visible. Hook for priming render state so the first rendered frame is correct. */
	| 'sceneWillShow'
	/** Scene is about to start. Last hook before gameplay begins. */
	| 'sceneWillStart'
	/** Scene is about to stop. Hook for persisting progress; loaded assets are retained. */
	| 'sceneWillStop'
	/** Scene is about to resume from pause. Hook for restoring timers and re-acquiring resources released on pause. */
	| 'sceneWillUnpause';

/**
 * @param delegate
 * @param phase
 *
 * @category Scenes
 */
export async function scenePhase<ArgsT = unknown>(
	phase: ScenePhase,
	delegate: SceneDelegate<ArgsT> | SceneDelegate<ArgsT>[],
	base?: LogLike
): Promise<boolean> {
	return invokeListeners<ScenePhase, SceneDelegate<ArgsT>>({
		phase: phase,
		base: base,
		delegate: delegate
	});
}
