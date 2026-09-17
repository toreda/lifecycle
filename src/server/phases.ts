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

import type {ServerPhase} from './phase';

/**
 * Iterable collection of `ServerDelegate` phases.
 *
 * @category Server
 */
export const serverPhases = [
	'serverDidAcceptClient',
	'serverDidAcceptConnection',
	'serverDidAddClient',
	'serverDidAddConnection',
	'serverDidBecomeReady',
	'serverDidCloseConnection',
	'serverDidDropConnection',
	'serverDidInit',
	'serverDidLoad',
	'serverDidRemoveClient',
	'serverDidRemoveConnection',
	'serverDidRestart',
	'serverDidShutdown',
	'serverDidStart',
	'serverDidStop',
	'serverOnAcceptClient',
	'serverOnAcceptConnection',
	'serverOnAddClient',
	'serverOnAddConnection',
	'serverOnBecomeReady',
	'serverOnCloseConnection',
	'serverOnDropConnection',
	'serverOnInit',
	'serverOnLoad',
	'serverOnRemoveClient',
	'serverOnRemoveConnection',
	'serverOnRestart',
	'serverOnShutdown',
	'serverOnStart',
	'serverOnStop',
	'serverWillAcceptClient',
	'serverWillAcceptConnection',
	'serverWillAddClient',
	'serverWillAddConnection',
	'serverWillBecomeReady',
	'serverWillCloseConnection',
	'serverWillDropConnection',
	'serverWillInit',
	'serverWillLoad',
	'serverWillRemoveClient',
	'serverWillRemoveConnection',
	'serverWillRestart',
	'serverWillShutdown',
	'serverWillStart',
	'serverWillStop'
] as const satisfies readonly ServerPhase[];

// Compile-time exhaustiveness check: every ServerPhase must appear in serverPhases.
// If a new phase is added to ServerPhase but missing here, this line errors.
type _ServerPhaseMissing = Exclude<ServerPhase, (typeof serverPhases)[number]>;
const _serverPhasesExhaustive: [_ServerPhaseMissing] extends [never] ? true : never = true;
void _serverPhasesExhaustive;
