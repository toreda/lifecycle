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
import type {ServerDelegate} from './delegate';
import {invokeListeners} from '../invoke/listeners';

/**
 * Identifiers for each phase in the server lifecycle flow.
 *
 * Most phases come in `Will` / `On` / `Did` triplets around an action verb:
 *
 * - `Will*` — fires immediately before the action. Last chance to prepare,
 *   gate, or short-circuit (e.g. rejecting a connection before it is admitted).
 * - `On*` — fires as the action occurs (the synchronous moment of the
 *   transition itself). Use when the listener performs the action rather than
 *   hooking around it.
 * - `Did*` — fires immediately after the action. Use for cleanup,
 *   post-conditions, and downstream notifications.
 *
 * Two sub-surfaces sit alongside the server's own process lifecycle
 * (`Init`, `Load`, `BecomeReady`, `Start`, `Stop`, `Restart`, `Shutdown`):
 *
 * - Client-level phases — `serverWill/On/DidAcceptClient`, `*AddClient`,
 *   `*RemoveClient`. These act on the identified peer (an authenticated,
 *   addressable participant that may outlive any single socket and may be
 *   reached over several connections).
 * - Connection-level phases — `*AcceptConnection`, `*AddConnection`,
 *   `*CloseConnection`, `*DropConnection`, `*RemoveConnection`. These act on
 *   the transport itself (one socket/stream), independent of which client, if
 *   any, it has been associated with.
 *
 * A single inbound socket typically drives the connection phases first
 * (accept, add) and the client phases afterwards, once the peer is identified.
 *
 * @category Server
 */
