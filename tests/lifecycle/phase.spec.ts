import {CLIENT_PHASES, SampleClient} from '../_data/lifecycle';

import {LifecycleServerPhase} from '../../src/lifecycle/server/phase';
import {SampleServer} from '../_data/sample/server';
import {lifecyclePhase} from '../../src/lifecycle/phase';

const PHASE_NAME = 'didInit';

const SERVER_PHASES: LifecycleServerPhase[] = [
	'didInit',
	'didLoad',
	'didStart',
	'didStop',
	'willBecomeReady',
	'didBecomeReady',
	'willInit',
	'willLoad',
	'willRestart',
	'willShutdown',
	'willStart',
	'willStop'
];

describe('lifecyclePhase handler', () => {
	let sampleServer: SampleServer;
	let sampleClient: SampleClient;

	beforeAll(() => {
		sampleServer = new SampleServer();
	});

	beforeEach(() => {
		sampleServer.reset();
	});

	describe('', () => {
		it(`should return false when o arg is undefined`, async () => {
			expect(await lifecyclePhase(undefined as any, PHASE_NAME)).toBe(false);
		});
	});

	describe('Server Phases', () => {
		for (const phase of SERVER_PHASES) {
			it(`should return true for supported phase '${phase}'`, async () => {
				expect(await lifecyclePhase(sampleServer, phase)).toBe(true);
			});
		}
	});

	describe('Client Phases', () => {
		for (const phase of CLIENT_PHASES) {
			it(`should return true for supported phase '${phase.name}'`, async () => {
				expect(await lifecyclePhase(sampleClient, phase.listener)).toBe(true);
			});
		}
	});
});
