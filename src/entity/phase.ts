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

import type {EntityDelegate} from './delegate';
import type {EntityFlags} from './flags';
import {canInvoke} from '../can/invoke';
import {invokeListener} from '../invoke/listener';

/**
 * Identifiers for each phase in the Entity Lifecycle flow.
 *
 * @category Entity
 */
export type EntityPhase = Pick<
	EntityDelegate<unknown>,
	| 'didAppear'
	| 'didDespawn'
	| 'didHide'
	| 'didInit'
	| 'didLoad'
	| 'didSpawn'
	| 'didStart'
	| 'didStop'
	| 'didUnpause'
	| 'willAppear'
	| 'willDespawn'
	| 'willHide'
	| 'willInit'
	| 'willLoad'
	| 'willPause'
	| 'willSpawn'
	| 'willStart'
	| 'willStop'
	| 'memoryWarning'
>;

/**
 *
 * @param delegate
 * @param phase
 * @returns
 *
 * @category Connection
 */
export async function entityPhase(phase: keyof EntityPhase, delegate: EntityDelegate): Promise<boolean> {
	if (!canInvoke<EntityPhase, EntityFlags, EntityDelegate>(phase, delegate)) {
		return false;
	}

	return invokeListener<EntityPhase, EntityFlags, EntityDelegate>(phase, delegate);
}
