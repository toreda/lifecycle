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

import type {EntityFlags} from './flags';
import type {EntityPhase} from './phase';
import {Lifecycle} from '../lifecycle';

/**
 * @category Entity
 */
export class EntityLifecycle extends Lifecycle<EntityPhase> {
	constructor() {
		super();
	}

	public toData(): EntityFlags {
		return {
			didChangeState: this.get('didChangeState'),
			didDespawn: this.get('didDespawn'),
			didHide: this.get('didHide'),
			didInit: this.get('didInit'),
			didLoad: this.get('didLoad'),
			didLoadAsset: this.get('didLoadAsset'),
			didMove: this.get('didMove'),
			didPause: this.get('didPause'),
			didPlayAnimation: this.get('didPlayAnimation'),
			didPlaySound: this.get('didPlaySound'),
			didShow: this.get('didShow'),
			didSpawn: this.get('didSpawn'),
			didStart: this.get('didStart'),
			didStop: this.get('didStop'),
			didUnpause: this.get('didUnpause'),
			willChangeState: this.get('willChangeState'),
			willDespawn: this.get('willDespawn'),
			willHide: this.get('willHide'),
			willInit: this.get('willInit'),
			willLoad: this.get('willLoad'),
			willLoadAsset: this.get('willLoadAsset'),
			willMove: this.get('willMove'),
			willPause: this.get('willPause'),
			willPlayAnimation: this.get('willPlayAnimation'),
			willPlaySound: this.get('willPlaySound'),
			willShow: this.get('willShow'),
			willSpawn: this.get('willSpawn'),
			willStart: this.get('willStart'),
			willStop: this.get('willStop'),
			willUnpause: this.get('willUnpause'),
			memoryWarning: this.get('memoryWarning')
		};
	}
}
