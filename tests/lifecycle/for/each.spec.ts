import type {ClientDelegate} from '../../../src/client/delegate';
import {ClientLifecycle} from '../../../src/client/lifecycle';
import {lifecycleForEach} from '../../../src/lifecycle/for/each';

class SampleClient implements ClientDelegate {
	public lifecycle: ClientLifecycle;

	constructor() {
		this.lifecycle = new ClientLifecycle();
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
