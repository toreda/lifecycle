/**
 *	MIT License
 *
 *	Copyright (c) 2019 – 2026 Toreda, Inc.
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

import type {AddonPhase} from './phase';

/**
 * Iterable collection of `AddonDelegate` phases.
 *
 * @category Addons
 */
export const addonPhases = [
	'addonCacheDidEnter',
	'addonCacheDidLeave',
	'addonCacheOnEnter',
	'addonCacheOnLeave',
	'addonCacheWillEnter',
	'addonCacheWillLeave',
	'addonDidBecomeReady',
	'addonDidChangeCfg',
	'addonDidChangeState',
	'addonDidFetchAsset',
	'addonDidFetchManifest',
	'addonDidGainFocus',
	'addonDidInit',
	'addonDidLoad',
	'addonDidLoadManifest',
	'addonDidLoseFocus',
	'addonDidParseManifest',
	'addonDidPause',
	'addonDidRestart',
	'addonDidShutdown',
	'addonDidStart',
	'addonDidStop',
	'addonDidUnpause',
	'addonInstanceDidSpawn',
	'addonInstanceOnSpawn',
	'addonInstanceWillSpawn',
	'addonOnBecomeReady',
	'addonOnChangeCfg',
	'addonOnChangeState',
	'addonOnFetchAsset',
	'addonOnFetchManifest',
	'addonOnGainFocus',
	'addonOnInit',
	'addonOnLoad',
	'addonOnLoadManifest',
	'addonOnLoseFocus',
	'addonOnMemoryWarning',
	'addonOnParseManifest',
	'addonOnPause',
	'addonOnRestart',
	'addonOnShutdown',
	'addonOnStart',
	'addonOnStop',
	'addonOnUnpause',
	'addonWillBecomeReady',
	'addonWillChangeCfg',
	'addonWillChangeState',
	'addonWillFetchAsset',
	'addonWillFetchManifest',
	'addonWillGainFocus',
	'addonWillInit',
	'addonWillLoad',
	'addonWillLoadManifest',
	'addonWillLoseFocus',
	'addonWillParseManifest',
	'addonWillPause',
	'addonWillRestart',
	'addonWillShutdown',
	'addonWillStart',
	'addonWillStop',
	'addonWillUnpause'
] as const satisfies readonly AddonPhase[];

// Compile-time exhaustiveness check: every AddonPhase must appear in addonPhases.
// If a new phase is added to AddonPhase but missing here, this line errors.
type _AddonPhaseMissing = Exclude<AddonPhase, (typeof addonPhases)[number]>;
const _addonPhasesExhaustive: [_AddonPhaseMissing] extends [never] ? true : never = true;
void _addonPhasesExhaustive;
