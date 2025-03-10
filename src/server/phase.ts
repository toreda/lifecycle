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

import {Log} from '@toreda/log';
import type {ServerDelegate} from './delegate';
import {invokeListeners} from '../invoke/listeners';

/**
 * Type describing phase names used in server lifecycle flow.
 *
 * @category Server
 */
export type ServerPhase =
	| 'serverDidAcceptConnection'
	| 'serverDidAddClient'
	| 'serverDidBecomeReady'
	| 'serverDidCloseConnection'
	| 'serverDidDropConnection'
	| 'serverDidDropConnection'
	| 'serverDidInit'
	| 'serverDidLoad'
	| 'serverDidRemoveClient'
	| 'serverDidRemoveConnection'
	| 'serverDidRestart'
	| 'serverDidShutdown'
	| 'serverDidStart'
	| 'serverDidStop'
	| 'serverOnAcceptClient'
	| 'serverOnAcceptConnection'
	| 'serverOnAddClient'
	| 'serverOnBecomeReady'
	| 'serverOnCloseConnection'
	| 'serverOnDropConnection'
	| 'serverOnInit'
	| 'serverOnLoad'
	| 'serverOnReady'
	| 'serverOnRemoveClient'
	| 'serverOnRemoveConnection'
	| 'serverOnRestart'
	| 'serverOnShutdown'
	| 'serverOnStart'
	| 'serverOnStop'
	| 'serverWillAcceptClient'
	| 'serverWillAcceptConnection'
	| 'serverWillAddClient'
	| 'serverWillAddConnection'
	| 'serverWillBecomeReady'
	| 'serverWillCloseConnection'
	| 'serverWillDropConnection'
	| 'serverWillInit'
	| 'serverWillLoad'
	| 'serverWillRemoveClient'
	| 'serverWillRemoveConnection'
	| 'serverWillRestart'
	| 'serverWillShutdown'
	| 'serverWillStart'
	| 'serverWillStop';

/**
 *
 * @param delegate
 * @param phase
 *
 * @category Server
 */
export async function serverPhase<ArgsT = unknown>(
	phase: ServerPhase,
	delegate: ServerDelegate<ArgsT> | ServerDelegate<ArgsT>[],
	base?: Log
): Promise<boolean> {
	return invokeListeners<ServerPhase, ServerDelegate<ArgsT>>({
		phase: phase,
		delegate: delegate,
		base: base
	});
}
