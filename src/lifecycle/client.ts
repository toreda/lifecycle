/**
 *	MIT License
 *
 *	Copyright (c) 2019 - 2022 Toreda, Inc.
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

import type {LifecycleClientData} from './client/data';

/**
 * Manages client lifecycle flow for owner. Tracks which phases have executed to prevent
 * multiple executions per phase.
 *
 * @category Lifecycle
 */
export class LifecycleClient {
	public didBecomeReady: boolean;
	public didGainFocus: boolean;
	public willInit: boolean;
	public didInit: boolean;
	public willLoad: boolean;
	public didLoad: boolean;
	public didLoseFocus: boolean;
	public didStart: boolean;
	public didUnpause: boolean;
	public memoryWarning: boolean;
	public onInit: boolean;
	public onLoad: boolean;
	public onReady: boolean;
	public onStart: boolean;
	public didPause: boolean;
	public willBecomeReady: boolean;
	public willGainFocus: boolean;
	public willLoseFocus: boolean;
	public willPause: boolean;
	public willStart: boolean;
	public willStop: boolean;

	constructor() {
		this.didBecomeReady = false;
		this.didGainFocus = false;
		this.didInit = false;
		this.didLoad = false;
		this.didLoseFocus = false;
		this.didStart = false;
		this.didUnpause = false;
		this.memoryWarning = false;
		this.onInit = false;
		this.onLoad = false;
		this.onReady = false;
		this.didPause = false;
		this.onStart = false;
		this.willBecomeReady = false;
		this.willGainFocus = false;
		this.willInit = false;
		this.willLoad = false;
		this.willLoseFocus = false;
		this.willPause = false;
		this.willStart = false;
		this.willStop = false;
	}

	/**
	 * Reset all phase properties to their starting value.
	 */
	public reset(): void {
		this.didBecomeReady = false;
		this.didGainFocus = false;
		this.didInit = false;
		this.didLoad = false;
		this.onInit = false;
		this.onLoad = false;
		this.onReady = false;
		this.onStart = false;

		this.didLoseFocus = false;
		this.didStart = false;
		this.didUnpause = false;
		this.memoryWarning = false;
		this.willBecomeReady = false;
		this.willGainFocus = false;
		this.willInit = false;
		this.willLoad = false;
		this.willLoseFocus = false;
		this.willPause = false;
		this.willStart = false;
		this.willStop = false;
		this.didPause = false;
	}

	public toData(): LifecycleClientData {
		return {
			didBecomeReady: this.didBecomeReady,
			didGainFocus: this.didGainFocus,
			didInit: this.didInit,
			didLoad: this.didLoad,
			didLoseFocus: this.didLoseFocus,
			didPause: this.didPause,
			didStart: this.didStart,
			didUnpause: this.didUnpause,
			memoryWarning: this.memoryWarning,
			onInit: this.onInit,
			onLoad: this.onLoad,
			onReady: this.onReady,
			onStart: this.onStart,
			willBecomeReady: this.willBecomeReady,
			willGainFocus: this.willGainFocus,
			willInit: this.willInit,
			willLoad: this.willLoad,
			willLoseFocus: this.willLoseFocus,
			willPause: this.willPause,
			willStart: this.willStart,
			willStop: this.willStop
		};
	}
}
