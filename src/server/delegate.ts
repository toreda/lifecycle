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

import type {LifecycleListener} from '../lifecycle/listener';

/**
 * Delegate interface for server-side classes.
 *
 * @category Lifecycle
 */
export interface ServerDelegate<ArgsT = unknown> {
	/** Starting 'init' lifecycle phase. */
	willInit?: LifecycleListener<ArgsT>;
	/** Server completed 'init' lifecycle phase. */
	didInit?: LifecycleListener<ArgsT>;
	/** Server completed 'load' lifecycle phase. */
	didLoad?: LifecycleListener<ArgsT>;
	/** Server will enter 'load' lifecycle phase. */
	willLoad?: LifecycleListener<ArgsT>;
	/** Server will enter 'start' lifecycle phase but is not yet ready. */
	willStart?: LifecycleListener<ArgsT>;
	/** Server completed 'start' lifecycle phase. */
	didStart?: LifecycleListener<ArgsT>;
	/** Server entered the 'ready' lifecycle phase and is now fully available. */
	willBecomeReady?: LifecycleListener<ArgsT>;
	/** Server entered 'ready' lifecycle phase and is now fully available. */
	didBecomeReady?: LifecycleListener<ArgsT>;
	/** Server will enter the stop lifecycle phase soon. */
	willStop?: LifecycleListener<ArgsT>;
	/** Server entered the stop lifecycle phase. */
	didStop?: LifecycleListener<ArgsT>;
	/** Server will shutdown completely. */
	willShutdown?: LifecycleListener<ArgsT>;
}
