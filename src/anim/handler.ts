import {Lifecycle} from '../lifecycle';
import {type AnimDelegate} from './delegate';

/**
 * @category Animations
 */
export class AnimHandler<PhaseT, ArgsT = unknown> implements AnimDelegate<PhaseT, ArgsT> {
	public readonly lifecycle: Lifecycle<PhaseT>;
	constructor() {
		this.lifecycle = new Lifecycle<PhaseT>();
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
