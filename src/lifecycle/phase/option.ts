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

import {type BaseObject} from '@toreda/types';
import type {ValidatorFn} from '@toreda/types';

/**
 * @param o
 * @param keyName
 * @param testFn
 *
 * @category Core
 */
export function lifecyclePhaseOption<ValueT>(
	o: unknown,
	keyName: string,
	testFn?: ValidatorFn
): ValueT | null {
	if (!o || typeof keyName !== 'string') {
		return null;
	}

	const target = o as BaseObject;
	const value = target[keyName];
	if (value === undefined) {
		return null;
	}

	if (typeof testFn === 'function') {
		let isValid = false;
		try {
			isValid = testFn(value);
		} catch (_e: unknown) {
			isValid = false;
		}

		if (isValid === true) {
			return value as ValueT;
		} else {
			return null;
		}
	}

	return target[keyName] as ValueT;
}
