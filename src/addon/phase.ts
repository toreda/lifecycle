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
import type {AddonDelegate} from './delegate';
import {type LogLike} from '../log/like';
import {invokeListeners} from '../invoke/listeners';

/**
 * Expressive type describing phase names used in client lifecycle flow.
 *
 * An addon is a pluggable module the host loads alongside the application: it
 * fetches and parses its own manifest, pulls the assets that manifest names,
 * spawns instances, and runs a standard init / load / start / stop lifecycle.
 *
 * Most phases come in `Will` / `On` / `Did` triplets around an action verb:
 *
 * - `Will*` — fires immediately before the action. Last chance to prepare,
 *   gate, or short-circuit. Listener side effects observed here precede the
 *   action.
 * - `On*` — fires as the action occurs (the synchronous moment of the
 *   transition itself). Use when the listener performs the action rather
 *   than hooking around it.
 * - `Did*` — fires immediately after the action. Use for cleanup,
 *   post-conditions, and downstream notifications.
 *
 * Sub-namespaces:
 * - `addonCache*` — the addon's residency in the host's addon cache. `Enter`
 *   fires when a loaded-but-idle addon is parked in the cache for fast
 *   re-activation; `Leave` fires when it is pulled back out (reactivated) or
 *   evicted. Distinct from the main lifecycle: a cached addon stays
 *   constructed and loaded, it simply is not active.
 * - `addonInstance*` — phases scoped to a single instance the addon produces,
 *   rather than to the addon itself. The addon may spawn many instances over
 *   its lifetime; these fire once per spawn.
 *
 * `addonOnMemoryWarning` is the one reactive-only phase — it has no `Will` or
 * `Did` form because the warning arrives without notice.
 *
 * @category Addons
 */
