import {Lifecycle} from "../lifecycle";
import {type AssetPhase} from "./phase";

/**
 * @category Assets
 */
export class AssetLifecycle extends Lifecycle<AssetPhase> {
	constructor() {
		super();
	}
}
