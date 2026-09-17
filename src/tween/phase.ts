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
import {type TweenDelegate} from './delegate';
import {invokeListeners} from '../invoke/listeners';

/**
 * Iterable collection of `TweenDelegate` phases.
 *
 * Phase names used in the tween (value interpolation) lifecycle flow. Every
 * phase comes in a `Will` / `On` / `Did` triplet around an action verb:
 *
 * - `Will*` — fires immediately before the action. Last chance to prepare,
 *   gate, or short-circuit (e.g. adjust duration, swap the easing curve).
 * - `On*` — fires as the action occurs (the synchronous moment of the
 *   transition itself).
 * - `Did*` — fires immediately after the action. Use for cleanup,
 *   post-conditions, and downstream notifications such as chaining the next
 *   tween.
 *
 * `Cancel`, `Finish`, `Reset` and `Replay` are distinct outcomes: cancelling
 * stops early and leaves the value wherever it landed; finishing reaches the
 * end value; resetting returns to the start value without playing; replaying
 * runs the same interpolation again from the start.
 *
 * @category Tweens
 */
export type TweenPhase =
	/** Tween finished cancelling — interpolation stopped early and the value is left at its partway position. `tweenDidFinish` does not fire for a cancelled tween. */
	| 'tweenDidCancel'
	/** Tween finished — the interpolated value has reached its end value exactly. Hook for chaining the next tween in a sequence. */
	| 'tweenDidFinish'
	/** Tween finished restarting — a fresh run is underway from the start value. */
	| 'tweenDidReplay'
	/** Tween finished resetting — the value is back at its start and the tween is idle, not playing. */
	| 'tweenDidReset'
	/** Tween finished starting — the value is at its start position and interpolation is advancing. */
	| 'tweenDidStart'
	/** Tween is cancelled in this synchronous moment — interpolation halts partway and the value stays where it is. */
	| 'tweenOnCancel'
	/** Tween reaches its end value in this synchronous moment. */
	| 'tweenOnFinish'
	/** Tween restarts in this synchronous moment — elapsed time is rewound and interpolation resumes from the start. */
	| 'tweenOnReplay'
	/** Tween is reset in this synchronous moment — elapsed time is cleared and the value snaps back to the start. */
	| 'tweenOnReset'
	/** Tween begins in this synchronous moment — elapsed time starts accumulating against the duration. */
	| 'tweenOnStart'
	/** Tween is about to be cancelled. Last chance to read the partway value, or to snap it to a stable resting point. */
	| 'tweenWillCancel'
	/** Tween is about to reach its end value. Hook for queueing the follow-on tween so the handoff has no visible gap. */
	| 'tweenWillFinish'
	/** Tween is about to replay. Hook for varying the next run — new easing, duration, or reversed direction for a ping-pong. */
	| 'tweenWillReplay'
	/** Tween is about to be reset. Hook for capturing the current value before it snaps back to the start. */
	| 'tweenWillReset'
	/** Tween is about to begin. Last hook for setting start/end values, duration, easing, or delay. */
	| 'tweenWillStart';

/**
 *
 * @param delegate
 * @param phase
 *
 * @category Tweens
 */
export async function tweenPhase<ArgsT = unknown>(
	phase: TweenPhase,
	delegate: TweenDelegate<ArgsT> | TweenDelegate<ArgsT>[],
	base?: LogLike
): Promise<boolean> {
	return invokeListeners<TweenPhase, TweenDelegate<ArgsT>>({
		phase: phase,
		delegate: delegate,
		base: base
	});
}
