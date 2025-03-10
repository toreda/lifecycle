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

import {type AdapterDelegate} from './delegate';
import {Log} from '@toreda/log';
import {invokeListeners} from '../invoke/listeners';

/**
 * Adapter lifecycle phases.
 *
 * @category Adapters
 */
export type AdapterPhase =
	| 'adapterDidBecomeReady'
	| 'adapterDidBecomeSpawnable'
	| 'adapterDidClearCache'
	| 'adapterDidFetchAsset'
	| 'adapterDidFetchManifest'
	| 'adapterDidGainFocus'
	| 'adapterDidInit'
	| 'adapterDidLoad'
	| 'adapterDidLoadManifest'
	| 'adapterDidLoseFocus'
	| 'adapterDidParseManifest'
	| 'adapterDidPause'
	| 'adapterDidRegister'
	| 'adapterDidReset'
	| 'adapterDidSpawnInstance'
	| 'adapterDidStart'
	| 'adapterDidStop'
	| 'adapterDidSuspend'
	| 'adapterDidUnload'
	| 'adapterDidUnpause'
	| 'adapterDidUnregister'
	| 'adapterOnBecomeReady'
	| 'adapterOnBecomeSpawnable'
	| 'adapterOnClearCache'
	| 'adapterOnFetchAsset'
	| 'adapterOnFetchManifest'
	| 'adapterOnGainFocus'
	| 'adapterOnInit'
	| 'adapterOnLoad'
	| 'adapterOnLoadManifest'
	| 'adapterOnLoseFocus'
	| 'adapterOnParseManifest'
	| 'adapterOnPause'
	| 'adapterOnRegister'
	| 'adapterOnReset'
	| 'adapterOnSpawnInstance'
	| 'adapterOnStart'
	| 'adapterOnStop'
	| 'adapterOnSuspend'
	| 'adapterOnUnload'
	| 'adapterOnUnpause'
	| 'adapterOnUnregister'
	| 'adapterWillBecomeReady'
	| 'adapterWillBecomeSpawnable'
	| 'adapterWillClearCache'
	| 'adapterWillFetchAsset'
	| 'adapterWillFetchManifest'
	| 'adapterWillGainFocus'
	| 'adapterWillInit'
	| 'adapterWillLoad'
	| 'adapterWillLoadManifest'
	| 'adapterWillLoseFocus'
	| 'adapterWillParseManifest'
	| 'adapterWillPause'
	| 'adapterWillRegister'
	| 'adapterWillReset'
	| 'adapterWillSpawnInstance'
	| 'adapterWillStart'
	| 'adapterWillStop'
	| 'adapterWillSuspend'
	| 'adapterWillUnload'
	| 'adapterWillUnpause'
	| 'adapterWillUnregister';

/**
 *
 * @param delegate
 * @param phase
 *
 * @category Adapters
 */
export async function adapterPhase<ArgsT = unknown>(
	phase: AdapterPhase,
	delegate: AdapterDelegate<ArgsT> | AdapterDelegate<ArgsT>[],
	base?: Log
): Promise<boolean> {
	return invokeListeners<AdapterPhase, AdapterDelegate<ArgsT>>({
		phase: phase,
		delegate: delegate,
		base: base
	});
}
