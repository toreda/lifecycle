import {Lifecycle} from '../lifecycle';
import {type ClientPhase} from './phase';

/**
 * @category Clients
 */
export class ClientLifecycle extends Lifecycle<ClientPhase> {
	constructor() {
		super();
	}
}
