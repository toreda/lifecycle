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

import type {CnxPhase} from './phase';

/**
 * Iterable collection of `CnxDelegate` phases.
 *
 * @category Connections
 */
export const cnxPhases = [
	'cnxDidClose',
	'cnxDidConnect',
	'cnxDidDisconnect',
	'cnxDidFailClose',
	'cnxDidFailConnect',
	'cnxDidFailHandshake',
	'cnxDidFailReconnect',
	'cnxDidHandshake',
	'cnxDidInit',
	'cnxDidLoad',
	'cnxDidOpen',
	'cnxDidPing',
	'cnxDidPong',
	'cnxDidRcvMsg',
	'cnxDidReconnect',
	'cnxDidReset',
	'cnxDidSndMsg',
	'cnxDidStartConnect',
	'cnxDidStopConnect',
	'cnxDidStopHandshake',
	'cnxDidStopReconnect',
	'cnxDidTimeout',
	'cnxWillClose',
	'cnxWillConnect',
	'cnxWillDisconnect',
	'cnxWillFailConnect',
	'cnxWillFailReconnect',
	'cnxWillHandshake',
	'cnxWillInit',
	'cnxWillLoad',
	'cnxWillOpen',
	'cnxWillReconnect',
	'cnxWillReset',
	'cnxWillStartConnect',
	'cnxWillStartHandshake',
	'cnxWillStartReconnect',
	'cnxWillStopConnect',
	'cnxWillStopHandshake',
	'cnxWillStopReconnect',
	'cnxWillTimeout'
] as const satisfies readonly CnxPhase[];

// Compile-time exhaustiveness check: every CnxPhase must appear in cnxPhases.
// If a new phase is added to CnxPhase but missing here, this line errors.
type _CnxPhaseMissing = Exclude<CnxPhase, (typeof cnxPhases)[number]>;
const _cnxPhasesExhaustive: [_CnxPhaseMissing] extends [never] ? true : never = true;
void _cnxPhasesExhaustive;
