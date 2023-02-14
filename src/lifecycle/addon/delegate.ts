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

import {LifecycleAddon} from '../addon';
import type {LifecycleListener} from '../listener';

/**
 * Adds support for calling optional addon lifecycle methods.
 *
 * @category Lifecycle - Addons
 */
export interface LifecycleAddonDelegate {
	lifecycle: LifecycleAddon;
	/** Starting 'init' lifecycle phase. */
	willInit?: LifecycleListener;
	/** Server completed 'init' lifecycle phase. */
	didInit?: LifecycleListener;
	/** Server will enter 'load' lifecycle phase. */
	willLoad?: LifecycleListener;
	/** Server completed 'load' lifecycle phase. */
	didLoad?: LifecycleListener;
	/** Server will enter 'start' lifecycle phase but is not yet ready. */
	willStart?: LifecycleListener;
	/** Server completed 'start' lifecycle phase. */
	didStart?: LifecycleListener;
	/** Server entered the 'ready' lifecycle phase and is now fully available. */
	willBecomeReady?: LifecycleListener;
	/** Server entered 'ready' lifecycle phase and is now fully available. */
	didBecomeReady?: LifecycleListener;
	memoryWarning?: LifecycleListener;
	willPause?: LifecycleListener;
	didUnpause?: LifecycleListener;
	/** Server will enter the stop lifecycle phase soon. */
	willStop?: LifecycleListener;
	/** Server entered the stop lifecycle phase. */
	didStop?: LifecycleListener;
	/** Server will shutdown completely. */
	willShutdown?: LifecycleListener;
	willLoseFocus?: LifecycleListener;
	didLoseFocus?: LifecycleListener;
	willGainFocus?: LifecycleListener;
	didGainFocus?: LifecycleListener;
}
