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
import {type SoundDelegate} from './delegate';
import {invokeListeners} from '../invoke/listeners';

/**
 * Phase names used in the sound lifecycle flow.
 *
 * A sound is a single audio clip instance: it starts, plays to completion or
 * is cancelled early, can be paused and unpaused, reset for replay, and
 * ducked or muted as it gains and loses focus.
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
 * Reactive-only phases:
 * - `soundOnError` and `soundOnMissing` have no `Will` or `Did` form because
 *   they arrive without notice — nothing can be scheduled before them.
 *
 * @category Sounds
 */
export type SoundPhase =
	/** Sound finished being cancelled — playback was stopped before the clip reached its end. Distinct from `Finish`: the clip did not play out. */
	| 'soundDidCancel'
	/** Sound finished playing to its natural end. Distinct from `Cancel`: the whole clip was heard. */
	| 'soundDidFinish'
	/** Sound finished gaining audio focus — it is restored to full volume / priority after being ducked. */
	| 'soundDidGainFocus'
	/** Sound finished losing audio focus — it is now ducked, muted, or deprioritized in favor of another source. */
	| 'soundDidLoseFocus'
	/** Sound finished pausing — playback is halted with the playhead position retained. */
	| 'soundDidPause'
	/** Sound finished resetting — the playhead is back at the start and the clip is ready to play again. */
	| 'soundDidReset'
	/** Sound finished starting — the clip is now audible. */
	| 'soundDidStart'
	/** Sound finished resuming from pause — playback continues from the retained position. */
	| 'soundDidUnpause'
	/** Playback is cancelled in this synchronous moment — the implementation that stops the clip short of its end. */
	| 'soundOnCancel'
	/** Playback failed (decode failure, unsupported format, audio device error). Reactive only — there is no `Will` or `Did` form because the error arrives without notice. Distinct from `soundOnMissing`: the resource exists but could not be played. */
	| 'soundOnError'
	/** The clip reaches its natural end in this synchronous moment. */
	| 'soundOnFinish'
	/** Sound regains audio focus in this synchronous moment — the implementation that unducks / restores volume. */
	| 'soundOnGainFocus'
	/** Sound gives up audio focus in this synchronous moment — the implementation that ducks or mutes it. */
	| 'soundOnLoseFocus'
	/** The requested audio resource could not be found (unregistered key, missing or unreachable file). Reactive only — there is no `Will` or `Did` form because the miss is discovered at request time. Distinct from `soundOnError`: nothing was there to play. */
	| 'soundOnMissing'
	/** Playback is paused in this synchronous moment — the implementation that halts output and retains the playhead. */
	| 'soundOnPause'
	/** Playback begins in this synchronous moment — the implementation that makes the clip audible. */
	| 'soundOnStart'
	/** Playback resumes from the retained position in this synchronous moment. */
	| 'soundOnUnpause'
	/** Sound is about to be cancelled. Hook for starting a fade-out or recording that the clip was cut short. */
	| 'soundWillCancel'
	/** Sound is about to reach its natural end. Hook for queueing a follow-on clip or crossfading. */
	| 'soundWillFinish'
	/** Sound is about to regain audio focus. Hook for choosing the fade-in curve or target volume. */
	| 'soundWillGainFocus'
	/** Sound is about to lose audio focus. Hook for choosing between ducking, muting, and pausing. */
	| 'soundWillLoseFocus'
	/** Sound is about to pause. Hook for capturing the playhead position or starting a short fade-out. */
	| 'soundWillPause'
	/** Sound is about to reset. Hook for releasing per-playback state before the playhead returns to the start. */
	| 'soundWillReset'
	/** Sound is about to start. Last chance to set volume, pitch, loop, or spatial parameters, or to suppress playback entirely. */
	| 'soundWillStart'
	/** Sound is about to resume from pause. Hook for re-acquiring the audio device or setting a fade-in. */
	| 'soundWillUnpause';

/**
 *
 * @param delegate
 * @param phase
 *
 * @category Sounds
 */
export async function soundPhase<ArgsT = unknown>(
	phase: SoundPhase,
	delegate: SoundDelegate<ArgsT> | SoundDelegate<ArgsT>[],
	base?: LogLike
): Promise<boolean> {
	return invokeListeners<SoundPhase, SoundDelegate<ArgsT>>({
		phase: phase,
		delegate: delegate,
		base: base
	});
}
