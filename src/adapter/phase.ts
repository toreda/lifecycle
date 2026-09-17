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

import {type AdapterDelegate} from './delegate';
import {type LogLike} from '../log/like';
import {invokeListeners} from '../invoke/listeners';

/**
 * Adapter lifecycle phases.
 *
 * An adapter is the bridge between a content source and the runtime: it
 * fetches and parses a manifest, pulls the assets that manifest names,
 * registers itself so the rest of the system can find it, and spawns
 * instances of whatever it adapts.
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
 * The manifest pipeline runs in order: `FetchManifest` (retrieve the bytes),
 * `ParseManifest` (turn bytes into a structured manifest), `LoadManifest`
 * (apply the parsed manifest to the adapter), then `FetchAsset` for each
 * asset the manifest declares.
 *
 * @category Adapters
 */
export type AdapterPhase =
	/** Adapter finished its become-ready transition — initialized, loaded, registered, and accepting work. Distinct from `Init` (constructed) and `Load` (manifest and assets resolved). */
	| 'adapterDidBecomeReady'
	/** Adapter finished becoming spawnable — it now has everything it needs to produce instances on demand. Readiness alone does not imply spawnability. */
	| 'adapterDidBecomeSpawnable'
	/** Adapter finished clearing its cache. Previously cached manifests and assets are gone; subsequent requests will refetch. */
	| 'adapterDidClearCache'
	/** Adapter finished fetching an asset named by its manifest. The asset bytes are now resolved and available. */
	| 'adapterDidFetchAsset'
	/** Adapter finished fetching its manifest. Raw manifest content is in hand but not yet parsed. */
	| 'adapterDidFetchManifest'
	/** Adapter finished gaining focus — it is now the active adapter for its domain and receives routed input/events. */
	| 'adapterDidGainFocus'
	/** Adapter finished its one-time initialization. Construction is complete; safe to reference dependencies. */
	| 'adapterDidInit'
	/** Adapter finished loading — manifest applied and declared assets resolved. Distinct from init: load may be re-run, init runs once. */
	| 'adapterDidLoad'
	/** Adapter finished applying its parsed manifest — declared assets, types, and settings are now reflected in adapter state. */
	| 'adapterDidLoadManifest'
	/** Adapter finished giving up focus — routed input/events now go elsewhere. */
	| 'adapterDidLoseFocus'
	/** Adapter finished parsing its fetched manifest into a structured form. Validation errors, if any, have already surfaced. */
	| 'adapterDidParseManifest'
	/** Adapter finished pausing — spawning and background work are halted, state preserved. */
	| 'adapterDidPause'
	/** Adapter finished registering itself with the host registry. It is now discoverable by consumers looking it up by id/type. */
	| 'adapterDidRegister'
	/** Adapter finished resetting to its post-init baseline. Manifest, assets, and cached derivations are discarded; registration is not necessarily dropped. */
	| 'adapterDidReset'
	/** Adapter finished spawning an instance. The new instance exists and has been handed to the caller. */
	| 'adapterDidSpawnInstance'
	/** Adapter finished starting its active behavior (post-init, post-load). */
	| 'adapterDidStart'
	/** Adapter finished stopping its active behavior. State is preserved (unlike reset/unload). */
	| 'adapterDidStop'
	/** Adapter finished entering suspended state. Distinct from `Pause`: suspend parks the adapter indefinitely (e.g. its source is unreachable), not just briefly. */
	| 'adapterDidSuspend'
	/** Adapter finished unloading — manifest and fetched assets released. Inverse of `Load`; the adapter remains initialized. */
	| 'adapterDidUnload'
	/** Adapter finished resuming from pause. */
	| 'adapterDidUnpause'
	/** Adapter finished unregistering from the host registry. It is no longer discoverable; existing spawned instances are unaffected. */
	| 'adapterDidUnregister'
	/** Adapter becomes ready in this synchronous moment. Use when the listener performs the readiness handoff itself. */
	| 'adapterOnBecomeReady'
	/** Adapter becomes spawnable in this synchronous moment. */
	| 'adapterOnBecomeSpawnable'
	/** Adapter clears its cache in this synchronous moment — the implementation that evicts cached manifests and assets. */
	| 'adapterOnClearCache'
	/** Adapter fetches an asset in this synchronous moment. Use when the listener supplies the asset (e.g. a custom transport or CDN resolver). */
	| 'adapterOnFetchAsset'
	/** Adapter fetches its manifest in this synchronous moment. Use when the listener supplies the manifest bytes. */
	| 'adapterOnFetchManifest'
	/** Adapter gains focus in this synchronous moment. */
	| 'adapterOnGainFocus'
	/** Adapter performs its one-time initialization in this synchronous moment. */
	| 'adapterOnInit'
	/** Adapter runs its load sequence in this synchronous moment. */
	| 'adapterOnLoad'
	/** Adapter applies its parsed manifest in this synchronous moment. */
	| 'adapterOnLoadManifest'
	/** Adapter gives up focus in this synchronous moment. */
	| 'adapterOnLoseFocus'
	/** Adapter parses its manifest in this synchronous moment. Use when the listener implements the manifest format (e.g. a custom schema or version). */
	| 'adapterOnParseManifest'
	/** Adapter pauses in this synchronous moment — the implementation that halts spawning and background work. */
	| 'adapterOnPause'
	/** Adapter registers itself in this synchronous moment. */
	| 'adapterOnRegister'
	/** Adapter resets to its baseline in this synchronous moment. Implementer is expected to discard manifest, assets, and derived state here. */
	| 'adapterOnReset'
	/** Adapter spawns an instance in this synchronous moment. Use when the listener is the factory that constructs the instance. */
	| 'adapterOnSpawnInstance'
	/** Adapter starts its active behavior in this synchronous moment. */
	| 'adapterOnStart'
	/** Adapter stops its active behavior in this synchronous moment. State is preserved. */
	| 'adapterOnStop'
	/** Adapter enters suspended state in this synchronous moment. */
	| 'adapterOnSuspend'
	/** Adapter unloads its manifest and assets in this synchronous moment. */
	| 'adapterOnUnload'
	/** Adapter resumes from pause in this synchronous moment. */
	| 'adapterOnUnpause'
	/** Adapter unregisters itself in this synchronous moment. */
	| 'adapterOnUnregister'
	/** Adapter is about to enter its ready state. Last setup window before consumers may resolve and use it. */
	| 'adapterWillBecomeReady'
	/** Adapter is about to become spawnable. Hook for last-chance validation that instance prerequisites are satisfied. */
	| 'adapterWillBecomeSpawnable'
	/** Adapter is about to clear its cache. Hook for persisting anything worth keeping, or for warming a replacement cache. */
	| 'adapterWillClearCache'
	/** Adapter is about to fetch an asset. Hook for rewriting the request URL, injecting auth, or serving from a local cache. */
	| 'adapterWillFetchAsset'
	/** Adapter is about to fetch its manifest. Hook for choosing the source/variant, injecting auth, or setting cache policy. */
	| 'adapterWillFetchManifest'
	/** Adapter is about to gain focus. */
	| 'adapterWillGainFocus'
	/** Adapter is about to run its one-time initialization. Pre-init hook for dependency injection / config. */
	| 'adapterWillInit'
	/** Adapter is about to load. Hook for setting up progress reporting, cancellation tokens, or a load profile. */
	| 'adapterWillLoad'
	/** Adapter is about to apply its parsed manifest. Last chance to patch, override, or reject manifest entries before they take effect. */
	| 'adapterWillLoadManifest'
	/** Adapter is about to give up focus. */
	| 'adapterWillLoseFocus'
	/** Adapter is about to parse its fetched manifest. Hook for selecting a parser/schema version or pre-processing raw content. */
	| 'adapterWillParseManifest'
	/** Adapter is about to pause. Hook for snapshotting transient state and draining in-flight fetches. */
	| 'adapterWillPause'
	/** Adapter is about to register itself. Hook for asserting its id/type is unique, or for claiming additional keys. */
	| 'adapterWillRegister'
	/** Adapter is about to reset. Last hook to capture state that will not survive the reset. */
	| 'adapterWillReset'
	/** Adapter is about to spawn an instance. Hook for validating spawn arguments, applying quotas, or vetoing the spawn. */
	| 'adapterWillSpawnInstance'
	/** Adapter is about to start its active behavior. */
	| 'adapterWillStart'
	/** Adapter is about to stop its active behavior. State is preserved. */
	| 'adapterWillStop'
	/** Adapter is about to enter suspended state. Hook for releasing connections held to an unreachable source. */
	| 'adapterWillSuspend'
	/** Adapter is about to unload. Hook for ensuring no live refs to its assets remain. */
	| 'adapterWillUnload'
	/** Adapter is about to resume from pause. Hook for re-acquiring resources released on pause. */
	| 'adapterWillUnpause'
	/** Adapter is about to unregister. Last hook for notifying consumers that still hold a reference. */
	| 'adapterWillUnregister';

/**
 *
 * @param delegate
 * @param phase
 *
 * @category Adapters
 */
export async function adapterPhase<ArgsT = unknown>(
	phase: AdapterPhase,
	delegate: AdapterDelegate<ArgsT> | AdapterDelegate<ArgsT>[],
	base?: LogLike
): Promise<boolean> {
	return invokeListeners<AdapterPhase, AdapterDelegate<ArgsT>>({
		phase: phase,
		delegate: delegate,
		base: base
	});
}
