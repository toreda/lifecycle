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

import {Lifecycle} from '../lifecycle';
import type {ServerFlags} from './flags';
import type {ServerPhase} from './phase';

/**
 * Managed flags for lifecycle phases used by server-side lifecycle flows.
 *
 * @category Server
 */
export class ServerLifecycle extends Lifecycle<ServerPhase> {
	constructor() {
		super();
	}

	public toData(): ServerFlags {
		return {
			didBecomeReady: this.get('didBecomeReady'),
			didInit: this.get('didInit'),
			didLoad: this.get('didLoad'),
			didStart: this.get('didStart'),
			didStop: this.get('didStop'),
			didShutdown: this.get('didShutdown'),
			didRestart: this.get('didRestart'),
			onInit: this.get('onInit'),
			onLoad: this.get('onLoad'),
			onReady: this.get('onReady'),
			onRestart: this.get('onRestart'),
			onShutdown: this.get('onShutdown'),
			onStart: this.get('onStart'),
			onStop: this.get('onStop'),
			willBecomeReady: this.get('willBecomeReady'),
			willInit: this.get('willInit'),
			willLoad: this.get('willLoad'),
			willShutdown: this.get('willShutdown'),
			willStart: this.get('willStart'),
			willStop: this.get('willStop'),
			willRestart: this.get('willRestart')
		};
	}
}
