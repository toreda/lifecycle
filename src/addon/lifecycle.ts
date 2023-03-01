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

import type {AddonFlags} from './flags';
import type {AddonPhase} from './phase';
import {Lifecycle} from '../lifecycle';

/**
 * @category Addon
 */
export class AddonLifecycle extends Lifecycle<AddonPhase> {
	constructor() {
		super();
	}

	public toData(): AddonFlags {
		return {
			didBecomeReady: this.get('didBecomeReady'),
			didEnterCache: this.get('didEnterCache'),
			didGainFocus: this.get('didGainFocus'),
			didInit: this.get('didInit'),
			didLeaveCache: this.get('didLeaveCache'),
			didLoad: this.get('didLoad'),
			didLoseFocus: this.get('didLoseFocus'),
			didPause: this.get('didPause'),
			didRestart: this.get('didRestart'),
			didShutdown: this.get('didShutdown'),
			didStart: this.get('didStart'),
			didStop: this.get('didStop'),
			didUnpause: this.get('didUnpause'),
			memoryWarning: this.get('memoryWarning'),
			onEnterCache: this.get('onEnterCache'),
			onInit: this.get('onInit'),
			onLeaveCache: this.get('onLeaveCache'),
			onLoad: this.get('onLoad'),
			onPause: this.get('onPause'),
			onReady: this.get('onReady'),
			onRestart: this.get('onRestart'),
			onShutdown: this.get('onShutdown'),
			onStart: this.get('onStart'),
			onStop: this.get('onStop'),
			onUnpause: this.get('onUnpause'),
			willBecomeReady: this.get('willBecomeReady'),
			willEnterCache: this.get('willEnterCache'),
			willGainFocus: this.get('willGainFocus'),
			willInit: this.get('willInit'),
			willLeaveCache: this.get('willLeaveCache'),
			willLoad: this.get('willLoad'),
			willLoseFocus: this.get('willLoseFocus'),
			willPause: this.get('willPause'),
			willRestart: this.get('willRestart'),
			willShutdown: this.get('willShutdown'),
			willStart: this.get('willStart'),
			willStop: this.get('willStop')
		};
	}
}
