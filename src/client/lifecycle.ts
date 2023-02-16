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

import type {ClientFlags} from './flags';
import type {ClientPhase} from './phase';
import {Lifecycle} from '../lifecycle';
import {clientPhases} from './phases';

/**
 * Manages client lifecycle flow for owner. Tracks which phases have executed to prevent
 * multiple executions per phase.
 *
 * @category Client
 */
export class ClientLifecycle extends Lifecycle<ClientPhase> {
	constructor() {
		super(clientPhases);
	}

	public toData(): ClientFlags {
		return {
			didBecomeReady: this.get('didBecomeReady'),
			didGainFocus: this.get('didGainFocus'),
			didInit: this.get('didInit'),
			didLoad: this.get('didLoad'),
			didLoseFocus: this.get('didLoseFocus'),
			didPause: this.get('didPause'),
			didStart: this.get('didStart'),
			didStop: this.get('didStop'),
			didUnpause: this.get('didUnpause'),
			memoryWarning: this.get('memoryWarning'),
			onInit: this.get('onInit'),
			onLoad: this.get('onLoad'),
			onReady: this.get('onReady'),
			onStart: this.get('onStart'),
			willBecomeReady: this.get('willBecomeReady'),
			willGainFocus: this.get('willGainFocus'),
			willInit: this.get('willInit'),
			willLoad: this.get('willLoad'),
			willLoseFocus: this.get('willLoseFocus'),
			willPause: this.get('willPause'),
			willStart: this.get('willStart'),
			willStop: this.get('willStop')
		};
	}
}
