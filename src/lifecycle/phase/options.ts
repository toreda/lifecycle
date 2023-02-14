/**
 * @category Lifecycle
 */
export interface LifecyclePhaseOptions {
	/** Skip phase invocation for child components. */
	skipChildren?: boolean;
	/** Limit  */
	maxChildDepth?: number;
}
