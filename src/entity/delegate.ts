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


import {type LifecycleDelegateCommon} from '../lifecycle/delegate/common';
import {type LifecycleListener} from '../lifecycle/listener';;

/**
 *
 * @category Entity
 */
export interface EntityDelegate<ArgsT = unknown> extends LifecycleDelegateCommon<any>
{

	/**
	 * Entity is about to initialize. Handle internal
	 * init and setup only. Do not contact or rely
	 * on other entities during this phase, because
	 * they are not guaranteed to exist yet.
	 */
	entityInit?: LifecycleListener<ArgsT>;
	entityStateWillChange?: LifecycleListener<ArgsT>;
	entityStateDidChange?: LifecycleListener<ArgsT>;
	entityStateOnChange?: LifecycleListener<ArgsT>;
	entityWillMove?: LifecycleListener<ArgsT>;
	entityDidMove?: LifecycleListener<ArgsT>;
	entityOnMove?: LifecycleListener<ArgsT>;
	/**
	 * Entity just finished init. Now you can
	 * add listeners, reach out to other objects.
	 */
	entityDidInit?: LifecycleListener<ArgsT>;

	/**
	 * Entity is entering load phase.
	 * Start loading required textures & resources.
	 */
	entityWillLoad?: LifecycleListener<ArgsT>;
	/**
	 * Entity just finished load phase.
	 * Handle any post-load cleanup, or settings.
	 */
	entityDidLoad?: LifecycleListener<ArgsT>;

	/**
	 * Entity is about to spawn in the world.
	 * Do any required prep work such as
	 * alpha change, settings, etc.
	 */
	entityWillSpawn?: LifecycleListener<ArgsT>;
	/** Entity spawned in scene. */
	enntityDidSpawn?: LifecycleListener<ArgsT>;
	entityOnSpawn?: LifecycleListener<ArgsT>;
	/**
	 * Entity is about to start running and it'sonUpdate
	 * method will be called on each frame.
	 */
	entityWillStart?: LifecycleListener<ArgsT>;
	/**
	 * Entity just started running and it's onUpdate
	 * method is now being called once per frame
	 */
	entityDidStart?: LifecycleListener<ArgsT>;

	/** Entity will be paused. */
	entityWillPause?: LifecycleListener<ArgsT>;
	entityWillUnpause?: LifecycleListener<ArgsT>;
	/** Entity just unpaused. */
	entityDidUnpause?: LifecycleListener<ArgsT>;
	entityMemoryWarning?: LifecycleListener<ArgsT>;
	entityDidPause?: LifecycleListener<ArgsT>;
	/** Entity is about to be hidden, but is still active. */
	entityWillHide?: LifecycleListener<ArgsT>;
	/** Entity was hidden, but is still active. */
	entityDidHide?: LifecycleListener<ArgsT>;
	/** Execute entity load logic. */
	entityOnLoad?: LifecycleListener<ArgsT>;
	entityDidShow?: LifecycleListener<ArgsT>;
	entityWillShow?: LifecycleListener<ArgsT>;
	/** Entity is about to be removed from scene. */
	entityWillDespawn?: LifecycleListener<ArgsT>;
	/**
	 * Entity was removed from scene and has been
	 * paused. Last opportunity to perform cleanup
	 * work before entity is recycled into the entity pool.
	 */
	entityDidDespawn?: LifecycleListener<ArgsT>;
	/**
	 * Entity is about to stop. It's onUpdate
	 * method will no longer be called each frame.
	 */
	entityWillStop?: LifecycleListener<ArgsT>;
	/**
	 * Entity just stopped and it's onUpdate
	 * method is no longer being called each frame
	 */
	entityDidStop?: LifecycleListener<ArgsT>;
	entityOnStop?: LifecycleListener<ArgsT>;
	entityOnStart?: LifecycleListener<ArgsT>;
	entityOnPause?: LifecycleListener<ArgsT>;
	entityOnUnpause?: LifecycleListener<ArgsT>;
	entityOnDespawn?: LifecycleListener<ArgsT>;
	entityOnShow?: LifecycleListener<ArgsT>;

	entityOnInteract?: LifecycleListener<ArgsT>;
	entityDidInteract?: LifecycleListener<ArgsT>;
	entityWillInteract?: LifecycleListener<ArgsT>;

	entityWillHover?: LifecycleListener<ArgsT>;
	entityOnHover?: LifecycleListener<ArgsT>;
	entityDidHover?: LifecycleListener<ArgsT>;

	orientationWillChange?: LifecycleListener<ArgsT>;
	orientationOnChange?: LifecycleListener<ArgsT>;
	orientationDidChange?: LifecycleListener<ArgsT>;
}
