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
			entityDidAppear: this.get('entityDidAppear'),
			entityDidDespawn: this.get('entityDidDespawn'),
			entityDidHide: this.get('entityDidHide'),
			entityDidInit: this.get('entityDidInit'),
			entityDidLoad: this.get('entityDidLoad'),
			entityDidSpawn: this.get('entityDidSpawn'),
			entityDidStart: this.get('entityDidStart'),
			entityDidStop: this.get('entityDidStop'),
			entityDidUnpause: this.get('entityDidUnpause'),
			entityWillAppear: this.get('entityWillAppear'),
			entityWillDespawn: this.get('entityWillDespawn'),
			entityWillHide: this.get('entityWillHide'),
			entityWillInit: this.get('entityWillInit'),
			entityWillLoad: this.get('entityWillLoad'),
			entityWillPause: this.get('entityWillPause'),
			entityWillSpawn: this.get('entityWillSpawn'),
			entityWillStart: this.get('entityWillStart'),
			entityWillStop: this.get('entityWillStop'),
			entityMemoryWarning: this.get('entityMemoryWarning')
		};
	}
}
