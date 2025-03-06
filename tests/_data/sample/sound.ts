import {type SoundDelegate} from '../../../src/sound/delegate';
import {Lifecycle} from '../../../src/lifecycle';
import {type SoundPhase} from '../../../src/sound/phase';

export class SampleSound implements SoundDelegate {
	public readonly lifecycle: Lifecycle<SoundPhase>;
	public readonly children: SoundDelegate<unknown>[];

	constructor() {
		this.children = [];
		this.lifecycle = new Lifecycle<SoundPhase>();
	}

	public async soundDidCancel(): Promise<boolean> {
		return this.lifecycle.phase('soundDidCancel');
	}

	public async soundOnMissing(): Promise<boolean> {
		return this.lifecycle.phase('soundOnMissing');
	}

	public async soundDidFinish(): Promise<boolean> {
		return this.lifecycle.phase('soundDidFinish');
	}

	public async soundDidPause(): Promise<boolean> {
		return this.lifecycle.phase('soundDidPause');
	}

	public async soundOnLoseFocus(): Promise<boolean> {
		return this.lifecycle.phase('soundOnLoseFocus');
	}

	public async soundOnGainFocus(): Promise<boolean> {
		return this.lifecycle.phase('soundOnGainFocus');
	}

	public async soundWillGainFocus(): Promise<boolean> {
		return this.lifecycle.phase('soundWillGainFocus');
	}

	public async soundWillLoseFocus(): Promise<boolean> {
		return this.lifecycle.phase('soundWillLoseFocus');
	}

	public async soundDidGainFocus(): Promise<boolean> {
		return this.lifecycle.phase('soundDidGainFocus');
	}

	public async soundDidLoseFocus(): Promise<boolean> {
		return this.lifecycle.phase('soundDidLoseFocus');
	}

	public async soundDidStart(): Promise<boolean> {
		return this.lifecycle.phase('soundDidStart');
	}

	public async soundDidUnpause(): Promise<boolean> {
		return this.lifecycle.phase('soundDidUnpause');
	}

	public async soundWillUnpause(): Promise<boolean> {
		return this.lifecycle.phase('soundWillUnpause');
	}

	public async soundDidReset(): Promise<boolean> {
		return this.lifecycle.phase('soundDidReset');
	}

	public async soundWillReset(): Promise<boolean> {
		return this.lifecycle.phase('soundWillReset');
	}

	public async soundOnCancel(): Promise<boolean> {
		return this.lifecycle.phase('soundOnCancel');
	}

	public async soundOnError(): Promise<boolean> {
		return this.lifecycle.phase('soundOnError');
	}

	public async soundOnFinish(): Promise<boolean> {
		return this.lifecycle.phase('soundOnFinish');
	}

	public async soundOnPause(): Promise<boolean> {
		return this.lifecycle.phase('soundOnPause');
	}

	public async soundOnStart(): Promise<boolean> {
		return this.lifecycle.phase('soundOnStart');
	}

	public async soundOnUnpause(): Promise<boolean> {
		return this.lifecycle.phase('soundOnUnpause');
	}

	public async soundWillCancel(): Promise<boolean> {
		return this.lifecycle.phase('soundWillCancel');
	}

	public async soundWillFinish(): Promise<boolean> {
		return this.lifecycle.phase('soundWillFinish');
	}

	public async soundWillPause(): Promise<boolean> {
		return this.lifecycle.phase('soundWillPause');
	}

	public async soundWillStart(): Promise<boolean> {
		return this.lifecycle.phase('soundWillStart');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
