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

import {Log} from '@toreda/log';
import type {SceneDelegate} from './delegate';
import type {SceneFlags} from './flags';
import {canInvoke} from '../can/invoke';
import {invokeListener} from '../invoke/listener';

/**
 * Unique scene-related phase IDs.
 *
 * @category Scenes
 */
export type ScenePhase = Pick<
	SceneDelegate,
	| 'sceneDidAppear'
	| 'sceneDidBecomeReady'
	| 'sceneDidInit'
	| 'sceneDidLoad'
	| 'sceneDidReset'
	| 'sceneDidStart'
	| 'sceneDidStop'
	| 'sceneWillAppear'
	| 'sceneWillBecomeReady'
	| 'sceneWillInit'
	| 'sceneWillLoad'
	| 'scenewillReset'
	| 'sceneWillStart'
	| 'sceneWillStop'
>;

/**
 *
 * @param delegate
 * @param phase
 * @returns
 *
 * @category Addon
 */
export async function scenePhase(
	phase: keyof ScenePhase,
	delegate: SceneDelegate,
	log?: Log
): Promise<boolean> {
	if (!canInvoke<ScenePhase, SceneFlags, SceneDelegate>(phase, delegate, log)) {
		return false;
	}

	return invokeListener(phase, delegate, log);
}
