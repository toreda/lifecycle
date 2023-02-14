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

import {LifecycleEntity} from '../entity';
import type {LifecycleListener} from '../listener';

/**
 * @category Lifecycle - Entities
 */
export interface LifecycleEntityDelegate {
	lifecycle: LifecycleEntity;

	/**
	 * Entity is about to initialize. Handle internal
	 * init and setup only. Do not contact or rely
	 * on other entities during this phase, because
	 * they are not guaranteed to exist yet.
	 */
	entityWillInit?: LifecycleListener;
	/**
	 * Entity just finished init. Now you can
	 * add listeners, reach out to other objects.
	 */
	entityDidInit?: LifecycleListener;

	/**
	 * Scene is entering load phase.
	 * Start loading this entity's textures and resources.
	 */
	sceneWillLoad?: LifecycleListener;
	/** Scene just completed load phase. */
	sceneDidLoad?: LifecycleListener;

	/**
	 * Entity is entering load phase.
	 * Start loading required textures & resources.
	 */
	entityWillLoad?: LifecycleListener;
	/**
	 * Entity just finished load phase.
	 * Handle any post-load cleanup, or settings.
	 */
	entityDidLoad?: LifecycleListener;

	/**
	 * Entity is about to spawn in the world.
	 * Do any required prep work such as
	 * alpha change, settings, etc.
	 */
	entityWillSpawn?: LifecycleListener;
	/** Entity spawned in scene. */
	entityDidSpawn?: LifecycleListener;

	/**
	 * Entity is about to appear on screen,
	 * but was already spawned and active.
	 */
	entityWillAppear?: LifecycleListener;
	/**
	 * Entity just appeared on screen,
	 * but was already spawned and active.
	 */
	entityDidAppear?: LifecycleListener;

	/** Scene is about to start. */
	sceneWillStart?: LifecycleListener;
	/** Scene just started. */
	sceneDidStart?: LifecycleListener;

	/**
	 * Entity is about to start running and it'sonUpdate
	 * method will be called on each frame.
	 */
	entityWillStart?: LifecycleListener;
	/**
	 * Entity just started running and it's onUpdate
	 * method is now being called once per frame
	 */
	entityDidStart?: LifecycleListener;

	/** Scene is about to pause. */
	sceneWillPause?: LifecycleListener;

	/** Entity will be paused. */
	entityWillPause?: LifecycleListener;

	/** Scene just unpaused. */
	sceneDidUnpause?: LifecycleListener;

	/** Entity just unpaused. */
	entityDidUnpause?: LifecycleListener;

	/** Entity is about to be hidden, but is still active. */
	entityWillHide?: LifecycleListener;
	/** Entity was just hidden, but is still active. */
	entityDidHide?: LifecycleListener;

	/** Entity is about to be removed from scene. */
	entityWillDespawn?: LifecycleListener;
	/**
	 * Entity was removed from scene and has been
	 * paused. Last opportunity to perform cleanup
	 * work before entity is recycled into the entity pool.
	 */
	entityDidDespawn?: LifecycleListener;

	/** Scene is about to stop running. */
	sceneWillStop?: LifecycleListener;

	/**
	 * Entity is about to stop. It's onUpdate
	 * method will no longer be called each frame.
	 */
	entityWillStop?: LifecycleListener;
	/**
	 * Entity just stopped and it's onUpdate
	 * method is no longer being called each frame
	 */
	entityDidStop?: LifecycleListener;

	/**
	 * OS-level event fired indicating the app and
	 * all systems should clear unused resources and
	 * remove cached items to free memory.
	 */
	memoryWarning?: LifecycleListener;
}
