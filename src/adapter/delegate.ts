/**
 *	MIT License
 *
 *	Copyright (c) 2019 – 2025 Toreda, Inc.
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

import type {LifecycleDelegateCommon} from '../lifecycle/delegate/common';
import type {LifecycleListener} from '../lifecycle/listener';
import {AdapterPhase} from './phase';

/**
 * Adds support for calling optional addon lifecycle methods.
 *
 * @category Adapters
 */

export type AdapterDelegate<ArgsT = unknown> = Record<AdapterPhase, LifecycleListener<ArgsT>> &
	LifecycleDelegateCommon<AdapterPhase>;
/* export interface AdapterDelegate<PhaseT, ArgsT = unknown> extends LifecycleDelegateCommon<PhaseT> {
	// Registering the adapter as spawnable.
	willRegister?: LifecycleListener<ArgsT>;
	didRegister?: LifecycleListener<ArgsT>;

	willBecomeSpawnable?: LifecycleListener<ArgsT>;
	didBecomeSpawnable?: LifecycleListener<ArgsT>;

	willSpawnInstance?: LifecycleListener<ArgsT>;
	didSpawnInstance?: LifecycleListener<ArgsT>;
	// Init Phase
	// Instantiate all important classes. Prepare to fetch a manifest (if adapter has one).
	willInit?: LifecycleListener<ArgsT>;
	didInit?: LifecycleListener<ArgsT>;

	// Fetch Manifest Phase
	// Manifests detail required files & assets. Fetch it when adapter config defines a manifest url.
	// Otherwise, skip this step.
	willFetchManifest?: LifecycleListener<ArgsT>;
	didFetchManifest?: LifecycleListener<ArgsT>;

	// Parse Manifest Phase
	// If a manifest was successfully fetched in the `fetch manifest` phase, parse it here.
	// Skip this step when manifest fetch fails, or there's no manifest url.
	willParseManifest?: LifecycleListener<ArgsT>;
	didParseManifest?: LifecycleListener<ArgsT>;

	// Load Phase
	// Load files from local disk or the web.
	willLoad?: LifecycleListener<ArgsT>;
	didLoad?: LifecycleListener<ArgsT>;

	willClearCache?: LifecycleListener<ArgsT>;
	didClearCache?: LifecycleListener<ArgsT>; */
/*
	// Start Phase
	// Adapter received a start call and
	willStart?: LifecycleListener<ArgsT>;
	didStart?: LifecycleListener<ArgsT>;

	// Ready Phase
	// Adapter completes any startup work/calls and is ready to be called.
	willBecomeReady?: LifecycleListener<ArgsT>;
	didBecomeReady?: LifecycleListener<ArgsT>;

	willStop?: LifecycleListener<ArgsT>;
	didStop?: LifecycleListener<ArgsT>;

	willUnload?: LifecycleListener<ArgsT>;
	didUnload?: LifecycleListener<ArgsT>;

	willPause?: LifecycleListener<ArgsT>;
	didPause?: LifecycleListener<ArgsT>;
	// Reseting the adapter back to initial spawn status.
	willReset?: LifecycleListener<ArgsT>;
	didReset?: LifecycleListener<ArgsT>;

	willSuspend?: LifecycleListener<ArgsT>;
	didSuspend?: LifecycleListener<ArgsT>;
}
 */
