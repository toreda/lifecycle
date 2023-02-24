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
import {canInvoke} from '../can/invoke';
import {invokeListener} from '../invoke/listener';

/**
 * Identifiers for each phase in the Entity Lifecycle flow.
 *
 * @category Entities
 */
export type EntityPhase = Pick<
	EntityDelegate<unknown>,
	| 'entityDidAppear'
	| 'entityDidDespawn'
	| 'entityDidHide'
	| 'entityDidInit'
	| 'entityDidLoad'
	| 'entityDidSpawn'
	| 'entityDidStart'
	| 'entityDidStop'
	| 'entityDidUnpause'
	| 'entityWillAppear'
	| 'entityWillDespawn'
	| 'entityWillHide'
	| 'entityWillInit'
	| 'entityWillLoad'
	| 'entityWillPause'
	| 'entityWillSpawn'
	| 'entityWillStart'
	| 'entityWillStop'
	| 'entityMemoryWarning'
>;

/**
 *
 * @param delegate
 * @param phase
 * @returns
 *
 * @category Connection
 */
export async function entityPhase(delegate: EntityDelegate, phase: keyof EntityPhase): Promise<boolean> {
	if (!canInvoke<EntityPhase, EntityDelegate>(delegate, phase)) {
		return false;
	}

	const ran = delegate.lifecycle.get(phase);
	if (ran === true) {
		return false;
	}

	const result = await invokeListener(delegate[phase]);
	delegate.lifecycle.set(phase, true);

	return result;
}
