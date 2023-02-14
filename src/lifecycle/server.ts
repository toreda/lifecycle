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
import type {LifecycleServerData} from './server/data';
import {LifecycleServerPhase} from './server/phase';

/**
 * Managed flags for lifecycle phases used by server-side lifecycle flows.
 *
 * @category Lifecycle
 */
export class LifecycleServer extends Lifecycle<LifecycleServerPhase, LifecycleServerData> {
	constructor() {
		super([
			'didBecomeReady',
			'didInit',
			'didLoad',
			'didRestart',
			'didStart',
			'didStop',
			'onReady',
			'onRestart',
			'onStart',
			'onStop',
			'onInit',
			'onLoad',
			'willBecomeReady',
			'willInit',
			'willLoad',
			'willRestart',
			'willShutdown',
			'willStart',
			'willStop'
		]);
	}

	public toData(): LifecycleServerData {
		return {
			didBecomeReady: this.get('didBecomeReady') ?? false,
			didInit: this.get('didInit') ?? false,
			didLoad: this.get('didLoad') ?? false,
			didStart: this.get('didStart') ?? false,
			didStop: this.get('didStop') ?? false,
			didShutdown: this.get('didShutdown') ?? false,
			didRestart: this.get('didRestart') ?? false,
			onInit: this.get('onInit') ?? false,
			onLoad: this.get('onLoad') ?? false,
			onReady: this.get('onReady') ?? false,
			onRestart: this.get('onRestart') ?? false,
			onShutdown: this.get('onShutdown') ?? false,
			onStart: this.get('onStart') ?? false,
			onStop: this.get('onStop') ?? false,
			willBecomeReady: this.get('willBecomeReady') ?? false,
			willInit: this.get('willInit') ?? false,
			willLoad: this.get('willLoad') ?? false,
			willShutdown: this.get('willShutdown') ?? false,
			willStart: this.get('willStart') ?? false,
			willStop: this.get('willStop') ?? false,
			willRestart: this.get('willRestart') ?? false
		};
	}
}
