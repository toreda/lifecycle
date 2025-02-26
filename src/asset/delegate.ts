import {type LifecycleListener} from '../lifecycle/listener';

/**
 * @category Assets
 */
export interface AssetDelegate<ArgsT = unknown> {
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
