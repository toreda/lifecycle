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

import type {CnxDelegate} from './delegate';
import {type LogLike} from '../log/like';
import {invokeListeners} from '../invoke/listeners';

/**
 * Phase names used in the connection (cnx) lifecycle flow.
 *
 * Phases come in `Will` / `Did` pairs around an action verb — connections have
 * no `On*` variants. Network transitions are driven by the transport (socket
 * events, timers, remote peers) rather than by a synchronous call the lifecycle
 * owns, so there is no meaningful "moment of the transition" for a listener to
 * occupy. Listeners hook before or after, never the transition itself.
 *
 * - `Will*` — fires immediately before the action. Last chance to prepare,
 *   gate, or short-circuit (e.g. attach auth headers, veto a reconnect).
 * - `Did*` — fires immediately after the action. Use for cleanup,
 *   post-conditions, and downstream notifications.
 *
 * A few phases are reactive-only and have no pair, because the event arrives
 * from the wire without warning.
 *
 * Verb groups:
 * - `Connect` / `Disconnect` — the logical session with the remote peer.
 * - `Open` / `Close` — the underlying transport (socket/stream) itself.
 * - `Handshake` — protocol negotiation performed after open, before ready.
 * - `Reconnect` — a retry cycle after an unexpected loss.
 * - `Ping` / `Pong` — liveness probes and their replies.
 * - `RcvMsg` / `SndMsg` — inbound and outbound application messages.
 * - `Fail*` / `Timeout` — error and deadline outcomes for the above.
 *
 * @category Connections
 */
