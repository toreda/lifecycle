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
import {type RequestDelegate} from './delegate';

/**
 * Phase names used in request lifecycle flow. Each non-terminal phase comes
 * in `Will`/`Did` pairs (before/after the action). Terminal phases follow the
 * convention below.
 *
 * Terminal phase semantics (the operation does not progress past these):
 *
 * - `End` — universal final hook. Fires when the request is finished, in any
 *   outcome (success, fail, terminate, timeout, cancel). Use this when you
 *   need to run cleanup regardless of outcome — listeners do not need to
 *   check an error parameter, since the failure-specific phases already fired.
 * - `Succeed` — request completed successfully (e.g. 2xx response fully
 *   processed). Fires before `End`.
 * - `Fail` — request failed during processing (e.g. network error, non-2xx
 *   that the consumer treats as failure). Fires before `End`.
 * - `Terminate` — request was killed early before reaching its natural end
 *   (e.g. forced shutdown, parent context torn down). Fires before `End`.
 * - `Timeout` — deadline elapsed before the request completed. Fires before
 *   `End`.
 * - `Cancel` — `AbortController.abort()` (or equivalent caller-initiated
 *   cancellation). Distinct from `Timeout` (deadline) and `Terminate`
 *   (forceful kill from outside the caller). Fires before `End`.
 * - `Close` — transport / connection closed. Distinct from operation-level
 *   end: a connection can close after multiple keepalive requests, or before
 *   `End` if the peer drops the socket.
 *
 * @category Requests
 */
