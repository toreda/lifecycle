import type {LifecycleNetworkCnxPhase} from './cnx/phase';

/**
 * @category Lifecycle - Network Connections
 */
export class LifecycleNetworkCnx implements Record<LifecycleNetworkCnxPhase, boolean> {
	public cnxDidClose: boolean;
	public cnxDidConnect: boolean;
	public cnxDidDisconnect: boolean;
	public cnxDidFailClose: boolean;
	public cnxDidFailConnect: boolean;
	public cnxDidFailHandshake: boolean;
	public cnxDidFailReconnect: boolean;
	public cnxDidHandshake: boolean;
	public cnxDidInit: boolean;
	public cnxDidLoad: boolean;
	public cnxDidOpen: boolean;
	public cnxDidReconnect: boolean;
	public cnxDidStartConnect: boolean;
	public cnxDidStopConnect: boolean;
	public cnxDidStopReconnect: boolean;
	public cnxOnPing: boolean;
	public cnxOnPong: boolean;
	public cnxWillClose: boolean;
	public cnxWillConnect: boolean;
	public cnxWillDisconnect: boolean;
	public cnxWillHandshake: boolean;
	public cnxWillInit: boolean;
	public cnxWillLoad: boolean;
	public cnxWillOpen: boolean;
	public cnxWillReconnect: boolean;
	public cnxWillStartConnect: boolean;
	public cnxWillStopConnect: boolean;
	public cnxWillStopReconnect: boolean;

	constructor() {
		this.cnxDidClose = false;
		this.cnxDidConnect = false;
		this.cnxDidDisconnect = false;
		this.cnxDidFailClose = false;
		this.cnxDidFailConnect = false;
		this.cnxDidFailHandshake = false;
		this.cnxDidFailReconnect = false;
		this.cnxDidHandshake = false;
		this.cnxDidInit = false;
		this.cnxDidLoad = false;
		this.cnxDidOpen = false;
		this.cnxDidReconnect = false;
		this.cnxDidStartConnect = false;
		this.cnxDidStopConnect = false;
		this.cnxDidStopReconnect = false;
		this.cnxOnPing = false;
		this.cnxOnPong = false;
		this.cnxWillClose = false;
		this.cnxWillConnect = false;
		this.cnxWillDisconnect = false;
		this.cnxWillHandshake = false;
		this.cnxWillInit = false;
		this.cnxWillLoad = false;
		this.cnxWillOpen = false;
		this.cnxWillReconnect = false;
		this.cnxWillStartConnect = false;
		this.cnxWillStopConnect = false;
		this.cnxWillStopReconnect = false;
	}

	public reset(): void {
		this.cnxDidConnect = false;
		this.cnxDidDisconnect = false;
		this.cnxDidFailConnect = false;
		this.cnxDidFailHandshake = false;
		this.cnxDidFailReconnect = false;
		this.cnxDidHandshake = false;
		this.cnxDidInit = false;
		this.cnxDidLoad = false;
		this.cnxDidOpen = false;
		this.cnxDidReconnect = false;
		this.cnxDidStartConnect = false;
		this.cnxDidStopConnect = false;
		this.cnxWillClose = false;
		this.cnxWillConnect = false;
		this.cnxWillDisconnect = false;
		this.cnxWillHandshake = false;
		this.cnxWillInit = false;
		this.cnxWillLoad = false;
		this.cnxWillOpen = false;
		this.cnxWillReconnect = false;
		this.cnxWillStartConnect = false;
		this.cnxWillStopConnect = false;
		this.cnxWillStopReconnect = false;
	}
}
