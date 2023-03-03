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

import {AddonLifecycle} from './lifecycle';
import type {AddonPhase} from './phase';
import type {LifecycleDelegateCommon} from '../lifecycle/delegate/common';
import type {LifecycleListener} from '../lifecycle/listener';

/**
 * Adds support for calling optional addon lifecycle methods.
 *
 * @category Addon
 */
export interface AddonDelegate<ArgsT = unknown> extends LifecycleDelegateCommon<AddonPhase> {
	lifecycle: AddonLifecycle;
	didBecomeReady?: LifecycleListener<ArgsT>;
	didEnterCache?: LifecycleListener<ArgsT>;
	didGainFocus?: LifecycleListener<ArgsT>;
	didInit?: LifecycleListener<ArgsT>;
	didLeaveCache?: LifecycleListener<ArgsT>;
	didLoad?: LifecycleListener<ArgsT>;
	didLoseFocus?: LifecycleListener<ArgsT>;
	didPause?: LifecycleListener<ArgsT>;
	didRestart?: LifecycleListener<ArgsT>;
	didShutdown?: LifecycleListener<ArgsT>;
	didStart?: LifecycleListener<ArgsT>;
	didStop?: LifecycleListener<ArgsT>;
	didUnpause?: LifecycleListener<ArgsT>;
	memoryWarning?: LifecycleListener<ArgsT>;
	onEnterCache?: LifecycleListener<ArgsT>;
	onInit?: LifecycleListener<ArgsT>;
	onLeaveCache?: LifecycleListener<ArgsT>;
	onLoad?: LifecycleListener<ArgsT>;
	onPause?: LifecycleListener<ArgsT>;
	onReady?: LifecycleListener<ArgsT>;
	onRestart?: LifecycleListener<ArgsT>;
	onShutdown?: LifecycleListener<ArgsT>;
	onStart?: LifecycleListener<ArgsT>;
	onStop?: LifecycleListener<ArgsT>;
	onUnpause?: LifecycleListener<ArgsT>;
	willBecomeReady?: LifecycleListener<ArgsT>;
	willEnterCache?: LifecycleListener<ArgsT>;
	willGainFocus?: LifecycleListener<ArgsT>;
	willInit?: LifecycleListener<ArgsT>;
	willLeaveCache?: LifecycleListener<ArgsT>;
	willLoad?: LifecycleListener<ArgsT>;
	willLoseFocus?: LifecycleListener<ArgsT>;
	willPause?: LifecycleListener<ArgsT>;
	willRestart?: LifecycleListener<ArgsT>;
	willShutdown?: LifecycleListener<ArgsT>;
	willStart?: LifecycleListener<ArgsT>;
	willStop?: LifecycleListener<ArgsT>;
}
