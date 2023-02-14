import {LifecycleClient} from '../../../src/lifecycle/client';
import {LifecycleClientDelegate} from '../../../src/lifecycle/client/delegate';
import {lifecycleForEach} from '../../../src/lifecycle/for/each';

class SampleClient implements LifecycleClientDelegate {
	public lifecycle: LifecycleClient;

	constructor() {
		this.lifecycle = new LifecycleClient();
	}

	public async willInit(): Promise<boolean> {
		return true;
	}

	public async onInit(): Promise<boolean> {
		return true;
	}

	public async onLoad(): Promise<boolean> {
		return true;
	}

	public async onStart(): Promise<boolean> {
		return true;
	}

	public async onReady(): Promise<boolean> {
		return true;
	}
}

describe('lifecycleForEach', () => {
	let sampleClient: SampleClient;

	beforeAll(() => {
		sampleClient = new SampleClient();
	});

	it(`should return false when phase arg is undefined`, async () => {
		const result = await lifecycleForEach([sampleClient], undefined as any);

		expect(result).toBe(false);
	});
});
