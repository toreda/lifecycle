/**
 *	MIT License
 *
 *	Copyright (c) 2019 – 2023 Toreda, Inc.
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
import type {ServerFlags} from './flags';
import type {ServerPhase} from './phase';

/**
 * Delegate interface for server-side classes.
 *
 * @category Server
 */
export interface ServerDelegate<ArgsT = unknown> extends LifecycleDelegateCommon<ServerPhase, ServerFlags> {
	didBecomeReady?: LifecycleListener<ArgsT>;
	didInit?: LifecycleListener<ArgsT>;
	didLoad?: LifecycleListener<ArgsT>;
	didRestart?: LifecycleListener<ArgsT>;
	didShutdown?: LifecycleListener<ArgsT>;
	didStart?: LifecycleListener<ArgsT>;
	didStop?: LifecycleListener<ArgsT>;
	onInit?: LifecycleListener<ArgsT>;
	onLoad?: LifecycleListener<ArgsT>;
	onReady?: LifecycleListener<ArgsT>;
	onRestart?: LifecycleListener<ArgsT>;
	onShutdown?: LifecycleListener<ArgsT>;
	onStart?: LifecycleListener<ArgsT>;
	onStop?: LifecycleListener<ArgsT>;
	willBecomeReady?: LifecycleListener<ArgsT>;
	willInit?: LifecycleListener<ArgsT>;
	willLoad?: LifecycleListener<ArgsT>;
	willRestart?: LifecycleListener<ArgsT>;
	willShutdown?: LifecycleListener<ArgsT>;
	willStart?: LifecycleListener<ArgsT>;
	willStop?: LifecycleListener<ArgsT>;
}
