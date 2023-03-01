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
import {CnxLifecycle} from './lifecycle';
import {CnxPhase} from './phase';
import type {LifecycleDelegateCommon} from '../lifecycle/delegate/common';
import type {LifecycleListener} from '../lifecycle/listener';

/**
 * Delegate interface for classes implementing Network Client listeners.
 *
 * @category Connection
 */
export interface CnxDelegate<ArgsT = unknown> extends LifecycleDelegateCommon<CnxPhase, CnxFlags> {
	lifecycle: CnxLifecycle;
	cnxDidClose?: LifecycleListener<ArgsT>;
	cnxDidConnect?: LifecycleListener<ArgsT>;
	cnxDidDisconnect?: LifecycleListener<ArgsT>;
	cnxDidFailClose?: LifecycleListener<ArgsT>;
	cnxDidFailConnect?: LifecycleListener<ArgsT>;
	cnxDidFailHandshake?: LifecycleListener<ArgsT>;
	cnxDidFailReconnect?: LifecycleListener<ArgsT>;
	cnxDidHandshake?: LifecycleListener<ArgsT>;
	cnxDidInit?: LifecycleListener<ArgsT>;
	cnxDidLoad?: LifecycleListener<ArgsT>;
	cnxDidOpen?: LifecycleListener<ArgsT>;
	cnxDidPing?: LifecycleListener<ArgsT>;
	cnxDidPong?: LifecycleListener<ArgsT>;
	cnxDidRcvMsg?: LifecycleListener<ArgsT>;
	cnxDidReconnect?: LifecycleListener<ArgsT>;
	cnxDidReset?: LifecycleListener<ArgsT>;
	cnxDidSndMsg?: LifecycleListener<ArgsT>;
	cnxDidStartConnect?: LifecycleListener<ArgsT>;
	cnxDidStopConnect?: LifecycleListener<ArgsT>;
	cnxDidStopReconnect?: LifecycleListener<ArgsT>;
	cnxWillClose?: LifecycleListener<ArgsT>;
	cnxWillConnect?: LifecycleListener<ArgsT>;
	cnxWillDisconnect?: LifecycleListener<ArgsT>;
	cnxWillFailConnect?: LifecycleListener<ArgsT>;
	cnxWillFailReconnect?: LifecycleListener<ArgsT>;
	cnxWillHandshake?: LifecycleListener<ArgsT>;
	cnxWillInit?: LifecycleListener<ArgsT>;
	cnxWillLoad?: LifecycleListener<ArgsT>;
	cnxWillOpen?: LifecycleListener<ArgsT>;
	cnxWillReconnect?: LifecycleListener<ArgsT>;
	cnxWillReset?: LifecycleListener<ArgsT>;
	cnxWillStartConnect?: LifecycleListener<ArgsT>;
	cnxWillStartReconnect?: LifecycleListener<ArgsT>;
	cnxWillStopConnect?: LifecycleListener<ArgsT>;
	cnxWillStopReconnect?: LifecycleListener<ArgsT>;
}
