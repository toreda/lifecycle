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
import {type LifecycleListener} from '../lifecycle/listener';
import {type TexturePhase} from './phase';

/**
 * @category Textures
 */
export type TextureDelegate<ArgsT = unknown> = Record<TexturePhase, LifecycleListener<ArgsT>> &
	LifecycleDelegateCommon<TexturePhase>;


/* export interface TextureDelegate<PhaseT, ArgsT = unknown> extends LifecycleDelegateCommon<PhaseT> {
	textureDidChange?: LifecycleListener<ArgsT>;
	textureLoadDidFinish?: LifecycleListener<ArgsT>;
	textureLoadDidStart?: LifecycleListener<ArgsT>;
	textureLoadOnError?: LifecycleListener<ArgsT>;
	textureLoadOnFinish?: LifecycleListener<ArgsT>;
	textureLoadOnStart?: LifecycleListener<ArgsT>;
	textureLoadWillFinish?: LifecycleListener<ArgsT>;
	textureLoadWillStart?: LifecycleListener<ArgsT>;
	textureOnChange?: LifecycleListener<ArgsT>;
	textureUnloadDidFinish?: LifecycleListener<ArgsT>;
	textureUnloadDidStart?: LifecycleListener<ArgsT>;
	textureUnloadOnError?: LifecycleListener<ArgsT>;
	textureUnloadOnFinish?: LifecycleListener<ArgsT>;
	textureUnloadOnStart?: LifecycleListener<ArgsT>;
	textureUnloadWillFinish?: LifecycleListener<ArgsT>;
	textureUnloadWillStart?: LifecycleListener<ArgsT>;
	textureWillChange?: LifecycleListener<ArgsT>;
}
 */
