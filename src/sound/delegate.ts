import {type LifecycleDelegateCommon} from '../lifecycle/delegate/common';
import {type LifecycleListener} from '../lifecycle/listener';
import {SoundPhase} from './phase';

/**
 * @category Sounds
 */

export type SoundDelegate<ArgsT = unknown> = Partial<Record<SoundPhase, LifecycleListener<ArgsT>>> &
	LifecycleDelegateCommon<SoundPhase>;
//export interface SoundDelegate<ArgsT = unknown> extends LifecycleDelegateCommon<PhaseT>{
/* 	soundDidCancel?: LifecycleListener<ArgsT>;
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
	soundWillReset?: LifecycleListener<ArgsT>;
	soundDidReset?: LifecycleListener<ArgsT>; */
