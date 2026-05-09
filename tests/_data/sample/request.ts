import {RequestLifecycle} from '../../../src';
import {type RequestDelegate} from '../../../src/request/delegate';

export class SampleRequest implements RequestDelegate {
	public readonly lifecycle: RequestLifecycle;
	public readonly children: RequestDelegate<unknown>[];

	constructor() {
		this.children = [];
		this.lifecycle = new RequestLifecycle();
	}

	public async requestDidFail(): Promise<boolean> {
		if (this.lifecycle.get('requestDidFail')) {
			return false;
		}

		return this.lifecycle.phase('requestDidFail');
	}

	public async requestDidStartHandshake(): Promise<boolean> {
		if (this.lifecycle.get('requestDidStartHandshake')) {
			return false;
		}

		return this.lifecycle.phase('requestDidStartHandshake');
	}

	public async requestWillStartHandshake(): Promise<boolean> {
		if (this.lifecycle.get('requestWillStartHandshake')) {
			return false;
		}

		return this.lifecycle.phase('requestWillStartHandshake');
	}

	public async requestDidCompleteHandshake(): Promise<boolean> {
		if (this.lifecycle.get('requestDidCompleteHandshake')) {
			return false;
		}

		return this.lifecycle.phase('requestDidCompleteHandshake');
	}

	public async requestWillCompleteHandshake(): Promise<boolean> {
		if (this.lifecycle.get('requestWillCompleteHandshake')) {
			return false;
		}

		return this.lifecycle.phase('requestWillCompleteHandshake');
	}

	public async requestDidRedirect(): Promise<boolean> {
		if (this.lifecycle.get('requestDidRedirect')) {
			return false;
		}

		return this.lifecycle.phase('requestDidRedirect');
	}
	public async requestDidProcessPayload(): Promise<boolean> {
		if (this.lifecycle.get('requestDidProcessPayload')) {
			return false;
		}

		return this.lifecycle.phase('requestDidProcessPayload');
	}

	public async requestWillProcessPayload(): Promise<boolean> {
		if (this.lifecycle.get('requestWillProcessPayload')) {
			return false;
		}

		return this.lifecycle.phase('requestWillProcessPayload');
	}



	public async requestWillSucceed(): Promise<boolean> {
		if (this.lifecycle.get('requestWillSucceed')) {
			return false;
		}

		return this.lifecycle.phase('requestWillSucceed');
	}

	public async requestDidSucceed(): Promise<boolean> {
		if (this.lifecycle.get('requestDidSucceed')) {
			return false;
		}

		return this.lifecycle.phase('requestDidSucceed');
	}

	public async requestDidReset(): Promise<boolean> {
		if (this.lifecycle.get('requestDidReset')) {
			return false;
		}

		return this.lifecycle.phase('requestDidReset');
	}

	public async requestWillReset(): Promise<boolean> {
		if (this.lifecycle.get('requestWillReset')) {
			return false;
		}

		return this.lifecycle.phase('requestWillReset');
	}
	public async requestWillRedirect(): Promise<boolean> {
		if (this.lifecycle.get('requestWillRedirect')) {
			return false;
		}

		return this.lifecycle.phase('requestWillRedirect');
	}

	public async requestDidResolveHost(): Promise<boolean> {
		if (this.lifecycle.get('requestDidResolveHost')) {
			return false;
		}

		return this.lifecycle.phase('requestDidResolveHost');
	}
	public async requestWillResolveHost(): Promise<boolean> {
		if (this.lifecycle.get('requestWillResolveHost')) {
			return false;
		}

		return this.lifecycle.phase('requestWillResolveHost');
	}

	public async requestWillTerminate(): Promise<boolean> {
		if (this.lifecycle.get('requestWillTerminate')) {
			return false;
		}

		return this.lifecycle.phase('requestWillTerminate');
	}

	public async requestDidTerminate(): Promise<boolean> {
		if (this.lifecycle.get('requestDidTerminate')) {
			return false;
		}

		return this.lifecycle.phase('requestDidTerminate');
	}
	public async requestDidEnd(): Promise<boolean> {
		if (this.lifecycle.get('requestDidEnd')) {
			return false;
		}

		return this.lifecycle.phase('requestDidEnd');
	}

	public async requestWillEnd(): Promise<boolean> {
		if (this.lifecycle.get('requestWillEnd')) {
			return false;
		}

		return this.lifecycle.phase('requestWillEnd');
	}

	public async requestWillFail(): Promise<boolean> {
		if (this.lifecycle.get('requestWillFail')) {
			return false;
		}

		return this.lifecycle.phase('requestWillFail');
	}
	public async requestWillClose(): Promise<boolean> {
		if (this.lifecycle.get('requestWillClose')) {
			return false;
		}

		return this.lifecycle.phase('requestWillClose');
	}

	public async requestWillConnect(): Promise<boolean> {
		if (this.lifecycle.get('requestWillConnect')) {
			return false;
		}

		return this.lifecycle.phase('requestWillConnect');
	}

	public async requestDidConnect(): Promise<boolean> {
		if (this.lifecycle.get('requestDidConnect')) {
			return false;
		}

		return this.lifecycle.phase('requestDidConnect');
	}
	public async requestDidBegin(): Promise<boolean> {
		if (this.lifecycle.get('requestDidBegin')) {
			return false;
		}

		return this.lifecycle.phase('requestDidBegin');
	}

	public async requestDidClose(): Promise<boolean> {
		if (this.lifecycle.get('requestDidClose')) {
			return false;
		}

		return this.lifecycle.phase('requestDidClose');
	}

	public async requestDidTimeout(): Promise<boolean> {
		if (this.lifecycle.get('requestDidTimeout')) {
			return false;
		}

		return this.lifecycle.phase('requestDidTimeout');
	}

	public async requestWillTimeout(): Promise<boolean> {
		if (this.lifecycle.get('requestWillTimeout')) {
			return false;
		}

		return this.lifecycle.phase('requestWillTimeout');
	}

	public async requestWillBegin(): Promise<boolean> {
		if (this.lifecycle.get('requestWillBegin')) {
			return false;
		}

		return this.lifecycle.phase('requestWillBegin');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
