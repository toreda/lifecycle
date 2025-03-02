import {Lifecycle} from '../lifecycle';
import {type AddonPhase} from './phase';


/**
 * @category Addons
 */
export class AddonLifecycle extends Lifecycle<AddonPhase> {
	constructor() {
		super();
	}
}
