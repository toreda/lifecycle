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
import type {ServerPhase} from './phase';

/**
 * Delegate interface for server-side classes.
 *
 * @category Server
 */
export interface ServerDelegate<ArgsT = unknown> extends LifecycleDelegateCommon<ServerPhase> {
	/**
	 * Server completed the 'ready' lifecycle phase.
	 */
	didBecomeReady?: LifecycleListener<ArgsT>;
	/**
	 * Server completed the 'init' lifecycle phase.
	 */
	didInit?: LifecycleListener<ArgsT>;
	/**
	 * Server completed the 'load' lifecycle phase.
	 */
	didLoad?: LifecycleListener<ArgsT>;
	/**
	 * Server completed a restart.
	 */
	didRestart?: LifecycleListener<ArgsT>;
	/**
	 * Server completed the 'shutdown' lifecycle phase.
	 */
	didShutdown?: LifecycleListener<ArgsT>;
	/**
	 * Server completed the 'start' lifecycle phase.
	 */
	didStart?: LifecycleListener<ArgsT>;
	/**
	 * Server completed the 'stop' lifecycle phase.
	 */
	didStop?: LifecycleListener<ArgsT>;
	/**
	 * Server enters the 'init' lifecycle phase.
	 */
	onInit?: LifecycleListener<ArgsT>;
	/**
	 * Server enters the 'load' lifecycle phase.
	 */
	onLoad?: LifecycleListener<ArgsT>;
	/**
	 * Server enters the 'ready' lifecycle phase.
	 */
	onReady?: LifecycleListener<ArgsT>;
	/**
	 * Server process is restarting. Does not indicate whether the parent server instance restarted.
	 */
	onRestart?: LifecycleListener<ArgsT>;
	/**
	 * Server enters the 'shutdown' lifecycle phase.
	 */
	onShutdown?: LifecycleListener<ArgsT>;
	/**
	 * Server enters the 'start' lifecycle phase.
	 */
	onStart?: LifecycleListener<ArgsT>;
	/**
	 * Server is processing the 'stop' lifecycle phase.
	 */
	onStop?: LifecycleListener<ArgsT>;
	/**
	 * Server will begin 'ready' lifecycle phase.
	 */
	willBecomeReady?: LifecycleListener<ArgsT>;
	/**
	 * Server will begin 'init' lifecycle phase.
	 */
	willInit?: LifecycleListener<ArgsT>;
	/**
	 * Server will begin 'load' lifecycle phase.
	 */
	willLoad?: LifecycleListener<ArgsT>;
	/**
	 * Server will restart and restore all objects to initial states.
	 */
	willRestart?: LifecycleListener<ArgsT>;
	/**
	 * Server will begin 'shutdown' lifecycle phase.
	 */
	willShutdown?: LifecycleListener<ArgsT>;
	/**
	 * Server will begin 'start' lifecycle phase.
	 */
	willStart?: LifecycleListener<ArgsT>;
	/**
	 * Server will begin 'stop' lifecycle phase.
	 */
	willStop?: LifecycleListener<ArgsT>;
}
