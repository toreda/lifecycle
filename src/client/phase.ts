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

import type {ClientDelegate} from './delegate';
import {type LogLike} from '../log/like';
import {invokeListeners} from '../invoke/listeners';

/**
 * Phase names used in the client (application) lifecycle flow.
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
 * @category Clients
 */
export type ClientPhase =
	/** Client finished its become-ready transition — fully initialized, loaded, and accepting work. Distinct from `Init` (constructed) and `Load` (assets ready). */
	| 'clientDidBecomeReady'
	/** Client window/process finished gaining input focus. */
	| 'clientDidGainFocus'
	/** Client finished its one-time initialization. Construction is complete; safe to reference dependencies. */
	| 'clientDidInit'
	/** Client finished loading its assets / configuration / persisted state. */
	| 'clientDidLoad'
	/** Client window/process finished giving up input focus. */
	| 'clientDidLoseFocus'
	/** Client finished pausing — its update / render / IO loops are halted. */
	| 'clientDidPause'
	/** Client finished its shutdown sequence — process is about to exit (or has detached cleanly). */
	| 'clientDidShutdown'
	/** Client finished starting its main loop / active behavior. */
	| 'clientDidStart'
	/** Client finished stopping its main loop. State is preserved (unlike shutdown). */
	| 'clientDidStop'
	/** Client finished resuming from pause. */
	| 'clientDidUnpause'
	/** Client becomes ready in this synchronous moment. The implementation that does the readiness work; `clientWillBecomeReady` and `clientDidBecomeReady` are the surrounding hooks. */
	| 'clientOnBecomeReady'
	/** Client gains input focus in this synchronous moment. */
	| 'clientOnGainFocus'
	/** Client performs its one-time initialization in this synchronous moment. */
	| 'clientOnInit'
	/** Client loads its assets / config in this synchronous moment. */
	| 'clientOnLoad'
	/** Client gives up input focus in this synchronous moment. */
	| 'clientOnLoseFocus'
	/** OS / runtime is signaling memory pressure. Reactive only — there is no `Will` or `Did` form because the warning arrives without notice. Listeners should free non-essential caches/textures/buffers. */
	| 'clientOnMemoryWarning'
	/** Client runs its shutdown sequence in this synchronous moment. */
	| 'clientOnShutdown'
	/** Client starts its main loop in this synchronous moment. */
	| 'clientOnStart'
	/** Client is about to enter its ready state. Last hook before downstream consumers may interact (e.g. UI accepting input, network handlers active). */
	| 'clientWillBecomeReady'
	/** Client window/process is about to gain input focus. */
	| 'clientWillGainFocus'
	/** Client is about to run its one-time initialization. Pre-init hook for dependency injection / config loading. */
	| 'clientWillInit'
	/** Client is about to load its assets / config / persisted state. Hook for picking which load profile to use. */
	| 'clientWillLoad'
	/** Client window/process is about to give up input focus. */
	| 'clientWillLoseFocus'
	/** Client is about to pause. Hook for snapshotting transient state, suspending background work. */
	| 'clientWillPause'
	/** Client is about to shut down. Last hook for flushing buffers, persisting state, sending telemetry. */
	| 'clientWillShutdown'
	/** Client is about to start its main loop / active behavior. */
	| 'clientWillStart'
	/** Client is about to stop its main loop. State is preserved (unlike shutdown). */
	| 'clientWillStop';

/**
 *
 * @param delegate
 * @param phase
 *
 * @category Clients
 */
export async function clientPhase<ArgsT = unknown>(
	phase: ClientPhase,
	delegate: ClientDelegate<ArgsT> | ClientDelegate<ArgsT>[],
	base?: LogLike
): Promise<boolean> {
	return invokeListeners<ClientPhase, ClientDelegate<ArgsT>>({
		phase: phase,
		delegate: delegate,
		base: base
	});
}
