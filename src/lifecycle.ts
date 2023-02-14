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

import Defaults from './lifecycle/defaults';

/**
 * @category Lifecycle
 */
export class Lifecycle<PhaseT extends string, DataT> extends Map<PhaseT, boolean> {
	constructor(phases?: PhaseT[]) {
		super();

		this.init(phases);
	}

	private init(phases?: PhaseT[]): void {
		if (!Array.isArray(phases)) {
			return;
		}

		for (const phase of phases) {
			this.set(phase, Defaults.LifecyclePhase.Status);
		}
	}

	public async phase(id: PhaseT): Promise<boolean> {
		if (typeof id !== 'string') {
			return false;
		}

		if (!this.has(id)) {
			return false;
		}

		const status = this.get(id);
		if (typeof status !== 'boolean' || status === true) {
			return false;
		}

		this.set(id, true);
		return true;
	}

	public execute(phase: PhaseT): boolean {
		if (!this.has(phase)) {
			return false;
		}

		const hasExecuted = this.get(phase);
		if (hasExecuted !== true) {
			return false;
		}

		this.set(phase, true);

		return true;
	}

	/**
	 * Reset all phase flag values to starting state.
	 */
	public reset(): void {
		for (const phase of this.keys()) {
			this.set(phase, Defaults.LifecyclePhase.Status);
		}
	}
}
