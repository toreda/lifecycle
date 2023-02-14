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



/**
 * @category Lifecycle
 */
export class LifecycleAddon {
	public willInit: boolean;
	public didInit: boolean;
	public willLoad: boolean;
	public didLoad: boolean;
	public willStart: boolean;
	public didStart: boolean;
	public willBecomeReady: boolean;
	public didBecomeReady: boolean;
	public willStop: boolean;
	public didStop: boolean;
	public willPause: boolean;
	public didUnpause: boolean;
	public memoryWarning: boolean;
	public didLoseFocus: boolean;
	public didGainFocus: boolean;
	public willGainFocus: boolean;
	public willLoseFocus: boolean;

	constructor() {
		this.didBecomeReady = false;
		this.didStart = false;
		this.didInit = false;
		this.didLoad = false;
		this.didStop = false;
		this.didUnpause = false;
		this.memoryWarning = false;
		this.willBecomeReady = false;
		this.willInit = false;
		this.willLoad = false;
		this.willPause = false;
		this.willStart = false;
		this.willStop = false;
		this.didGainFocus = false;
		this.willGainFocus = false;
		this.didLoseFocus = false;
		this.willLoseFocus = false;
	}

	/**
	 * Reset all phase properties to their starting value.
	 */
	public reset(): void {
		this.didBecomeReady = false;
		this.didInit = false;
		this.didLoad = false;
		this.didStop = false;
		this.didUnpause = false;
		this.memoryWarning = false;
		this.willBecomeReady = false;
		this.willInit = false;
		this.willLoad = false;
		this.willPause = false;
		this.willStart = false;
		this.willStop = false;
	}
}
