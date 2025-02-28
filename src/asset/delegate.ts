import {type LifecycleDelegateCommon} from '../lifecycle/delegate/common';
import {type LifecycleListener} from '../lifecycle/listener';
import {type AssetPhase} from './phase';

/**
 * @category Assets
 */
export type AssetDelegate<ArgsT = unknown> = Record<AssetPhase, LifecycleListener<ArgsT>> &
	LifecycleDelegateCommon<AssetPhase>;
/* export interface AssetDelegate<PhaseT, ArgsT = unknown> extends LifecycleDelegateCommon<PhaseT> {
	assetLoadDidFinish?: LifecycleListener<ArgsT>;
	assetLoadDidStart?: LifecycleListener<ArgsT>;
	assetLoadOnAbort?: LifecycleListener<ArgsT>;
	assetLoadOnFinish?: LifecycleListener<ArgsT>;
	assetLoadOnProgress?: LifecycleListener<ArgsT>;
	assetLoadOnStart?: LifecycleListener<ArgsT>;
	assetLoadWillFinish?: LifecycleListener<ArgsT>;
	assetLoadWillStart?: LifecycleListener<ArgsT>;
	assetUnloadDidFinish?: LifecycleListener<ArgsT>;
	assetUnloadDidStart?: LifecycleListener<ArgsT>;
	assetUnloadOnFinish?: LifecycleListener<ArgsT>;
	assetUnloadOnStart?: LifecycleListener<ArgsT>;
	assetUnloadWillFinish?: LifecycleListener<ArgsT>;
	assetUnloadWillStart?: LifecycleListener<ArgsT>;
}
 */
