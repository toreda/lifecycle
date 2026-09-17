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
import {type AssetDelegate} from './delegate';

/**
 * Phase names used in the asset (loadable resource) lifecycle flow.
 *
 * Most phases come in `Will` / `On` / `Did` triplets around an action verb:
 *
 * - `Will*` — fires immediately before the action. Last chance to prepare,
 *   gate, or short-circuit (e.g. pick a source, install a cancellation token).
 * - `On*` — fires as the action occurs (the synchronous moment of the
 *   transition itself).
 * - `Did*` — fires immediately after the action. Use for cleanup,
 *   post-conditions, and downstream notifications.
 *
 * Sub-namespaces — assets have no single flat lifecycle, but three
 * independently-triggerable sub-lifecycles, each with its own start/finish
 * envelope:
 * - `assetLoad*` — fetching and materializing the resource into memory.
 * - `assetUnload*` — releasing it again. An asset may load and unload many
 *   times over its life.
 * - `assetSearch*` — resolving a query/locator to a concrete asset, before
 *   (and independent of) any load.
 *
 * Exception: `assetLoadOnProgress` is a repeating progress signal, not a
 * one-shot transition. It fires many times between `assetLoadOnStart` and
 * `assetLoadOnFinish` as bytes arrive, and so has no `Will` or `Did` form.
 *
 * @category Assets
 */
export type AssetPhase =
	/** Load finished aborting — the in-flight load was cancelled and any partial data discarded. `assetLoadDidFinish` does not fire for an aborted load. */
	| 'assetLoadDidAbort'
	/** Load finished — the asset is fully materialized and safe to reference. */
	| 'assetLoadDidFinish'
	/** Load finished starting — the transfer is now in flight and `assetLoadOnProgress` may begin firing. */
	| 'assetLoadDidStart'
	/** In-flight load is aborted in this synchronous moment (caller cancellation, timeout, or shutdown). No `Will` form: aborts are raised from outside the load, not scheduled by it. */
	| 'assetLoadOnAbort'
	/** Load completes in this synchronous moment — the decoded resource is handed off. */
	| 'assetLoadOnFinish'
	/** Load progress advanced (bytes transferred, items decoded). Repeating signal — fires many times per load, so there is no `Will` or `Did` form. Listeners should be cheap: this may fire per chunk. */
	| 'assetLoadOnProgress'
	/** Load begins in this synchronous moment — the request is issued to the underlying transport. */
	| 'assetLoadOnStart'
	/** Load is about to complete. Last hook for post-processing or validating the payload before consumers see it. */
	| 'assetLoadWillFinish'
	/** Load is about to begin. Hook for choosing the source/variant, installing a cancellation token, or serving a cache hit instead. */
	| 'assetLoadWillStart'
	/** Search finished — results (possibly empty) are available. */
	| 'assetSearchDidFinish'
	/** Search finished starting — the query is now in flight. */
	| 'assetSearchDidStart'
	/** Search completes in this synchronous moment — the result set is assembled. */
	| 'assetSearchOnFinish'
	/** Search begins in this synchronous moment — the locator is resolved against registered sources. */
	| 'assetSearchOnStart'
	/** Search is about to complete. Hook for filtering, ranking, or de-duplicating results before they are returned. */
	| 'assetSearchWillFinish'
	/** Search is about to begin. Hook for rewriting the query, scoping which sources are consulted, or short-circuiting with a cached result. */
	| 'assetSearchWillStart'
	/** Unload finished aborting — the asset remains loaded and referenceable. `assetUnloadDidFinish` does not fire for an aborted unload. */
	| 'assetUnloadDidAbort'
	/** Unload finished — the asset's memory/GPU resources are released. References held by consumers are now stale. */
	| 'assetUnloadDidFinish'
	/** Unload finished starting — teardown is underway; the asset should no longer be treated as usable. */
	| 'assetUnloadDidStart'
	/** In-flight unload is aborted in this synchronous moment — teardown stops and the asset is left intact. */
	| 'assetUnloadOnAbort'
	/** Unload completes in this synchronous moment — the backing resources are freed. */
	| 'assetUnloadOnFinish'
	/** Unload begins in this synchronous moment — the asset is marked unusable and teardown starts. */
	| 'assetUnloadOnStart'
	/** Unload is about to be aborted. Hook for restoring any state already torn down so the asset is left consistent. */
	| 'assetUnloadWillAbort'
	/** Unload is about to complete. Last hook to read the asset before its resources are freed. */
	| 'assetUnloadWillFinish'
	/** Unload is about to begin. Hook for vetoing while references remain outstanding, or for flushing derived caches first. */
	| 'assetUnloadWillStart';

/**
 *
 * @param delegate
 * @param phase
 *
 * @category Assets
 */
export async function assetPhase<ArgsT = unknown>(
	phase: AssetPhase,
	delegate: AssetDelegate<ArgsT> | AssetDelegate<ArgsT>[],
	base?: LogLike
): Promise<boolean> {
	return invokeListeners<AssetPhase, AssetDelegate<ArgsT>>({
		phase: phase,
		delegate: delegate,
		base: base
	});
}
