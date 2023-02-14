/**
 * Common properties shared by all Lifecycle delegates.
 *
 * @category Lifecycle
 */
export interface LifecycleDelegateCommon<LifecycleT> {
	children?: unknown[];
	lifecycle: LifecycleT;
}