export type CnxPhase =
	/** Connection finished closing — the underlying transport is released and no further traffic will flow in either direction. */
	| 'cnxDidClose'
	/** Connection is established end-to-end — the transport is open, the handshake succeeded, and the session is usable for application traffic. */
	| 'cnxDidConnect'
	/** Session with the remote peer ended. Distinct from `cnxDidClose`: disconnect is the logical session ending, close is the transport being torn down. */
	| 'cnxDidDisconnect'
	/** Close attempt failed — the transport could not be shut down cleanly (e.g. the socket errored mid-teardown). Local resources may need forced release. */
	| 'cnxDidFailClose'
	/** Connect attempt failed and will not be retried by this attempt. Terminal for the current connect; reconnect phases cover any retry cycle. */
	| 'cnxDidFailConnect'
	/** Protocol handshake failed — the peer rejected it, sent an incompatible response, or the negotiation timed out. The transport may be open but is unusable. */
	| 'cnxDidFailHandshake'
	/** Reconnect attempt failed. Fires per failed retry; the retry policy decides whether another attempt follows. */
	| 'cnxDidFailReconnect'
	/** Protocol handshake completed successfully — version/auth/capability negotiation is done and the connection may carry application traffic. */
	| 'cnxDidHandshake'
	/** Connection object finished its one-time initialization. Construction is complete; safe to reference transport config and dependencies. No socket exists yet. */
	| 'cnxDidInit'
	/** Connection finished loading its configuration — endpoints, credentials, TLS material, retry policy. Distinct from init: load may be re-run. */
	| 'cnxDidLoad'
	/** Underlying transport finished opening — the socket/stream exists and is writable, but the handshake has not necessarily run yet. */
	| 'cnxDidOpen'
	/** A liveness ping was sent to the remote peer. Hook for starting the pong deadline timer / recording round-trip start. */
	| 'cnxDidPing'
	/** A pong reply was received from the remote peer. Confirms liveness; hook for recording round-trip time and clearing the pong deadline. */
	| 'cnxDidPong'
	/** An inbound message finished being received and is available to the application. Reactive-only — inbound traffic arrives without notice, so there is no `Will` form. */
	| 'cnxDidRcvMsg'
	/** Reconnect succeeded — the session is restored. Hook for replaying queued sends, resubscribing, and reconciling state missed while down. */
	| 'cnxDidReconnect'
	/** Connection finished resetting — buffers, sequence numbers, and per-session state are cleared back to their post-init values. */
	| 'cnxDidReset'
	/** An outbound message finished being handed to the transport. Delivery to the peer is not implied — only that the local send completed. */
	| 'cnxDidSndMsg'
	/** The connect attempt is now in flight — the dial has been issued and the connection is awaiting a result. Paired with `cnxDidStopConnect`. */
	| 'cnxDidStartConnect'
	/** The connect attempt is no longer in flight. Universal terminal hook for a connect; outcome-specific phases (`cnxDidConnect`, `cnxDidFailConnect`) convey the result. */
	| 'cnxDidStopConnect'
	/** The handshake exchange is no longer in flight. Universal terminal hook; `cnxDidHandshake` / `cnxDidFailHandshake` convey the outcome. */
	| 'cnxDidStopHandshake'
	/** The reconnect cycle has ended — no further retries will be attempted, whether it succeeded or exhausted its policy. */
	| 'cnxDidStopReconnect'
	/** A connection deadline elapsed (connect, handshake, pong, or idle timeout, per implementation). The connection is presumed dead and teardown or reconnect follows. */
	| 'cnxDidTimeout'
	/** Transport is about to be closed. Last chance to flush pending writes, send a protocol goodbye frame, or persist session state. */
	| 'cnxWillClose'
	/** Connection is about to be established. Hook for resolving endpoints, injecting credentials, or gating the attempt on network availability. */
	| 'cnxWillConnect'
	/** Session with the remote peer is about to end. Hook for notifying the peer and quiescing application traffic before teardown. */
	| 'cnxWillDisconnect'
	/** Connect attempt is about to be marked failed. Last hook to inspect the error and decide whether a reconnect cycle should follow. */
	| 'cnxWillFailConnect'
	/** Reconnect attempt is about to be marked failed. Hook for backoff bookkeeping and retry-budget decisions. */
	| 'cnxWillFailReconnect'
	/** Protocol handshake is about to be performed. Hook for supplying the client hello — protocol version, auth token, requested capabilities. */
	| 'cnxWillHandshake'
	/** Connection is about to run its one-time initialization. Pre-init hook for dependency injection / transport selection. */
	| 'cnxWillInit'
	/** Connection is about to load its configuration. Hook for choosing which endpoint profile or credential set to load. */
	| 'cnxWillLoad'
	/** Underlying transport is about to be opened. Hook for final socket options — TLS settings, timeouts, buffer sizes — before the socket exists. */
	| 'cnxWillOpen'
	/** Reconnect is about to be attempted. Hook for applying backoff delay, refreshing expired credentials, or vetoing the retry. */
	| 'cnxWillReconnect'
	/** Connection is about to be reset. Last hook to drain or capture in-flight state before buffers and counters are cleared. */
	| 'cnxWillReset'
	/** Connect attempt is about to be put in flight. Hook for recording attempt start time and arming the connect deadline. */
	| 'cnxWillStartConnect'
	/** Handshake exchange is about to be put in flight. Hook for arming the handshake deadline. */
	| 'cnxWillStartHandshake'
	/** Reconnect cycle is about to begin. Fires once for the cycle, not per attempt; hook for resetting the retry counter and queueing outbound work. */
	| 'cnxWillStartReconnect'
	/** Connect attempt is about to leave the in-flight state. Last hook before the outcome phases fire. */
	| 'cnxWillStopConnect'
	/** Handshake exchange is about to leave the in-flight state. Last hook before the handshake outcome is settled. */
	| 'cnxWillStopHandshake'
	/** Reconnect cycle is about to end. Last hook to extend the retry policy or fail over to an alternate endpoint. */
	| 'cnxWillStopReconnect'
	/** A connection deadline is about to be declared elapsed. Last chance to extend the deadline when work is demonstrably still progressing. */
	| 'cnxWillTimeout';

/**
 *
 * @param delegate
 * @param phase
 *
 * @category Connections
 */
export async function cnxPhase<ArgsT = unknown>(
	phase: CnxPhase,
	delegate: CnxDelegate<ArgsT> | CnxDelegate<ArgsT>[],
	base?: LogLike
): Promise<boolean> {
	return invokeListeners<CnxPhase, CnxDelegate<ArgsT>>({phase: phase, delegate: delegate, base: base});
}
