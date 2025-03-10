import {TweenDelegate, TweenLifecycle} from '../../../src';

export class SampleTween implements TweenDelegate<unknown> {
	public readonly lifecycle: TweenLifecycle;
	public readonly children: TweenDelegate[];

	constructor() {
		this.children = [];
		this.lifecycle = new TweenLifecycle();
	}

	public async tweenDidCancel(): Promise<boolean> {
		return this.lifecycle.phase('tweenDidCancel');
	}

	public async tweenDidFinish(): Promise<boolean> {
		return this.lifecycle.phase('tweenDidFinish');
	}

	public async tweenDidReplay(): Promise<boolean> {
		return this.lifecycle.phase('tweenDidReplay');
	}

	public async tweenOnReplay(): Promise<boolean> {
		return this.lifecycle.phase('tweenOnReplay');
	}

	public async tweenDidReset(): Promise<boolean> {
		return this.lifecycle.phase('tweenDidReset');
	}

	public async tweenWillReset(): Promise<boolean> {
		return this.lifecycle.phase('tweenWillReset');
	}

	public async tweenWillReplay(): Promise<boolean> {
		return this.lifecycle.phase('tweenWillReplay');
	}

	public async tweenOnReset(): Promise<boolean> {
		return this.lifecycle.phase('tweenOnReset');
	}

	public async tweenDidStart(): Promise<boolean> {
		return this.lifecycle.phase('tweenDidStart');
	}

	public async tweenOnCancel(): Promise<boolean> {
		return this.lifecycle.phase('tweenOnCancel');
	}

	public async tweenOnFinish(): Promise<boolean> {
		return this.lifecycle.phase('tweenOnFinish');
	}

	public async tweenOnStart(): Promise<boolean> {
		return this.lifecycle.phase('tweenOnStart');
	}

	public async tweenWillCancel(): Promise<boolean> {
		return this.lifecycle.phase('tweenWillCancel');
	}
	public async tweenWillFinish(): Promise<boolean> {
		return this.lifecycle.phase('tweenWillFinish');
	}

	public async tweenWillStart(): Promise<boolean> {
		return this.lifecycle.phase('tweenWillStart');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