export type RequestPhase =
	/** Request finished its begin transition — the operation is now active. Pairs with `requestWillBegin`. */
	| 'requestDidBegin'
	/** Request was cancelled by the caller (e.g. `AbortController.abort()`). Distinct from `Timeout` (deadline) and `Terminate` (forceful kill from outside the caller). Fires before `End`. */
	| 'requestDidCancel'
	/** Transport / connection closed. Distinct from `End` (operation-level): a connection can close after multiple keepalive requests, or before `End` if the peer drops the socket. */
	| 'requestDidClose'
	/** TLS handshake completed — secure channel is fully established. */
	| 'requestDidCompleteHandshake'
	/** TCP socket connected to the resolved peer. */
	| 'requestDidConnect'
	/** Universal final hook. Fires when the request is finished, in any outcome (success, fail, terminate, timeout, cancel). Listeners do not need to check an error parameter — failure-specific phases already fired. */
	| 'requestDidEnd'
	/** Request failed during processing (network error, non-2xx treated as failure, etc.). Fires before `End`. */
	| 'requestDidFail'
	/** Response payload was decoded / parsed (e.g. JSON.parse completed). Distinct from `ReceiveBody` which signals raw bytes off the wire. */
	| 'requestDidProcessPayload'
	/** Request finished waiting in queue (connection-pool slot acquired, rate-limit token granted, etc.) and is proceeding. */
	| 'requestDidQueue'
	/** Response body bytes finished arriving off the wire. Distinct from `ProcessPayload` (decode/parse). */
	| 'requestDidReceiveBody'
	/** Response status line and headers have arrived. Hook for auth-refresh on 401, content-type sniffing, content-length budget. Fires before any body bytes are received. */
	| 'requestDidReceiveResponse'
	/** Redirect (3xx) was followed — a sub-request has been or is about to be issued. */
	| 'requestDidRedirect'
	/** DNS resolution completed — the peer's IP is known. */
	| 'requestDidResolveHost'
	/** Retry attempt was issued (the previous attempt failed and policy allowed another). Hook for backoff timers, retry counters, idempotency tokens, circuit-breaker state. */
	| 'requestDidRetry'
	/** Request line, headers, and body bytes finished being written to the socket. Upload is complete. */
	| 'requestDidSend'
	/** TLS handshake started (ClientHello sent). */
	| 'requestDidStartHandshake'
	/** Request completed successfully (e.g. 2xx response fully processed). Fires before `End`. */
	| 'requestDidSucceed'
	/** Request was killed early before reaching its natural end (e.g. forced shutdown, parent context torn down). Distinct from `Cancel` (caller-initiated). Fires before `End`. */
	| 'requestDidTerminate'
	/** Deadline elapsed before the request completed. Fires before `End`. */
	| 'requestDidTimeout'
	/** Request is about to begin. Last hook before any wire activity — set up tracing, capture timestamps, etc. */
	| 'requestWillBegin'
	/** Request is about to be cancelled. Hook for releasing pending resources tied to the in-flight operation. */
	| 'requestWillCancel'
	/** Transport / connection is about to close. */
	| 'requestWillClose'
	/** TLS handshake is about to complete. Rarely useful to consumers; typically observability. */
	| 'requestWillCompleteHandshake'
	/** TCP connection is about to be opened to the resolved peer. */
	| 'requestWillConnect'
	/** Request is about to enter its terminal state. Last hook before all outcome-specific phases (`Succeed`/`Fail`/etc.) and `Did*` cleanup fire. */
	| 'requestWillEnd'
	/** Request is about to be marked as failed. Hook for capturing diagnostic context before failure-handling kicks in. */
	| 'requestWillFail'
	/** Response payload is about to be decoded / parsed. Hook for selecting parser, swapping content type, etc. */
	| 'requestWillProcessPayload'
	/** Request is about to wait in queue (no connection-pool slot or rate-limit token available yet). Hook for queueing metrics. */
	| 'requestWillQueue'
	/** Body byte stream is about to start arriving. Hook for setting up streaming consumers / progress reporters. */
	| 'requestWillReceiveBody'
	/** Response headers are about to be read. Rarely useful to consumers; observability hook. */
	| 'requestWillReceiveResponse'
	/** Redirect is about to be followed. Hook for capping redirect depth or rewriting the target. */
	| 'requestWillRedirect'
	/** DNS resolution is about to begin. */
	| 'requestWillResolveHost'
	/** Retry attempt is about to be issued. Hook for applying backoff delay, jitter, idempotency-key rotation. */
	| 'requestWillRetry'
	/** Request is about to be written to the socket. Hook for upload-progress wiring, content-length validation, body transformation. */
	| 'requestWillSend'
	/** TLS handshake is about to start. */
	| 'requestWillStartHandshake'
	/** Request is about to be marked successful. Rarely overridden; observability hook. */
	| 'requestWillSucceed'
	/** Request is about to be terminated (forceful kill). Hook for last-chance cleanup. */
	| 'requestWillTerminate'
	/** Request is about to be marked as timed out. Hook for capturing the deadline-elapsed context. */
	| 'requestWillTimeout';

/**
 * Invoke the listener registered for a given `RequestPhase` on a delegate (or
 * array of delegates), then recurse into each delegate's children. Each phase
 * fires at most once per delegate per lifecycle — repeat calls for the same
 * phase on the same delegate are skipped.
 *
 * Convenience wrapper around `invokeListeners` that fixes the phase/delegate
 * type parameters to `RequestPhase` / `RequestDelegate<ArgsT>`. Prefer this
 * over calling `invokeListeners` directly when working with request
 * lifecycles — it keeps phase names and delegate shape type-safe.
 *
 * @param phase    Phase to invoke (e.g. `'requestWillSend'`,
 *                 `'requestDidReceiveResponse'`). See `RequestPhase` for the
 *                 full list and terminal-phase semantics.
 * @param delegate The `RequestDelegate` (or array of delegates) whose
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
 * @category Requests
 */
export async function requestPhase<ArgsT = unknown>(
	phase: RequestPhase,
	delegate: RequestDelegate<ArgsT> | RequestDelegate<ArgsT>[],
	base?: LogLike
): Promise<boolean> {
	return invokeListeners<RequestPhase, RequestDelegate<ArgsT>>({
		phase: phase,
		delegate: delegate,
		base: base
	});
}