export type AddonPhase =
	/** Addon finished entering the host's addon cache — it remains constructed and loaded but is parked and inactive, ready for fast re-activation. */
	| 'addonCacheDidEnter'
	/** Addon finished leaving the addon cache, either reactivated or evicted. Cache-scoped resources have been reclaimed. */
	| 'addonCacheDidLeave'
	/** Addon enters the cache in this synchronous moment — the implementation that parks it and releases active-only resources. */
	| 'addonCacheOnEnter'
	/** Addon leaves the cache in this synchronous moment. */
	| 'addonCacheOnLeave'
	/** Addon is about to enter the cache. Hook for trimming memory to what is worth keeping while parked. */
	| 'addonCacheWillEnter'
	/** Addon is about to leave the cache. Hook for deciding between reactivation and eviction, or for re-acquiring resources dropped on entry. */
	| 'addonCacheWillLeave'
	/** Addon finished its become-ready transition — initialized, loaded, and accepting work from the host. Distinct from `Init` (constructed) and `Load` (manifest and assets resolved). */
	| 'addonDidBecomeReady'
	/** Addon config finished changing. Hook for re-deriving cached values and re-validating dependencies against the new config. */
	| 'addonDidChangeCfg'
	/** Addon state-machine value finished transitioning. Hook for triggering follow-on transitions or notifying the host. */
	| 'addonDidChangeState'
	/** Addon finished fetching an asset named by its manifest. The asset bytes are now resolved and available. */
	| 'addonDidFetchAsset'
	/** Addon finished fetching its manifest. Raw manifest content is in hand but not yet parsed. */
	| 'addonDidFetchManifest'
	/** Addon finished gaining focus — it is now the active addon and receives routed input/events. */
	| 'addonDidGainFocus'
	/** Addon finished its one-time initialization. Construction is complete; safe to reference dependencies. */
	| 'addonDidInit'
	/** Addon finished loading — manifest applied and declared assets resolved. Distinct from init: load may be re-run, init runs once. */
	| 'addonDidLoad'
	/** Addon finished applying its parsed manifest — declared assets, permissions, and settings are now reflected in addon state. */
	| 'addonDidLoadManifest'
	/** Addon finished giving up focus — routed input/events now go elsewhere. */
	| 'addonDidLoseFocus'
	/** Addon finished parsing its fetched manifest into a structured form. Validation errors, if any, have already surfaced. */
	| 'addonDidParseManifest'
	/** Addon finished pausing — its update loop and background work are halted, state preserved. */
	| 'addonDidPause'
	/** Addon finished restarting — it was stopped and started again in place, without being unloaded or reconstructed. */
	| 'addonDidRestart'
	/** Addon finished its shutdown sequence — unloaded and torn down; the host may now drop its reference. */
	| 'addonDidShutdown'
	/** Addon finished starting its active behavior (post-init, post-load). */
	| 'addonDidStart'
	/** Addon finished stopping its active behavior. State is preserved (unlike shutdown). */
	| 'addonDidStop'
	/** Addon finished resuming from pause. */
	| 'addonDidUnpause'
	/** Addon finished spawning an instance. The new instance exists and has been handed to the caller. */
	| 'addonInstanceDidSpawn'
	/** An addon instance is constructed in this synchronous moment. Use when the listener is the factory that builds it. */
	| 'addonInstanceOnSpawn'
	/** Addon is about to spawn an instance. Hook for validating spawn arguments, applying quotas, or vetoing the spawn. */
	| 'addonInstanceWillSpawn'
	/** Addon becomes ready in this synchronous moment. Use when the listener performs the readiness handoff itself. */
	| 'addonOnBecomeReady'
	/** Addon config changes in this synchronous moment — the implementation that applies the new config. */
	| 'addonOnChangeCfg'
	/** Addon state-machine transition occurs in this synchronous moment. */
	| 'addonOnChangeState'
	/** Addon fetches an asset in this synchronous moment. Use when the listener supplies the asset (e.g. a custom transport or CDN resolver). */
	| 'addonOnFetchAsset'
	/** Addon fetches its manifest in this synchronous moment. Use when the listener supplies the manifest bytes. */
	| 'addonOnFetchManifest'
	/** Addon gains focus in this synchronous moment. */
	| 'addonOnGainFocus'
	/** Addon performs its one-time initialization in this synchronous moment. */
	| 'addonOnInit'
	/** Addon runs its load sequence in this synchronous moment. */
	| 'addonOnLoad'
	/** Addon applies its parsed manifest in this synchronous moment. */
	| 'addonOnLoadManifest'
	/** Addon gives up focus in this synchronous moment. */
	| 'addonOnLoseFocus'
	/** OS / runtime is signaling memory pressure. Reactive only — there is no `Will` or `Did` form because the warning arrives without notice. Listeners should free non-essential caches/textures/buffers. */
	| 'addonOnMemoryWarning'
	/** Addon parses its manifest in this synchronous moment. Use when the listener implements the manifest format (e.g. a custom schema or version). */
	| 'addonOnParseManifest'
	/** Addon pauses in this synchronous moment — the implementation that halts its update loop and background work. */
	| 'addonOnPause'
	/** Addon restarts in this synchronous moment — the stop-then-start performed as one operation. */
	| 'addonOnRestart'
	/** Addon runs its shutdown sequence in this synchronous moment. */
	| 'addonOnShutdown'
	/** Addon starts its active behavior in this synchronous moment. */
	| 'addonOnStart'
	/** Addon stops its active behavior in this synchronous moment. State is preserved (unlike shutdown). */
	| 'addonOnStop'
	/** Addon resumes from pause in this synchronous moment. */
	| 'addonOnUnpause'
	/** Addon is about to enter its ready state. Last setup window before the host may route work to it. */
	| 'addonWillBecomeReady'
	/** Addon config is about to change. Hook for capturing the prior config, or for validating/vetoing the incoming one. */
	| 'addonWillChangeCfg'
	/** Addon is about to transition state. Listeners may inspect from/to to gate or annotate the transition. */
	| 'addonWillChangeState'
	/** Addon is about to fetch an asset. Hook for rewriting the request URL, injecting auth, or serving from a local cache. */
	| 'addonWillFetchAsset'
	/** Addon is about to fetch its manifest. Hook for choosing the source/variant, injecting auth, or setting cache policy. */
	| 'addonWillFetchManifest'
	/** Addon is about to gain focus. */
	| 'addonWillGainFocus'
	/** Addon is about to run its one-time initialization. Pre-init hook for dependency injection / config. */
	| 'addonWillInit'
	/** Addon is about to load. Hook for setting up progress reporting, cancellation tokens, or a load profile. */
	| 'addonWillLoad'
	/** Addon is about to apply its parsed manifest. Last chance to patch, override, or reject manifest entries — including declared permissions — before they take effect. */
	| 'addonWillLoadManifest'
	/** Addon is about to give up focus. */
	| 'addonWillLoseFocus'
	/** Addon is about to parse its fetched manifest. Hook for selecting a parser/schema version or pre-processing raw content. */
	| 'addonWillParseManifest'
	/** Addon is about to pause. Hook for snapshotting transient state and draining in-flight work. */
	| 'addonWillPause'
	/** Addon is about to restart. Hook for clearing accumulated state that should not survive into the new run. */
	| 'addonWillRestart'
	/** Addon is about to shut down. Last hook for flushing buffers, persisting state, and releasing host-held handles. */
	| 'addonWillShutdown'
	/** Addon is about to start its active behavior. */
	| 'addonWillStart'
	/** Addon is about to stop its active behavior. State is preserved (unlike shutdown). */
	| 'addonWillStop'
	/** Addon is about to resume from pause. Hook for re-acquiring resources released on pause. */
	| 'addonWillUnpause';

/**
 *
 * @param delegate
 * @param phase
 *
 * @category Addons
 */
export async function addonPhase<ArgsT = unknown>(
	phase: AddonPhase,
	delegate: AddonDelegate<ArgsT> | AddonDelegate<ArgsT>[],
	base?: LogLike
): Promise<boolean> {
	return invokeListeners<AddonPhase, AddonDelegate<ArgsT>>({
		phase: phase,
		delegate: delegate,
		base: base
	});
}
