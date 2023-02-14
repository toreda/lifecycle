/**
 * @category Lifecycle
 */
export class LifecycleAddon {
	public willInit: boolean;
	public didInit: boolean;
	public willLoad: boolean;
	public didLoad: boolean;
	public willStart: boolean;
	public didStart: boolean;
	public willBecomeReady: boolean;
	public didBecomeReady: boolean;
	public willStop: boolean;
	public didStop: boolean;
	public willPause: boolean;
	public didUnpause: boolean;
	public memoryWarning: boolean;
	public didLoseFocus: boolean;
	public didGainFocus: boolean;
	public willGainFocus: boolean;
	public willLoseFocus: boolean;

	constructor() {
		this.didBecomeReady = false;
		this.didStart = false;
		this.didInit = false;
		this.didLoad = false;
		this.didStop = false;
		this.didUnpause = false;
		this.memoryWarning = false;
		this.willBecomeReady = false;
		this.willInit = false;
		this.willLoad = false;
		this.willPause = false;
		this.willStart = false;
		this.willStop = false;
		this.didGainFocus = false;
		this.willGainFocus = false;
		this.didLoseFocus = false;
		this.willLoseFocus = false;
	}

	/**
	 * Reset all phase properties to their starting value.
	 */
	public reset(): void {
		this.didBecomeReady = false;
		this.didInit = false;
		this.didLoad = false;
		this.didStop = false;
		this.didUnpause = false;
		this.memoryWarning = false;
		this.willBecomeReady = false;
		this.willInit = false;
		this.willLoad = false;
		this.willPause = false;
		this.willStart = false;
		this.willStop = false;
	}
}
