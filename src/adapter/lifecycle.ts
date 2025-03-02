import {Lifecycle} from '../lifecycle';
import {type AdapterPhase} from './phase';


/**
 * @category Adapters
 */
export class AdapterLifecycle extends Lifecycle<AdapterPhase> {
	constructor() {
		super();
	}
}
