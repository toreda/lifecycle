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

import {CnxFlagsData} from './flags/data';
import type {CnxPhase} from './phase';
import {Lifecycle} from '../lifecycle';
import {cnxPhases} from './phases';

/**
 * @category Lifecycle - Network Connections
 */
export class CnxLifecycle extends Lifecycle<CnxPhase> {
	constructor() {
		super(cnxPhases);
	}

	public toData(): CnxFlagsData {
		return {
			cnxDidClose: this.get('cnxDidClose'),
			cnxDidConnect: this.get('cnxDidConnect'),
			cnxDidDisconnect: this.get('cnxDidDisconnect'),
			cnxDidFailClose: this.get('cnxDidFailClose'),
			cnxDidFailConnect: this.get('cnxDidFailConnect'),
			cnxDidFailReconnect: this.get('cnxDidFailReconnect'),
			cnxDidInit: this.get('cnxDidInit'),
			cnxDidLoad: this.get('cnxDidLoad'),
			cnxDidOpen: this.get('cnxDidOpen'),
			cnxDidPing: this.get('cnxDidPing'),
			cnxDidPong: this.get('cnxDidPong'),
			cnxDidReconnect: this.get('cnxDidReconnect'),
			cnxDidReset: this.get('cnxDidReset'),
			cnxDidStartConnect: this.get('cnxDidStartConnect'),
			cnxDidStopConnect: this.get('cnxDidStopConnect'),
			cnxDidStopReconnect: this.get('cnxDidStopReconnect'),
			cnxWillClose: this.get('cnxWillClose'),
			cnxWillConnect: this.get('cnxWillConnect'),
			cnxWillDisconnect: this.get('cnxWillDisconnect'),
			cnxWillInit: this.get('cnxWillInit'),
			cnxWillLoad: this.get('cnxWillLoad'),
			cnxWillOpen: this.get('cnxWillOpen'),
			cnxWillReconnect: this.get('cnxWillReconnect'),
			cnxWillReset: this.get('cnxWillReset'),
			cnxWillStartConnect: this.get('cnxWillStartConnect'),
			cnxWillStopConnect: this.get('cnxWillStopReconnect'),
			cnxWillStopReconnect: this.get('cnxWillStopReconnect')
		};
	}
}
