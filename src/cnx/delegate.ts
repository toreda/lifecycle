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
import type {CnxPhase} from './phase';
import type {LifecycleDelegateCommon} from '../lifecycle/delegate/common';
import type {LifecycleListener} from '../lifecycle/listener';

/**
 * Delegate interface for classes implementing Network Client listeners.
 *
 * @category Connection
 */
export interface CnxDelegate<ArgsT = unknown> extends LifecycleDelegateCommon<CnxPhase, CnxFlags> {
	lifecycle: CnxLifecycle;
	didClose?: LifecycleListener<ArgsT>;
	didConnect?: LifecycleListener<ArgsT>;
	didDisconnect?: LifecycleListener<ArgsT>;
	didFailClose?: LifecycleListener<ArgsT>;
	didFailConnect?: LifecycleListener<ArgsT>;
	didFailHandshake?: LifecycleListener<ArgsT>;
	didFailReconnect?: LifecycleListener<ArgsT>;
	didHandshake?: LifecycleListener<ArgsT>;
	didInit?: LifecycleListener<ArgsT>;
	didLoad?: LifecycleListener<ArgsT>;
	didOpen?: LifecycleListener<ArgsT>;
	didPing?: LifecycleListener<ArgsT>;
	didPong?: LifecycleListener<ArgsT>;
	didRcvMsg?: LifecycleListener<ArgsT>;
	didReconnect?: LifecycleListener<ArgsT>;
	didReset?: LifecycleListener<ArgsT>;
	didSndMsg?: LifecycleListener<ArgsT>;
	didStartConnect?: LifecycleListener<ArgsT>;
	didStopConnect?: LifecycleListener<ArgsT>;
	didStopReconnect?: LifecycleListener<ArgsT>;
	willClose?: LifecycleListener<ArgsT>;
	willConnect?: LifecycleListener<ArgsT>;
	willDisconnect?: LifecycleListener<ArgsT>;
	willFailConnect?: LifecycleListener<ArgsT>;
	willFailReconnect?: LifecycleListener<ArgsT>;
	willHandshake?: LifecycleListener<ArgsT>;
	willInit?: LifecycleListener<ArgsT>;
	willLoad?: LifecycleListener<ArgsT>;
	willOpen?: LifecycleListener<ArgsT>;
	willReconnect?: LifecycleListener<ArgsT>;
	willReset?: LifecycleListener<ArgsT>;
	willStartConnect?: LifecycleListener<ArgsT>;
	willStartReconnect?: LifecycleListener<ArgsT>;
	willStopConnect?: LifecycleListener<ArgsT>;
	willStopReconnect?: LifecycleListener<ArgsT>;
}
