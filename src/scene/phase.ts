/**
 * Expressive type describing phase names used in client lifecycle flow.
 *
 * @category Scenes
 */
export type ScenePhase =
	| 'didBecomeReady'
	| 'didGainFocus'
	| 'didInit'
	| 'didLoad'
	| 'didLoseFocus'
	| 'didPause'
	| 'didStart'
	| 'didStop'
	| 'didUnpause'
	| 'memoryWarning'
	| 'onInit'
	| 'onLoad'
	| 'onReady'
	| 'onStart'
	| 'willBecomeReady'
	| 'willGainFocus'
	| 'willInit'
	| 'willLoad'
	| 'willLoseFocus'
	| 'willPause'
	| 'willStart'
	| 'willStop';
