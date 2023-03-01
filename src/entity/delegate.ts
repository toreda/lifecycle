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

import type {EntityFlags} from './flags';
import {EntityLifecycle} from './lifecycle';
import type {EntityPhase} from './phase';
import type {LifecycleDelegateCommon} from '../lifecycle/delegate/common';
import type {LifecycleListener} from '../lifecycle/listener';

/**
 * @category Entity
 */
export interface EntityDelegate<ArgsT = unknown> extends LifecycleDelegateCommon<EntityPhase, EntityFlags> {
	lifecycle: EntityLifecycle;

	/**
	 * Entity is about to initialize. Handle internal
	 * init and setup only. Do not contact or rely
	 * on other entities during this phase, because
	 * they are not guaranteed to exist yet.
	 */
	willInit?: LifecycleListener<ArgsT>;
	/**
	 * Entity just finished init. Now you can
	 * add listeners, reach out to other objects.
	 */
	didInit?: LifecycleListener<ArgsT>;

	/**
	 * Entity is entering load phase.
	 * Start loading required textures & resources.
	 */
	willLoad?: LifecycleListener<ArgsT>;
	/**
	 * Entity just finished load phase.
	 * Handle any post-load cleanup, or settings.
	 */
	didLoad?: LifecycleListener<ArgsT>;

	/**
	 * Entity is about to spawn in the world.
	 * Do any required prep work such as
	 * alpha change, settings, etc.
	 */
	willSpawn?: LifecycleListener<ArgsT>;
	/** Entity spawned in scene. */
	didSpawn?: LifecycleListener<ArgsT>;

	/**
	 * Entity is about to appear on screen,
	 * but was already spawned and active.
	 */
	willAppear?: LifecycleListener<ArgsT>;
	/**
	 * Entity just appeared on screen,
	 * but was already spawned and active.
	 */
	didAppear?: LifecycleListener<ArgsT>;

	/**
	 * Entity is about to start running and it'sonUpdate
	 * method will be called on each frame.
	 */
	willStart?: LifecycleListener<ArgsT>;
	/**
	 * Entity just started running and it's onUpdate
	 * method is now being called once per frame
	 */
	didStart?: LifecycleListener<ArgsT>;

	/** Entity will be paused. */
	willPause?: LifecycleListener<ArgsT>;

	/** Entity just unpaused. */
	didUnpause?: LifecycleListener<ArgsT>;
	memoryWarning?: LifecycleListener<ArgsT>;

	/** Entity is about to be hidden, but is still active. */
	willHide?: LifecycleListener<ArgsT>;
	/** Entity was just hidden, but is still active. */
	didHide?: LifecycleListener<ArgsT>;

	didShow?: LifecycleListener<ArgsT>;
	willShow?: LifecycleListener<ArgsT>;
	/** Entity is about to be removed from scene. */
	willDespawn?: LifecycleListener<ArgsT>;
	/**
	 * Entity was removed from scene and has been
	 * paused. Last opportunity to perform cleanup
	 * work before entity is recycled into the entity pool.
	 */
	didDespawn?: LifecycleListener<ArgsT>;
	/**
	 * Entity is about to stop. It's onUpdate
	 * method will no longer be called each frame.
	 */
	willStop?: LifecycleListener<ArgsT>;
	/**
	 * Entity just stopped and it's onUpdate
	 * method is no longer being called each frame
	 */
	didStop?: LifecycleListener<ArgsT>;
}
