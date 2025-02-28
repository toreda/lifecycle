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

/**
 * @category Lifecycle
 */
export class Lifecycle<PhaseT> extends Map<PhaseT, boolean> {
	constructor() {
		super();

		this.bindListeners();
	}

	public bindListeners(): void {
		this.phase = this.phase.bind(this);
		this.endPhase = this.endPhase.bind(this);

	}

	public async phase(id: PhaseT): Promise<boolean> {
		if (!id) {
			return false;
		}

		if (this.get(id) === true) {
			return false;
		}

		this.set(id, true);
		return true;
	}

	public async endPhase(id: PhaseT): Promise<boolean> {
		return this.phase(id);
	}

	/**
	 * Reset all phase flag values to starting state.
	 */
	public reset(): void {
		this.clear();
	}

	public override get(key?: PhaseT): boolean {
		if (!key) {
			return false;
		}

		const value = super.get(key);
		if (typeof value !== 'boolean') {
			return false;
		}

		return value;
	}
}
