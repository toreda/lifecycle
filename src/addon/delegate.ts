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
 * Adds support for calling optional addon lifecycle methods.
 *
 * @category Addon
 */
export interface AddonDelegate<PhaseT, ArgsT = unknown> extends LifecycleDelegateCommon<PhaseT> {
	addonCacheDidEnter?: LifecycleListener<ArgsT>;
	addonCacheDidLeave?: LifecycleListener<ArgsT>;
	addonCacheOnEnter?: LifecycleListener<ArgsT>;
	addonCacheOnLeave?: LifecycleListener<ArgsT>;
	addonCacheWillEnter?: LifecycleListener<ArgsT>;
	addonCacheWillLeave?: LifecycleListener<ArgsT>;
	addonDidBecomeReady?: LifecycleListener<ArgsT>;
	addonDidGainFocus?: LifecycleListener<ArgsT>;
	addonDidInit?: LifecycleListener<ArgsT>;
	addonDidLoad?: LifecycleListener<ArgsT>;
	addonDidLoseFocus?: LifecycleListener<ArgsT>;
	addonDidPause?: LifecycleListener<ArgsT>;
	addonDidRestart?: LifecycleListener<ArgsT>;
	addonDidShutdown?: LifecycleListener<ArgsT>;
	addonDidStart?: LifecycleListener<ArgsT>;
	addonDidStop?: LifecycleListener<ArgsT>;
	addonDidUnpause?: LifecycleListener<ArgsT>;
	addonMemoryWarning?: LifecycleListener<ArgsT>;
	addonOnInit?: LifecycleListener<ArgsT>;
	addonOnLoad?: LifecycleListener<ArgsT>;
	addonOnPause?: LifecycleListener<ArgsT>;
	addonOnReady?: LifecycleListener<ArgsT>;
	addonOnRestart?: LifecycleListener<ArgsT>;
	addonOnShutdown?: LifecycleListener<ArgsT>;
	addonOnStart?: LifecycleListener<ArgsT>;
	addonOnStop?: LifecycleListener<ArgsT>;
	addonOnUnpause?: LifecycleListener<ArgsT>;
	addonWillBecomeReady?: LifecycleListener<ArgsT>;
	addonWillGainFocus?: LifecycleListener<ArgsT>;
	addonWillInit?: LifecycleListener<ArgsT>;
	addonWillLeaveCache?: LifecycleListener<ArgsT>;
	addonWillLoad?: LifecycleListener<ArgsT>;
	addonWillLoseFocus?: LifecycleListener<ArgsT>;
	addonWillPause?: LifecycleListener<ArgsT>;
	addonWillRestart?: LifecycleListener<ArgsT>;
	addonWillShutdown?: LifecycleListener<ArgsT>;
	addonWillStart?: LifecycleListener<ArgsT>;
	addonWillStop?: LifecycleListener<ArgsT>;
}
