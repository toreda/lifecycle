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
 *
 * @param phase
 * @param objects
 * @returns
 *
 * @category Lifecycle
 */
export async function lifecycleForEach(_objects: unknown[], _phase: string): Promise<boolean> {
	return false;
	/**  	const listenerName = lifecyclePhaseListenerName(phase);

	if (!listenerName) {
		return false;
	}

	if (!Array.isArray(objects)) {
		return false;
	}

	let executionCount = 0;
	for (const o of objects) {
		if (typeof o[listenerName] !== 'function') {
			continue;
		}

		const fn = o[listenerName] as LifecycleListener;
		try {
			const result = await fn();

			if (result) {
				executionCount++;
			}
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.error(`lifecycleForEach callback exception: ${e.message}.`);
			}
		}
	}

	return executionCount > 0; */
}
