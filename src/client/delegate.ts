/**
 *	MIT License
 *
 *	Copyright (c) 2019 – 2024 Toreda, Inc.
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

import {ClientLifecycle} from './lifecycle';
import type {ClientPhase} from './phase';
import type {LifecycleDelegateCommon} from '../lifecycle/delegate/common';
import type {LifecycleListener} from '../lifecycle/listener';

/**
 * @category Client
 */
export interface ClientDelegate<ArgsT = unknown> extends LifecycleDelegateCommon<ClientPhase> {
	lifecycle: ClientLifecycle;
	willInit?: LifecycleListener<ArgsT>;
	/** Entered 'init' phase - creating all necessary instances. **/
	onInit: LifecycleListener<ArgsT>;
	didInit?: LifecycleListener<ArgsT>;
	/** Client completed the 'load' phase' and will begin load phase next.*/
	didLoad?: LifecycleListener<ArgsT>;
	/** Client is now loading resources, assets, and packages. */
	onLoad: LifecycleListener<ArgsT>;
	willLoad?: LifecycleListener<ArgsT>;
	/** Entered 'ready' phase - all systems are running & ready. */
	willBecomeReady?: LifecycleListener<ArgsT>;
	onReady: LifecycleListener<ArgsT>;
	didBecomeReady?: LifecycleListener<ArgsT>;
	/** Client systems are starting and will enter 'start' phase. */
	willStart?: LifecycleListener<ArgsT>;
	onStart: LifecycleListener<ArgsT>;
	didStart?: LifecycleListener<ArgsT>;
	/** Client received memory warning from OS and cleared cached resources. */
	memoryWarning?: LifecycleListener<ArgsT>;
	/** Client will enter 'pause' phase soon. Prepare to pause. */
	willPause?: LifecycleListener<ArgsT>;
	didPause?: LifecycleListener<ArgsT>;
	/** Client entered 'pause' phase. All systems should now be paused. */
	didUnpause?: LifecycleListener<ArgsT>;
	/** Client will enter 'stop' phase sometime soon. Prepare to stop systems. */
	willStop?: LifecycleListener<ArgsT>;
	/** Client entered 'stop' phase - client has stopped running. All systems & timers are now stopped. */
	didStop?: LifecycleListener<ArgsT>;
	willLoseFocus?: LifecycleListener<ArgsT>;
	didLoseFocus?: LifecycleListener<ArgsT>;
	didGainFocus?: LifecycleListener<ArgsT>;
	willGainFocus?: LifecycleListener<ArgsT>;
	willShutdown?: LifecycleListener<ArgsT>;
	didShutdown?: LifecycleListener<ArgsT>;
	onShutdown?: LifecycleListener<ArgsT>;
}
