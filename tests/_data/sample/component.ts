import {type ComponentDelegate} from '../../../src/component/delegate';
import {ComponentLifecycle} from '../../../src/component/lifecycle';

export class SampleComponent implements ComponentDelegate {
	public readonly lifecycle: ComponentLifecycle;

	constructor() {
		this.lifecycle = new ComponentLifecycle();
	}

	public async componentCfgDidChange(): Promise<boolean> {
		return this.lifecycle.endPhase('componentCfgDidChange');
	}

	public async componentCfgOnChange(): Promise<boolean> {
		return this.lifecycle.endPhase('componentCfgOnChange');
	}

	public async componentCfgWillChange(): Promise<boolean> {
		return this.lifecycle.endPhase('componentCfgWillChange');
	}

	public async componentDidBecomeReady(): Promise<boolean> {
		return this.lifecycle.endPhase('componentDidBecomeReady');
	}

	public async componentDidGainFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('componentDidGainFocus');
	}

	public async componentDidInit(): Promise<boolean> {
		return this.lifecycle.endPhase('componentDidInit');
	}

	public async componentOnGainFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('componentOnGainFocus');
	}

	public async componentDidReload(): Promise<boolean> {
		return this.lifecycle.endPhase('componentDidReload');
	}

	public async componentWillReload(): Promise<boolean> {
		return this.lifecycle.endPhase('componentWillReload');
	}

	public async componentOnReload(): Promise<boolean> {
		return this.lifecycle.endPhase('componentOnReload');
	}

	public async componentOnPause(): Promise<boolean> {
		return this.lifecycle.endPhase('componentOnPause');
	}

	public async componentOnUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('componentOnUnpause');
	}

	public async componentWillUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('componentWillUnpause');
	}

	public async componentOnLoseFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('componentOnLoseFocus');
	}

	public async componentDidLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('componentDidLoad');
	}

	public async componentDidLoseFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('componentDidLoseFocus');
	}

	public async componentDidStart(): Promise<boolean> {
		return this.lifecycle.endPhase('componentDidStart');
	}

	public async componentDidPause(): Promise<boolean> {
		return this.lifecycle.endPhase('componentDidPause');
	}

	public async componentDidUnpause(): Promise<boolean> {
		return this.lifecycle.endPhase('componentDidUnpause');
	}

	public async componentOnLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('componentOnLoad');
	}

	public async componentOnInit(): Promise<boolean> {
		return this.lifecycle.endPhase('componentOnInit');
	}

	public async componentOnBecomeReady(): Promise<boolean> {
		return this.lifecycle.endPhase('componentOnBecomeReady');
	}

	public async componentOnStart(): Promise<boolean> {
		return this.lifecycle.endPhase('componentOnStart');
	}

	public async componentOnException(): Promise<boolean> {
		return this.lifecycle.endPhase('componentOnException');
	}

	public async componentOnError(): Promise<boolean> {
		return this.lifecycle.endPhase('componentOnError');
	}

	public async componentDidSaveState(): Promise<boolean> {
		return this.lifecycle.endPhase('componentDidSaveState');
	}

	public async componentOnSaveState(): Promise<boolean> {
		return this.lifecycle.endPhase('componentOnSaveState');
	}

	public async componentWillSaveState(): Promise<boolean> {
		return this.lifecycle.endPhase('componentWillSaveState');
	}

	public async componentOnStop(): Promise<boolean> {
		return this.lifecycle.endPhase('componentOnStop');
	}

	public async componentWillBecomeReady(): Promise<boolean> {
		return this.lifecycle.endPhase('componentWillBecomeReady');
	}

	public async componentWillGainFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('componentWillGainFocus');
	}

	public async componentWillLoad(): Promise<boolean> {
		return this.lifecycle.endPhase('componentWillLoad');
	}

	public async componentWillInit(): Promise<boolean> {
		return this.lifecycle.endPhase('componentWillInit');
	}

	public async componentWillLoseFocus(): Promise<boolean> {
		return this.lifecycle.endPhase('componentWillLoseFocus');
	}

	public async componentWillPause(): Promise<boolean> {
		return this.lifecycle.endPhase('componentWillPause');
	}

	public async componentWillStart(): Promise<boolean> {
		return this.lifecycle.endPhase('componentWillStart');
	}

	public async componentWillStop(): Promise<boolean> {
		return this.lifecycle.endPhase('componentWillStop');
	}

	public async componentDidStop(): Promise<boolean> {
		return this.lifecycle.endPhase('componentDidStop');
	}

	public async componentMemoryWarning(): Promise<boolean> {
		return this.lifecycle.endPhase('componentMemoryWarning');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
