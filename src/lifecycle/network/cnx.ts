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

import type {LifecycleNetworkCnxPhase} from './cnx/phase';

/**
 * @category Lifecycle - Network Connections
 */
export class LifecycleNetworkCnx implements Record<LifecycleNetworkCnxPhase, boolean> {
	public cnxDidClose: boolean;
	public cnxDidConnect: boolean;
	public cnxDidDisconnect: boolean;
	public cnxDidFailClose: boolean;
	public cnxDidFailConnect: boolean;
	public cnxDidFailHandshake: boolean;
	public cnxDidFailReconnect: boolean;
	public cnxDidHandshake: boolean;
	public cnxDidInit: boolean;
	public cnxDidLoad: boolean;
	public cnxDidOpen: boolean;
	public cnxDidReconnect: boolean;
	public cnxDidStartConnect: boolean;
	public cnxDidStopConnect: boolean;
	public cnxDidStopReconnect: boolean;
	public cnxOnPing: boolean;
	public cnxOnPong: boolean;
	public cnxWillClose: boolean;
	public cnxWillConnect: boolean;
	public cnxWillDisconnect: boolean;
	public cnxWillHandshake: boolean;
	public cnxWillInit: boolean;
	public cnxWillLoad: boolean;
	public cnxWillOpen: boolean;
	public cnxWillReconnect: boolean;
	public cnxWillStartConnect: boolean;
	public cnxWillStopConnect: boolean;
	public cnxWillStopReconnect: boolean;

	constructor() {
		this.cnxDidClose = false;
		this.cnxDidConnect = false;
		this.cnxDidDisconnect = false;
		this.cnxDidFailClose = false;
		this.cnxDidFailConnect = false;
		this.cnxDidFailHandshake = false;
		this.cnxDidFailReconnect = false;
		this.cnxDidHandshake = false;
		this.cnxDidInit = false;
		this.cnxDidLoad = false;
		this.cnxDidOpen = false;
		this.cnxDidReconnect = false;
		this.cnxDidStartConnect = false;
		this.cnxDidStopConnect = false;
		this.cnxDidStopReconnect = false;
		this.cnxOnPing = false;
		this.cnxOnPong = false;
		this.cnxWillClose = false;
		this.cnxWillConnect = false;
		this.cnxWillDisconnect = false;
		this.cnxWillHandshake = false;
		this.cnxWillInit = false;
		this.cnxWillLoad = false;
		this.cnxWillOpen = false;
		this.cnxWillReconnect = false;
		this.cnxWillStartConnect = false;
		this.cnxWillStopConnect = false;
		this.cnxWillStopReconnect = false;
	}

	public reset(): void {
		this.cnxDidConnect = false;
		this.cnxDidDisconnect = false;
		this.cnxDidFailConnect = false;
		this.cnxDidFailHandshake = false;
		this.cnxDidFailReconnect = false;
		this.cnxDidHandshake = false;
		this.cnxDidInit = false;
		this.cnxDidLoad = false;
		this.cnxDidOpen = false;
		this.cnxDidReconnect = false;
		this.cnxDidStartConnect = false;
		this.cnxDidStopConnect = false;
		this.cnxWillClose = false;
		this.cnxWillConnect = false;
		this.cnxWillDisconnect = false;
		this.cnxWillHandshake = false;
		this.cnxWillInit = false;
		this.cnxWillLoad = false;
		this.cnxWillOpen = false;
		this.cnxWillReconnect = false;
		this.cnxWillStartConnect = false;
		this.cnxWillStopConnect = false;
		this.cnxWillStopReconnect = false;
	}
}
