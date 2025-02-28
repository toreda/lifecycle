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
import {type ServerPhase} from './phase';

/**
 * Delegate interface for server-side classes.
 *
 * @category Server
 */
export interface ServerDelegate<ArgsT = unknown> extends LifecycleDelegateCommon<ServerPhase> {
	/**
	 * The environment received a a sig interrupt.
	 */
	serverOnInterrupt?: LifecycleListener<ArgsT>;
	/**
	 * Server completed the 'ready' lifecycle phase.
	 */
	serverDidBecomeReady?: LifecycleListener<ArgsT>;
	/**
	 * Server completed the 'init' lifecycle phase.
	 */
	serverDidInit?: LifecycleListener<ArgsT>;
	/**
	 * Server completed the 'load' lifecycle phase.
	 */
	serverDidLoad?: LifecycleListener<ArgsT>;
	/**
	 * Server completed a restart.
	 */
	serverDidRestart?: LifecycleListener<ArgsT>;
	/**
	 * Server completed the 'shutdown' lifecycle phase.
	 */
	serverDidShutdown?: LifecycleListener<ArgsT>;
	/**
	 * Server completed the 'start' lifecycle phase.
	 */
	serverDidStart?: LifecycleListener<ArgsT>;
	/**
	 * Server completed the 'stop' lifecycle phase.
	 */
	serverDidStop?: LifecycleListener<ArgsT>;
	/**
	 * Server enters the 'init' lifecycle phase.
	 */
	serverOnInit?: LifecycleListener<ArgsT>;
	/**
	 * Server enters the 'load' lifecycle phase.
	 */
	serverOnLoad?: LifecycleListener<ArgsT>;
	/**
	 * Server enters the 'ready' lifecycle phase.
	 */
	serverOnReady?: LifecycleListener<ArgsT>;
	/**
	 * Server process is restarting. Does not indicate whether the parent server instance restarted.
	 */
	serverOnRestart?: LifecycleListener<ArgsT>;
	/**
	 * Server enters the 'shutdown' lifecycle phase.
	 */
	serverOnShutdown?: LifecycleListener<ArgsT>;
	/**
	 * Server enters the 'start' lifecycle phase.
	 */
	serverOnStart?: LifecycleListener<ArgsT>;
	/**
	 * Server is processing the 'stop' lifecycle phase.
	 */
	serverOnStop?: LifecycleListener<ArgsT>;
	/**
	 * Server will begin 'ready' lifecycle phase.
	 */
	serverWillBecomeReady?: LifecycleListener<ArgsT>;
	/**
	 * Server will begin 'init' lifecycle phase.
	 */
	serverWillInit?: LifecycleListener<ArgsT>;
	/**
	 * Server will begin 'load' lifecycle phase.
	 */
	serverWillLoad?: LifecycleListener<ArgsT>;
	/**
	 * Server will restart and restore all objects to initial states.
	 */
	serverWillRestart?: LifecycleListener<ArgsT>;
	/**
	 * Server will begin 'shutdown' lifecycle phase.
	 */
	serverWillShutdown?: LifecycleListener<ArgsT>;
	/**
	 * Server will begin 'start' lifecycle phase.
	 */
	serverWillStart?: LifecycleListener<ArgsT>;
	/**
	 * Server will begin 'stop' lifecycle phase.
	 */
	serverWillStop?: LifecycleListener<ArgsT>;
}
