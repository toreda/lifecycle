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
import type {AddonDelegate} from './delegate';
import {canInvoke} from '../can/invoke';
import {invokeListener} from '../invoke/listener';

/**
 * Expressive type describing phase names used in client lifecycle flow.
 *
 * @category Addons
 */
export type AddonPhase = Pick<
	AddonDelegate,
	| 'didBecomeReady'
	| 'didGainFocus'
	| 'didInit'
	| 'didLoad'
	| 'didPause'
	| 'didLoseFocus'
	| 'didStart'
	| 'didStop'
	| 'didUnpause'
	| 'memoryWarning'
	| 'willBecomeReady'
	| 'willGainFocus'
	| 'willInit'
	| 'willLoad'
	| 'willLoseFocus'
	| 'willPause'
	| 'willShutdown'
	| 'willStart'
	| 'willStop'
>;

/**
 *
 * @param delegate
 * @param phase
 * @returns
 *
 * @category Addon
 */
export async function addonPhase(delegate: AddonDelegate, phase: keyof AddonPhase): Promise<boolean> {
	if (!canInvoke<AddonPhase, AddonDelegate>(phase, delegate)) {
		return false;
	}

	const ran = delegate.lifecycle.get(phase);
	if (ran !== true) {
		return false;
	}

	const result = await invokeListener(phase, delegate);

	return result;
}
