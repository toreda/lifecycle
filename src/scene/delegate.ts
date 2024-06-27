/**
 *	MIT License
 *
 *	Copyright (c) 2019 – 2024 Toreda, Inc.
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

import type {LifecycleDelegateCommon} from '../lifecycle/delegate/common';
import type {LifecycleListener} from '../lifecycle/listener';
import type {ScenePhase} from '../scene/phase';

/**
 * Lifecycle listener implementation for game engine scenes.
 *
 * @category Scene
 */
export interface SceneDelegate<ArgsT = unknown> extends LifecycleDelegateCommon<ScenePhase> {
	/**
	 * Scene and all children finished the 'ready' lifecycle phase.
	 */
	didBecomeReady?: LifecycleListener<ArgsT>;
	/**
	 * Scene was hidden.
	 */
	didHide?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children finished the 'init' lifecycle phase.
	 */
	didInit?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children finished the 'load' lifecycle phase.
	 */
	didLoad?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children were paused by game engine.
	 */
	didPause?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children were reset to initial state.
	 */
	didReset?: LifecycleListener<ArgsT>;
	/**
	 * Scene was hidden and is now visible.
	 */
	didShow?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children will finished the 'start' lifecycle phase.
	 */
	didStart?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children were stopped by game engine.
	 */
	didStop?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children are paused and were unpaused.
	 */
	didUnpause?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children will begin the 'ready' lifecycle phase.
	 */
	willBecomeReady?: LifecycleListener<ArgsT>;
	/**
	 * Scene is visible and will be hidden.
	 */
	willHide?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children will begin the 'init' lifecycle phase.
	 */
	willInit?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children will begin the 'load' lifecycle phase.
	 */
	willLoad?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children are running will be paused by game engine.
	 */
	willPause?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children will reset and should return to initial states.
	 */
	willReset?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children are hidden and will be visible.
	 */
	willShow?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children will be started.
	 */
	willStart?: LifecycleListener<ArgsT>;
	/**
	 * Scene will be stopped immediately.
	 */
	willStop?: LifecycleListener<ArgsT>;
	/**
	 * Scene is paused and will be unpaused by the game engine.
	 */
	willUnpause?: LifecycleListener<ArgsT>;
	/**
	 * Low memory warning relayed from the underlying system. Clear any volatile/cached
	 * assets which can safely be destroyed and recreated again later.
	 */
	memoryWarning?: LifecycleListener<ArgsT>;
}
