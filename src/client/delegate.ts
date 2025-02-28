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

/**
 * @category Client
 */
export interface ClientDelegate<PhaseT, ArgsT = unknown> extends LifecycleDelegateCommon<PhaseT> {
	clientWillInit?: LifecycleListener<ArgsT>;
	/** Entered 'init' phase - creating all necessary instances. **/
	clientOnInit: LifecycleListener<ArgsT>;
	clientDidInit?: LifecycleListener<ArgsT>;
	/** Client completed the 'load' phase' and will begin load phase next.*/
	clientDidLoad?: LifecycleListener<ArgsT>;
	/** Client is now loading resources, assets, and packages. */
	clientOnLoad: LifecycleListener<ArgsT>;
	clientWillLoad?: LifecycleListener<ArgsT>;
	/** Entered 'ready' phase - all systems are running & ready. */
	clientWillBecomeReady?: LifecycleListener<ArgsT>;
	clientOnReady: LifecycleListener<ArgsT>;
	clientDidBecomeReady?: LifecycleListener<ArgsT>;
	/** Client systems are starting and will enter 'start' phase. */
	clientWillStart?: LifecycleListener<ArgsT>;
	clientOnStart: LifecycleListener<ArgsT>;
	clientDidStart?: LifecycleListener<ArgsT>;
	/** Client received memory warning from OS and cleared cached resources. */
	clientMemoryWarning?: LifecycleListener<ArgsT>;
	/** Client will enter 'pause' phase soon. Prepare to pause. */
	clientWillPause?: LifecycleListener<ArgsT>;
	clientDidPause?: LifecycleListener<ArgsT>;
	/** Client entered 'pause' phase. All systems should now be paused. */
	clientDidUnpause?: LifecycleListener<ArgsT>;
	/** Client will enter 'stop' phase sometime soon. Prepare to stop systems. */
	clientWillStop?: LifecycleListener<ArgsT>;
	/** Client entered 'stop' phase - client has stopped running. All systems & timers are now stopped. */
	clientDidStop?: LifecycleListener<ArgsT>;
	clientWillLoseFocus?: LifecycleListener<ArgsT>;
	clientDidLoseFocus?: LifecycleListener<ArgsT>;
	clientDidGainFocus?: LifecycleListener<ArgsT>
	clientWillGainFocus?: LifecycleListener<ArgsT>;
	clientWillShutdown?: LifecycleListener<ArgsT>;
	clientDidShutdown?: LifecycleListener<ArgsT>;
	clientOnShutdown?: LifecycleListener<ArgsT>;
}
