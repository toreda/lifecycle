import {type LifecycleDelegateCommon} from '../lifecycle/delegate/common';
import {type LifecycleListener} from '../lifecycle/listener';

/**
 * @category Tweens
 */
export interface TweenDelegate<ArgsT = unknown> extends LifecycleDelegateCommon<Tween> {
	tweenDidCancel?: LifecycleListener<ArgsT>;
	tweenDidFinish?: LifecycleListener<ArgsT>;
	tweenDidReplay?: LifecycleListener<ArgsT>;
	tweenDidReset?: LifecycleListener<ArgsT>;
	tweenDidStart?: LifecycleListener<ArgsT>;
	tweenOnCancel?: LifecycleListener<ArgsT>;
	tweenOnFinish?: LifecycleListener<ArgsT>;
	tweenOnStart?: LifecycleListener<ArgsT>;
	tweenWillCancel?: LifecycleListener<ArgsT>;
	tweenWillFinish?: LifecycleListener<ArgsT>;
	tweenWillStart?: LifecycleListener<ArgsT>;
}
