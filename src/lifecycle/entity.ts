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
export class LifecycleEntity {
	public entityWillInit: boolean;
	public entityDidInit: boolean;

	public sceneWillLoad: boolean;
	public sceneDidLoad: boolean;

	public entityWillLoad: boolean;
	public entityDidLoad: boolean;

	public entityWillSpawn: boolean;
	public entityDidSpawn: boolean;

	public entityWillAppear: boolean;
	public entityDidAppear: boolean;

	public sceneWillStart: boolean;
	public sceneDidStart: boolean;

	public entityWillStart: boolean;
	public entityDidStart: boolean;

	public sceneWillPause: boolean;

	public entityWillPause: boolean;

	public sceneDidUnpause: boolean;

	public entityDidUnpause: boolean;

	public entityWillHide: boolean;
	public entityDidHide: boolean;

	public entityWillDespawn: boolean;
	public entityDidDespawn: boolean;

	public sceneWillStop: boolean;

	public entityWillStop: boolean;
	public entityDidStop: boolean;

	constructor() {
		this.entityWillInit = false;
		this.entityDidInit = false;

		this.sceneWillLoad = false;
		this.sceneDidLoad = false;

		this.entityWillLoad = false;
		this.entityDidLoad = false;

		this.entityWillSpawn = false;
		this.entityDidSpawn = false;

		this.entityWillAppear = false;
		this.entityDidAppear = false;

		this.sceneWillStart = false;
		this.sceneDidStart = false;

		this.entityWillStart = false;
		this.entityDidStart = false;

		this.sceneWillPause = false;

		this.entityWillPause = false;

		this.sceneDidUnpause = false;

		this.entityDidUnpause = false;

		this.entityWillHide = false;
		this.entityDidHide = false;

		this.entityWillDespawn = false;
		this.entityDidDespawn = false;

		this.sceneWillStop = false;

		this.entityWillStop = false;
		this.entityDidStop = false;
	}

	/**
	 * Reset all phase properties to their starting value.
	 */
	public reset(): void {
		this.entityWillInit = false;
		this.entityDidInit = false;

		this.sceneWillLoad = false;
		this.sceneDidLoad = false;

		this.entityWillLoad = false;
		this.entityDidLoad = false;

		this.entityWillSpawn = false;
		this.entityDidSpawn = false;

		this.entityWillAppear = false;
		this.entityDidAppear = false;

		this.sceneWillStart = false;
		this.sceneDidStart = false;

		this.entityWillStart = false;
		this.entityDidStart = false;

		this.sceneWillPause = false;

		this.entityWillPause = false;

		this.sceneDidUnpause = false;

		this.entityDidUnpause = false;

		this.entityWillHide = false;
		this.entityDidHide = false;

		this.entityWillDespawn = false;
		this.entityDidDespawn = false;

		this.sceneWillStop = false;

		this.entityWillStop = false;
		this.entityDidStop = false;
	}
}
