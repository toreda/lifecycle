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
import {ClientPhase} from './phase';

/**
 * @category Client
 */
export type ClientDelegate<ArgsT = unknown> = Record<ClientPhase, LifecycleListener<ArgsT>> &
	LifecycleDelegateCommon<ClientPhase>;
/* export interface ClientDelegate<PhaseT, ArgsT = unknown> extends LifecycleDelegateCommon<PhaseT> {
	clientWillInit?: LifecycleListener<ArgsT>;
	clientOnInit: LifecycleListener<ArgsT>;
	clientDidInit?: LifecycleListener<ArgsT>;
	clientDidLoad?: LifecycleListener<ArgsT>;
	clientOnLoad: LifecycleListener<ArgsT>;
	clientWillLoad?: LifecycleListener<ArgsT>;
	clientWillBecomeReady?: LifecycleListener<ArgsT>;
	clientOnReady: LifecycleListener<ArgsT>;
	clientDidBecomeReady?: LifecycleListener<ArgsT>;
	clientWillStart?: LifecycleListener<ArgsT>;
	clientOnStart: LifecycleListener<ArgsT>;
	clientDidStart?: LifecycleListener<ArgsT>;
	clientMemoryWarning?: LifecycleListener<ArgsT>;
	clientWillPause?: LifecycleListener<ArgsT>;
	clientDidPause?: LifecycleListener<ArgsT>;
	clientDidUnpause?: LifecycleListener<ArgsT>;
	clientWillStop?: LifecycleListener<ArgsT>;

	clientDidStop?: LifecycleListener<ArgsT>;
	clientWillLoseFocus?: LifecycleListener<ArgsT>;
	clientDidLoseFocus?: LifecycleListener<ArgsT>;
	clientDidGainFocus?: LifecycleListener<ArgsT>
	clientWillGainFocus?: LifecycleListener<ArgsT>;
	clientWillShutdown?: LifecycleListener<ArgsT>;
	clientDidShutdown?: LifecycleListener<ArgsT>;
	clientOnShutdown?: LifecycleListener<ArgsT>;
}
 */
