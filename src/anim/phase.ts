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
import {invokeListeners} from '../invoke/listeners';
import {type AnimDelegate} from './delegate';

/**
 * Phase names used in the animation (sprite / skeletal clip) lifecycle flow.
 *
 * Most phases come in `Will` / `On` / `Did` triplets around an action verb:
 *
 * - `Will*` — fires immediately before the action. Last chance to prepare,
 *   gate, or short-circuit (e.g. swap the clip, seed a blend weight).
 * - `On*` — fires as the action occurs (the synchronous moment of the
 *   transition itself).
 * - `Did*` — fires immediately after the action. Use for cleanup,
 *   post-conditions, and downstream notifications.
 *
 * Exceptions: `animOnError` and `animOnMissing` are reactive only — they have
 * no `Will` or `Did` form because the condition arrives without notice, so
 * there is no point before it at which a listener could prepare, and no
 * "after" state distinct from the report itself.
 *
 * @category Animations
 */
export type AnimPhase =
	/** Animation finished cancelling — playback was stopped before reaching its end. `animDidFinish` does not fire for a cancelled clip. */
	| 'animDidCancel'
	/** Animation finished running to its natural end — the final frame has been presented. Hook for chaining the next clip or returning to an idle pose. */
	| 'animDidFinish'
	/** Animation finished gaining focus — it is now the active clip driving the target's pose. */
	| 'animDidGainFocus'
	/** Animation finished losing focus — another clip now drives the target, or the target has no active clip. */
	| 'animDidLoseFocus'
	/** Animation finished starting — the first frame has been presented and playback is advancing. */
	| 'animDidStart'
	/** Animation is cancelled in this synchronous moment — playback halts mid-clip. */
	| 'animOnCancel'
	/** Animation failed (bad clip data, unresolvable bone/track binding, decode failure). Reactive only — there is no `Will` or `Did` form because the failure arrives without notice. Listeners should fall back to a safe pose and surface diagnostics. */
	| 'animOnError'
	/** Animation reaches its natural end in this synchronous moment. */
	| 'animOnFinish'
	/** Animation becomes the active clip in this synchronous moment. */
	| 'animOnGainFocus'
	/** Animation stops being the active clip in this synchronous moment. */
	| 'animOnLoseFocus'
	/** A requested animation could not be resolved — no clip is registered under the requested name/id. Reactive only — there is no `Will` or `Did` form because the miss is only discovered at lookup time. Distinct from `animOnError`: the clip is absent, not broken. */
	| 'animOnMissing'
	/** Animation begins playing in this synchronous moment — the playhead is placed at the start frame. */
	| 'animOnStart'
	/** Animation is about to be cancelled. Last chance to capture the current playhead / pose before it is abandoned. */
	| 'animWillCancel'
	/** Animation is about to reach its natural end. Hook for queueing the follow-on clip so the handoff is seamless. */
	| 'animWillFinish'
	/** Animation is about to become the active clip. Hook for configuring blend-in duration and weights. */
	| 'animWillGainFocus'
	/** Animation is about to stop being the active clip. Hook for configuring blend-out, or persisting the pose it ends on. */
	| 'animWillLoseFocus'
	/** Animation is about to begin playing. Last hook for choosing playback rate, loop mode, or start offset. */
	| 'animWillStart';

/**
 *
 * @param delegate
 * @param phase
 *
 * @category Animations
 */
export async function animPhase<ArgsT = unknown>(
	phase: AnimPhase,
	delegate: AnimDelegate<ArgsT> | AnimDelegate<ArgsT>[],
	base?: LogLike
): Promise<boolean> {
	return invokeListeners<AnimPhase, AnimDelegate<ArgsT>>({
		phase: phase,
		delegate: delegate,
		base: base
	});
}
