/**
 *	MIT License
 *
 *	Copyright (c) 2019 – 2025 Toreda, Inc.
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

/**
 * Lifecycle listener implementation for game engine scenes.
 *
 * @category Scene
 */
export interface SceneDelegate<PhaseT, ArgsT = unknown> extends LifecycleDelegateCommon<PhaseT> {
	/**
	 * Scene and all children finished the 'ready' lifecycle phase.
	 */
	sceneDidBecomeReady?: LifecycleListener<ArgsT>;
	/**
	 * Scene was hidden.
	 */
	sceneDidHide?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children finished the 'init' lifecycle phase.
	 */
	sceneDidInit?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children finished the 'load' lifecycle phase.
	 */
	sceneDidLoad?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children were paused by game engine.
	 */
	sceneDidPause?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children were reset to initial state.
	 */
	sceneDidReset?: LifecycleListener<ArgsT>;
	/**
	 * Scene was hidden and is now visible.
	 */
	sceneDidShow?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children will finished the 'start' lifecycle phase.
	 */
	sceneDidStart?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children were stopped by game engine.
	 */
	sceneDidStop?: LifecycleListener<ArgsT>;
	/**
	 * Scene is stopping now.
	 *
	 */
	sceneOnStop?: LifecycleListener<ArgsT>;
	/**
	 * Scene is starting now.
	 */
	sceneOnStart?: LifecycleListener<ArgsT>;
	/**
	 * Scene is initializing now.
	 */
	sceneOnInit?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children are paused and were unpaused.
	 */
	sceneDidUnpause?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children will begin the 'ready' lifecycle phase.
	 */
	sceneWillBecomeReady?: LifecycleListener<ArgsT>;
	/**
	 * Scene is becoming ready now.
	 */
	sceneOnReady?: LifecycleListener<ArgsT>;
	/**
	 * Scene is unpausing now.
	 */
	sceneOnUnpause?: LifecycleListener<ArgsT>;
	/**
	 * Scene is visible and will be hidden.
	 */
	sceneWillHide?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children will begin the 'init' lifecycle phase.
	 */
	sceneWillInit?: LifecycleListener<ArgsT>;
	/**
	 * Scene is loading now.
	 */
	sceneOnLoad?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children will begin the 'load' lifecycle phase.
	 */
	sceneWillLoad?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children are running will be paused by game engine.
	 */
	sceneWillPause?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children will reset and should return to initial states.
	 */
	sceneWillReset?: LifecycleListener<ArgsT>;
	/**
	 * Scene is resetting now.
	 */
	sceneOnReset?: LifecycleListener<ArgsT>;
	/**
	 * Scene is showing now.
	 */
	sceneOnShow?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children are hidden and will be visible.
	 */
	sceneWillShow?: LifecycleListener<ArgsT>;
	/**
	 * Scene and all children will be started.
	 */
	sceneWillStart?: LifecycleListener<ArgsT>;
	/**
	 * Scene will be stopped immediately.
	 */
	sceneWillStop?: LifecycleListener<ArgsT>;
	/**
	 * Scene is paused and will be unpaused by the game engine.
	 */
	sceneWillUnpause?: LifecycleListener<ArgsT>;
	/**
	 * Scene is pausing now.
	 */
	sceneOnPause?: LifecycleListener<ArgsT>;
	/**
	 * Scene is hiding now.
	 */
	sceneOnHide?: LifecycleListener<ArgsT>;
	/**
	 * Low memory warning relayed from the underlying system. Clear any volatile/cached
	 * assets which can safely be destroyed and recreated again later.
	 */
	sceneMemoryWarning?: LifecycleListener<ArgsT>;
}
