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
import type {AddonDelegate} from './delegate';
import {Log} from '@toreda/log';
import {invokeListeners} from '../invoke/listeners';

/**
 * Expressive type describing phase names used in client lifecycle flow.
 *
 * @category Addons
 */
export type AddonPhase =
	| 'addonCacheDidEnter'
	| 'addonCacheDidLeave'
	| 'addonCacheOnEnter'
	| 'addonCacheOnLeave'
	| 'addonCacheWillEnter'
	| 'addonCacheWillLeave'
	| 'addonDidBecomeReady'
	| 'addonDidGainFocus'
	| 'addonDidInit'
	| 'addonDidLoad'
	| 'addonDidLoseFocus'
	| 'addonDidPause'
	| 'addonDidRestart'
	| 'addonDidShutdown'
	| 'addonDidStart'
	| 'addonDidStop'
	| 'addonDidUnpause'
	| 'addonMemoryWarning'
	| 'addonOnInit'
	| 'addonOnLoad'
	| 'addonOnPause'
	| 'addonOnReady'
	| 'addonOnRestart'
	| 'addonOnShutdown'
	| 'addonOnStart'
	| 'addonOnStop'
	| 'addonOnUnpause'
	| 'addonWillBecomeReady'
	| 'addonWillGainFocus'
	| 'addonWillInit'
	| 'addonWillLeaveCache'
	| 'addonWillLoad'
	| 'addonWillLoseFocus'
	| 'addonWillPause'
	| 'addonWillRestart'
	| 'addonWillShutdown'
	| 'addonWillStart'
	| 'addonWillStop';

/**
 *
 * @param delegate
 * @param phase
 *
 * @category Addons
 */
export async function addonPhase<ArgsT = unknown>(
	phase: AddonPhase,
	delegate: AddonDelegate<ArgsT>,
	log?: Log
): Promise<boolean> {
	return invokeListeners<AddonPhase, AddonDelegate<ArgsT>>(phase, delegate, log);
}
