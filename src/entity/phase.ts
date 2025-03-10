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
	| 'entityDidGainFocus'
	| 'entityDidHide'
	| 'entityDidHover'
	| 'entityDidInit'
	| 'entityDidInteract'
	| 'entityDidLoad'
	| 'entityDidLoseFocus'
	| 'entityDidMove'
	| 'entityDidPause'
	| 'entityDidShow'
	| 'entityDidSpawn'
	| 'entityDidStart'
	| 'entityDidStop'
	| 'entityDidUnpause'
	| 'entityMemoryWarning'
	| 'entityOnDespawn'
	| 'entityOnGainFocus'
	| 'entityOnHover'
	| 'entityOnInteract'
	| 'entityOnLoad'
	| 'entityOnLoseFocus'
	| 'entityOnMove'
	| 'entityOnPause'
	| 'entityOnShow'
	| 'entityOnSpawn'
	| 'entityOnStart'
	| 'entityOnStop'
	| 'entityOnUnpause'
	| 'entityStateDidChange'
	| 'entityStateOnChange'
	| 'entityStateWillChange'
	| 'entityWillDespawn'
	| 'entityWillGainFocus'
	| 'entityWillHide'
	| 'entityWillHover'
	| 'entityWillInit'
	| 'entityWillInteract'
	| 'entityWillLoad'
	| 'entityWillLoseFocus'
	| 'entityWillMove'
	| 'entityWillPause'
	| 'entityWillShow'
	| 'entityWillSpawn'
	| 'entityWillStart'
	| 'entityWillStop'
	| 'entityWillUnpause'
	| 'orientationDidChange'
	| 'orientationOnChange'
	| 'orientationWillChange';

/**
 *
 * @param delegate
 * @param phase
 *
 * @category Entity
 */
export async function entityPhase<ArgsT = unknown>(
	phase: EntityPhase,
	delegate: EntityDelegate<ArgsT> | EntityDelegate<ArgsT>[],
	base?: Log
): Promise<boolean> {
	return invokeListeners<EntityPhase, EntityDelegate<ArgsT>>({
		phase: phase,
		delegate: delegate,
		base: base
	});
}
