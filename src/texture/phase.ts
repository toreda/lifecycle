/**
 *	MIT License
 *
 *	Copyright (c) 2019 – 2026 Toreda, Inc.
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnish
 ed to do so, subject to the following conditions:

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

import {type LogLike} from '../log/like';
import {type TextureDelegate} from './delegate';
import {invokeListeners} from '../invoke/listeners';

/**
 * Phase names used in the texture (GPU image resource) lifecycle flow.
 *
 * Most phases come in `Will` / `On` / `Did` triplets around an action verb:
 *
 * - `Will*` — fires immediately before the action. Last chance to prepare,
 *   gate, or short-circuit (e.g. pick a mip level, veto a reallocation).
 * - `On*` — fires as the action occurs (the synchronous moment of the
 *   transition itself).
 * - `Did*` — fires immediately after the action. Use for cleanup,
 *   post-conditions, and downstream notifications such as rebinding
 *   materials or invalidating descriptor sets.
 *
 * Sub-namespaces — the top-level `texture*Change` / `texture*Resize` triplets
 * act on a texture that already exists, while the sub-lifecycles cover its
 * residency on the GPU:
 * - `textureLoad*` — uploading pixel data and creating the GPU resource.
 * - `textureUnload*` — destroying it and reclaiming GPU memory. A texture may
 *   load and unload repeatedly (device loss, streaming, eviction).
 *
 * Exceptions: `textureLoadOnError` and `textureUnloadOnError` are reactive
 * only — they have no `Will` or `Did` form because the failure arrives without
 * notice, so there is no point beforehand at which a listener could prepare.
 *
 * @category Textures
 */
export type TexturePhase =
	/** Texture contents finished changing — new pixel data is resident. Hook for invalidating derived resources (mips, atlases, cached samplers). */
	| 'textureDidChange'
	/** Texture finished resizing — the new dimensions are live and the old backing store is gone. Hook for recomputing UVs and rebinding render targets. */
	| 'textureDidResize'
	/** Texture load finished — the GPU resource exists and is safe to bind and sample. */
	| 'textureLoadDidFinish'
	/** Texture load finished starting — the upload is underway; the texture is not yet safe to sample. */
	| 'textureLoadDidStart'
	/** Texture load failed (decode failure, unsupported format, out of GPU memory). Reactive only — there is no `Will` or `Did` form because the failure arrives without notice. Listeners should substitute a placeholder texture. */
	| 'textureLoadOnError'
	/** Texture load completes in this synchronous moment — the GPU handle becomes valid. */
	| 'textureLoadOnFinish'
	/** Texture load begins in this synchronous moment — the GPU resource is allocated and the upload issued. */
	| 'textureLoadOnStart'
	/** Texture load is about to complete. Last hook for generating mipmaps or setting sampler state before consumers bind it. */
	| 'textureLoadWillFinish'
	/** Texture load is about to begin. Hook for choosing format/compression, resolution tier, or serving an already-resident copy. */
	| 'textureLoadWillStart'
	/** Texture contents change in this synchronous moment — the pixel upload is applied. */
	| 'textureOnChange'
	/** Texture is resized in this synchronous moment — the backing store is reallocated at the new dimensions. */
	| 'textureOnResize'
	/** Texture unload finished — GPU memory is reclaimed and the handle is invalid. Any surviving binding now refers to a destroyed resource. */
	| 'textureUnloadDidFinish'
	/** Texture unload finished starting — the texture is marked unusable and teardown is underway. */
	| 'textureUnloadDidStart'
	/** Texture unload failed (resource still bound, driver refused the destroy). Reactive only — there is no `Will` or `Did` form because the failure arrives without notice. The texture may be left in an indeterminate state. */
	| 'textureUnloadOnError'
	/** Texture unload completes in this synchronous moment — the GPU resource is destroyed. */
	| 'textureUnloadOnFinish'
	/** Texture unload begins in this synchronous moment — the handle is retired and teardown starts. */
	| 'textureUnloadOnStart'
	/** Texture unload is about to complete. Last hook to read back pixel data before the resource is destroyed. */
	| 'textureUnloadWillFinish'
	/** Texture unload is about to begin. Hook for unbinding it from materials / render passes so nothing samples a destroyed resource. */
	| 'textureUnloadWillStart'
	/** Texture contents are about to change. Hook for capturing the prior contents or gating the upload. */
	| 'textureWillChange'
	/** Texture is about to be resized. Last chance to read the current contents — resizing reallocates and does not preserve pixels. */
	| 'textureWillResize';

/**
 * @param delegate
 * @param phase
 *
 * @category Textures
 */
export async function texturePhase<ArgsT = unknown>(
	phase: TexturePhase,
	delegate: TextureDelegate<ArgsT> | TextureDelegate<ArgsT>[],
	base?: LogLike
): Promise<boolean> {
	return invokeListeners<TexturePhase, TextureDelegate<ArgsT>>({
		phase: phase,
		delegate: delegate,
		base: base
	});
}
