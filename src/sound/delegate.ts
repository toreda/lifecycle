import {type LifecycleDelegateCommon} from '../lifecycle/delegate/common';
import {type LifecycleListener} from '../lifecycle/listener';

/**
 * @category Sounds
 */
export interface SoundDelegate<PhaseT, ArgsT = unknown> extends LifecycleDelegateCommon<PhaseT>{
	soundDidCancel?: LifecycleListener<ArgsT>;
	soundDidFinish?: LifecycleListener<ArgsT>;
	soundDidPause?: LifecycleListener<ArgsT>;
	soundDidStart?: LifecycleListener<ArgsT>;
	soundDidUnpause?: LifecycleListener<ArgsT>;
	soundMissing?: LifecycleListener<ArgsT>;
	soundOnCancel?: LifecycleListener<ArgsT>;
	soundOnError?: LifecycleListener<ArgsT>;
	soundOnFinish?: LifecycleListener<ArgsT>;
	soundOnPause?: LifecycleListener<ArgsT>;
	soundOnStart?: LifecycleListener<ArgsT>;
	soundOnUnpause?: LifecycleListener<ArgsT>;
	soundWillCancel?: LifecycleListener<ArgsT>;
	soundWillFinish?: LifecycleListener<ArgsT>;
	soundWillPause?: LifecycleListener<ArgsT>;
	soundWillStart?: LifecycleListener<ArgsT>;
	soundWillUnpause?: LifecycleListener<ArgsT>;
}
