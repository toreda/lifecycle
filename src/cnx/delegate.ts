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

import {CnxLifecycle} from './lifecycle';
import type {LifecycleListener} from '../lifecycle/listener';

/**
 * Delegate interface for classes implementing Network Client listeners.
 *
 * @category Connection
 */
export interface CnxDelegate<ArgT = unknown> {
	lifecycle: CnxLifecycle;
	cnxDidClose?: LifecycleListener<ArgT>;
	cnxDidConnect?: LifecycleListener<ArgT>;
	cnxDidDisconnect?: LifecycleListener<ArgT>;
	cnxDidFailClose?: LifecycleListener<ArgT>;
	cnxDidFailConnect?: LifecycleListener<ArgT>;
	cnxDidFailHandshake?: LifecycleListener<ArgT>;
	cnxDidFailReconnect?: LifecycleListener<ArgT>;
	cnxDidHandshake?: LifecycleListener<ArgT>;
	cnxDidInit?: LifecycleListener<ArgT>;
	cnxDidLoad?: LifecycleListener<ArgT>;
	cnxDidOpen?: LifecycleListener<ArgT>;
	cnxDidRcvMsg?: LifecycleListener<ArgT>;
	cnxDidReconnect?: LifecycleListener<ArgT>;
	cnxDidSndMsg?: LifecycleListener<ArgT>;
	cnxDidStartConnect?: LifecycleListener<ArgT>;
	cnxDidStopConnect?: LifecycleListener<ArgT>;
	cnxDidStopReconnect?: LifecycleListener<ArgT>;
	cnxOnPing?: LifecycleListener<ArgT>;
	cnxOnPong?: LifecycleListener<ArgT>;
	cnxWillClose?: LifecycleListener<ArgT>;
	cnxWillDisconnect?: LifecycleListener<ArgT>;
	cnxWillFailConnect?: LifecycleListener<ArgT>;
	cnxWillFailReconnect?: LifecycleListener<ArgT>;
	cnxWillHandshake?: LifecycleListener<ArgT>;
	cnxWillInit?: LifecycleListener<ArgT>;
	cnxWillLoad?: LifecycleListener<ArgT>;
	cnxWillOpen?: LifecycleListener<ArgT>;
	cnxWillReconnect?: LifecycleListener<ArgT>;
	cnxWillStartConnect?: LifecycleListener<ArgT>;
	cnxWillStartReconnect?: LifecycleListener<ArgT>;
	cnxWillStopConnect?: LifecycleListener<ArgT>;
	cnxWillStopReconnect?: LifecycleListener<ArgT>;
}
