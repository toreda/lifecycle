import {Lifecycle} from '../lifecycle';
import {type CnxPhase} from './phase';

/**
 * @category Cnx
 */
export class CnxLifecycle extends Lifecycle<CnxPhase> {
	constructor() {
		super();
	}
}
