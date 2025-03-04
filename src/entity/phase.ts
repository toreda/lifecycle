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

import type {EntityDelegate} from './delegate';
import {Log} from '@toreda/log';
import {invokeListeners} from '../invoke/listeners';

/**
 * Identifiers for each phase in the Entity Lifecycle flow.
 *
 * @category Entities
 */
export type EntityPhase =
	| 'entityDidDespawn'
	| 'entityDidHide'
	| 'entityDidHover'
	| 'entityDidInit'
	| 'entityDidInteract'
	| 'entityDidLoad'
	| 'entityDidMove'
	| 'entityDidPause'
	| 'entityDidShow'
	| 'entityDidSpawn'
	| 'entityDidStart'
	| 'entityDidStop'
	| 'entityDidUnpause'
	| 'entityMemoryWarning'
	| 'entityOnDespawn'
	| 'entityOnHover'
	| 'entityOnInteract'
	| 'entityOnLoad'
	| 'entityOnMove'
	| 'entityOnPause'
	| 'entityOnShow'
	| 'entityOnSpawn'
	| 'entityOnStart'
	| 'entityOnStop'
	| 'entityOnUnpause'
	| 'orientationDidChange'
	| 'orientationOnChange'
	| 'orientationWillChange'
	| 'entityStateDidChange'
	| 'entityStateOnChange'
	| 'entityStateWillChange'
	| 'entityWillDespawn'
	| 'entityWillHide'
	| 'entityWillHover'
	| 'entityWillInit'
	| 'entityWillInteract'
	| 'entityWillLoad'
	| 'entityWillMove'
	| 'entityWillPause'
	| 'entityWillShow'
	| 'entityWillSpawn'
	| 'entityWillStart'
	| 'entityWillStop'
	| 'entityWillUnpause';

/**
 *
 * @param delegate
 * @param phase
 * @returns
 *
 * @category Entity
 */
export async function entityPhase<ArgsT = unknown>(
	phase: EntityPhase,
	delegate: EntityDelegate<ArgsT>,
	log?: Log
): Promise<boolean> {
	return invokeListeners<EntityPhase, EntityDelegate<ArgsT>>(phase, delegate, log);
}
