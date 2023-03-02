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
import type {SceneFlags} from './flags';
import type {ScenePhase} from './phase';

/**
 * Managed flags for lifecycle phases used by game engine Scenes.
 *
 * @category Scene
 */
export class SceneLifecycle extends Lifecycle<ScenePhase> {
	constructor() {
		super();
	}

	public toData(): SceneFlags {
		return {
			didBecomeReady: this.get('didBecomeReady'),
			didHide: this.get('didHide'),
			didInit: this.get('didInit'),
			didLoad: this.get('didLoad'),
			didPause: this.get('didPause'),
			didReset: this.get('didReset'),
			didShow: this.get('didShow'),
			didStart: this.get('didStart'),
			didStop: this.get('didStop'),
			didUnpause: this.get('didUnpause'),
			willBecomeReady: this.get('willBecomeReady'),
			willHide: this.get('willHide'),
			willInit: this.get('willInit'),
			willLoad: this.get('willLoad'),
			willPause: this.get('willPause'),
			willReset: this.get('willReset'),
			willShow: this.get('willShow'),
			willStart: this.get('willStart'),
			willStop: this.get('willStop'),
			willUnpause: this.get('willUnpause')
		};
	}
}