export type ServerPhase =
	/** Server finished accepting a client — the peer passed admission checks (auth, quota, ban list) and is recognized, though not yet tracked in the client roster. */
	| 'serverDidAcceptClient'
	/** Server finished accepting an inbound connection — the transport was admitted off the listen queue. The peer behind it is not yet identified. */
	| 'serverDidAcceptConnection'
	/** Server finished adding a client to its roster. The client is now tracked, addressable, and visible to lookups and broadcasts. */
	| 'serverDidAddClient'
	/** Server finished adding a connection to its connection table. The transport is now tracked and eligible for read/write scheduling. */
	| 'serverDidAddConnection'
	/** Server finished its become-ready transition — initialized, loaded, listening, and accepting clients. Distinct from `Init` (constructed) and `Load` (config/assets ready). */
	| 'serverDidBecomeReady'
	/** Server finished closing a connection gracefully — pending writes were flushed and the transport was shut down in an orderly fashion. */
	| 'serverDidCloseConnection'
	/** Server finished dropping a connection — an abrupt, server-initiated termination (timeout, protocol violation, overload shedding). Distinct from `CloseConnection`, which is graceful. */
	| 'serverDidDropConnection'
	/** Server finished its one-time initialization. Construction is complete; safe to reference dependencies. No listening socket exists yet. */
	| 'serverDidInit'
	/** Server finished loading its configuration, certificates, routes, and persisted state. Distinct from init: load may be re-run (e.g. on restart). */
	| 'serverDidLoad'
	/** Server finished removing a client from its roster. The client is no longer tracked, addressable, or included in broadcasts. */
	| 'serverDidRemoveClient'
	/** Server finished removing a connection from its connection table. The entry is gone; the transport itself was closed or dropped separately. */
	| 'serverDidRemoveConnection'
	/** Server finished restarting — it stopped and started again in place, re-reading configuration. The process itself was not replaced. */
	| 'serverDidRestart'
	/** Server finished its shutdown sequence — listeners closed, connections terminated, resources released. The process is about to exit. */
	| 'serverDidShutdown'
	/** Server finished starting — the listening socket is bound and inbound connections are being accepted. */
	| 'serverDidStart'
	/** Server finished stopping — it no longer accepts inbound connections. Configuration and in-memory state are preserved (unlike shutdown). */
	| 'serverDidStop'
	/** Server accepts a client in this synchronous moment — the implementation that runs admission checks and recognizes the peer. */
	| 'serverOnAcceptClient'
	/** Server accepts an inbound connection in this synchronous moment — the implementation that takes the transport off the listen queue. */
	| 'serverOnAcceptConnection'
	/** Server adds a client to its roster in this synchronous moment. */
	| 'serverOnAddClient'
	/** Server adds a connection to its connection table in this synchronous moment. */
	| 'serverOnAddConnection'
	/** Server becomes ready in this synchronous moment — the implementation that performs the readiness handoff. */
	| 'serverOnBecomeReady'
	/** Server closes a connection gracefully in this synchronous moment — flushing pending writes and shutting the transport down in order. */
	| 'serverOnCloseConnection'
	/** Server drops a connection in this synchronous moment — the abrupt termination itself, with no flush or graceful exchange. */
	| 'serverOnDropConnection'
	/** Server performs its one-time initialization in this synchronous moment. */
	| 'serverOnInit'
	/** Server loads its configuration / certificates / persisted state in this synchronous moment. */
	| 'serverOnLoad'
	/** Server removes a client from its roster in this synchronous moment. */
	| 'serverOnRemoveClient'
	/** Server removes a connection from its connection table in this synchronous moment. */
	| 'serverOnRemoveConnection'
	/** Server restarts in this synchronous moment — the stop-then-start transition itself. */
	| 'serverOnRestart'
	/** Server runs its shutdown sequence in this synchronous moment. */
	| 'serverOnShutdown'
	/** Server starts in this synchronous moment — the implementation that binds the listening socket and begins accepting. */
	| 'serverOnStart'
	/** Server stops in this synchronous moment — the implementation that ceases accepting inbound connections. State is preserved. */
	| 'serverOnStop'
	/** Server is about to accept a client. The admission gate: listeners may reject the peer here on auth failure, quota, ban list, or capacity. */
	| 'serverWillAcceptClient'
	/** Server is about to accept an inbound connection. Hook for connection-level gating — IP filtering, rate limiting, backpressure — before any peer identity is known. */
	| 'serverWillAcceptConnection'
	/** Server is about to add a client to its roster. Hook for allocating per-client state, session records, and slot reservations. */
	| 'serverWillAddClient'
	/** Server is about to add a connection to its connection table. Hook for allocating per-connection buffers and read/write bookkeeping. */
	| 'serverWillAddConnection'
	/** Server is about to enter its ready state. Last setup window before clients may connect and interact. */
	| 'serverWillBecomeReady'
	/** Server is about to close a connection gracefully. Last chance to send a goodbye frame or flush application-level buffers. */
	| 'serverWillCloseConnection'
	/** Server is about to drop a connection abruptly. Last hook to record the reason for diagnostics; there is no opportunity to flush. */
	| 'serverWillDropConnection'
	/** Server is about to run its one-time initialization. Pre-init hook for dependency injection and transport selection. */
	| 'serverWillInit'
	/** Server is about to load its configuration / certificates / persisted state. Hook for selecting which config profile to load. */
	| 'serverWillLoad'
	/** Server is about to remove a client from its roster. Last hook to persist session state and notify peers of the departure. */
	| 'serverWillRemoveClient'
	/** Server is about to remove a connection from its connection table. Last hook to read per-connection metrics before the entry is released. */
	| 'serverWillRemoveConnection'
	/** Server is about to restart. Hook for deciding what state survives the cycle and warning connected clients. */
	| 'serverWillRestart'
	/** Server is about to shut down. Last hook for draining connections, persisting state, and flushing telemetry. */
	| 'serverWillShutdown'
	/** Server is about to start. Last hook before the listening socket is bound — port/address selection, listener options. */
	| 'serverWillStart'
	/** Server is about to stop accepting inbound connections. Hook for entering drain mode and refusing new work while existing work finishes. */
	| 'serverWillStop';

/**
 *
 * @param delegate
 * @param phase
 *
 * @category Server
 */
export async function serverPhase<ArgsT = unknown>(
	phase: ServerPhase,
	delegate: ServerDelegate<ArgsT> | ServerDelegate<ArgsT>[],
	base?: LogLike
): Promise<boolean> {
	return invokeListeners<ServerPhase, ServerDelegate<ArgsT>>({
		phase: phase,
		delegate: delegate,
		base: base
	});
}
