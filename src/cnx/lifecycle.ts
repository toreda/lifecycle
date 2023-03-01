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

import type {CnxFlags} from './flags';
import type {CnxPhase} from './phase';
import {Lifecycle} from '../lifecycle';

/**
 * @category Connection
 */
export class CnxLifecycle extends Lifecycle<CnxPhase> {
	constructor() {
		super();
	}

	public toData(): CnxFlags {
		return {
			didClose: this.get('didClose'),
			didConnect: this.get('didConnect'),
			didDisconnect: this.get('didDisconnect'),
			didFailClose: this.get('didFailClose'),
			didFailConnect: this.get('didFailConnect'),
			didFailReconnect: this.get('didFailReconnect'),
			didInit: this.get('didInit'),
			didLoad: this.get('didLoad'),
			didOpen: this.get('didOpen'),
			didPing: this.get('didPing'),
			didPong: this.get('didPong'),
			didReconnect: this.get('didReconnect'),
			didReset: this.get('didReset'),
			didStartConnect: this.get('didStartConnect'),
			didStopConnect: this.get('didStopConnect'),
			didStopReconnect: this.get('didStopReconnect'),
			willClose: this.get('willClose'),
			willConnect: this.get('willConnect'),
			willDisconnect: this.get('willDisconnect'),
			willInit: this.get('willInit'),
			willLoad: this.get('willLoad'),
			willOpen: this.get('willOpen'),
			willReconnect: this.get('willReconnect'),
			willReset: this.get('willReset'),
			willStartConnect: this.get('willStartConnect'),
			willStopConnect: this.get('willStopReconnect'),
			willStopReconnect: this.get('willStopReconnect')
		};
	}
}
