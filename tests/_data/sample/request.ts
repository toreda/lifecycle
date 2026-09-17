import {RequestLifecycle} from '../../../src/request/lifecycle';
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

	public async requestWillCancel(): Promise<boolean> {
		if (this.lifecycle.get('requestWillCancel')) {
			return false;
		}

		return this.lifecycle.phase('requestWillCancel');
	}

	public async requestDidCancel(): Promise<boolean> {
		if (this.lifecycle.get('requestDidCancel')) {
			return false;
		}

		return this.lifecycle.phase('requestDidCancel');
	}

	public async requestWillReceiveResponse(): Promise<boolean> {
		if (this.lifecycle.get('requestWillReceiveResponse')) {
			return false;
		}

		return this.lifecycle.phase('requestWillReceiveResponse');
	}

	public async requestDidReceiveResponse(): Promise<boolean> {
		if (this.lifecycle.get('requestDidReceiveResponse')) {
			return false;
		}

		return this.lifecycle.phase('requestDidReceiveResponse');
	}

	public async requestWillRetry(): Promise<boolean> {
		if (this.lifecycle.get('requestWillRetry')) {
			return false;
		}

		return this.lifecycle.phase('requestWillRetry');
	}

	public async requestDidRetry(): Promise<boolean> {
		if (this.lifecycle.get('requestDidRetry')) {
			return false;
		}

		return this.lifecycle.phase('requestDidRetry');
	}

	public async requestWillSend(): Promise<boolean> {
		if (this.lifecycle.get('requestWillSend')) {
			return false;
		}

		return this.lifecycle.phase('requestWillSend');
	}

	public async requestDidSend(): Promise<boolean> {
		if (this.lifecycle.get('requestDidSend')) {
			return false;
		}

		return this.lifecycle.phase('requestDidSend');
	}

	public async requestWillQueue(): Promise<boolean> {
		if (this.lifecycle.get('requestWillQueue')) {
			return false;
		}

		return this.lifecycle.phase('requestWillQueue');
	}

	public async requestDidQueue(): Promise<boolean> {
		if (this.lifecycle.get('requestDidQueue')) {
			return false;
		}

		return this.lifecycle.phase('requestDidQueue');
	}

	public async requestWillReceiveBody(): Promise<boolean> {
		if (this.lifecycle.get('requestWillReceiveBody')) {
			return false;
		}

		return this.lifecycle.phase('requestWillReceiveBody');
	}

	public async requestDidReceiveBody(): Promise<boolean> {
		if (this.lifecycle.get('requestDidReceiveBody')) {
			return false;
		}

		return this.lifecycle.phase('requestDidReceiveBody');
	}

	public reset(): void {
		this.lifecycle.reset();
	}
}
