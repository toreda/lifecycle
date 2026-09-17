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

import {type ClientPhase} from './phase';

/**
 * Iterable collection of client phases.
 *
 * @category Clients
 */
export const clientPhases = [
	'clientDidBecomeReady',
	'clientDidGainFocus',
	'clientDidInit',
	'clientDidLoad',
	'clientDidLoseFocus',
	'clientDidPause',
	'clientDidShutdown',
	'clientDidStart',
	'clientDidStop',
	'clientDidUnpause',
	'clientOnBecomeReady',
	'clientOnGainFocus',
	'clientOnInit',
	'clientOnLoad',
	'clientOnLoseFocus',
	'clientOnMemoryWarning',
	'clientOnPause',
	'clientOnShutdown',
	'clientOnStart',
	'clientOnStop',
	'clientOnUnpause',
	'clientWillBecomeReady',
	'clientWillGainFocus',
	'clientWillInit',
	'clientWillLoad',
	'clientWillLoseFocus',
	'clientWillPause',
	'clientWillShutdown',
	'clientWillStart',
	'clientWillStop',
	'clientWillUnpause'
] as const satisfies readonly ClientPhase[];

// Compile-time exhaustiveness check: every ClientPhase must appear in clientPhases.
// If a new phase is added to ClientPhase but missing here, this line errors.
type _ClientPhaseMissing = Exclude<ClientPhase, (typeof clientPhases)[number]>;
const _clientPhasesExhaustive: [_ClientPhaseMissing] extends [never] ? true : never = true;
void _clientPhasesExhaustive;
