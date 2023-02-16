import {CLIENT_PHASES, SampleClient} from '../_data/lifecycle';

import {SampleServer} from '../_data/sample/server';
import type {ServerPhase} from '../../src/server/phase';
import {clientPhase} from '../../src/client/phase';
import {lifecyclePhase} from '../../src/lifecycle/phase';

const PHASE_NAME = 'didInit';

const SERVER_PHASES: ServerPhase[] = [
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
	let server: SampleServer;
	let client: SampleClient;

	beforeAll(() => {
		server = new SampleServer();
		client = new SampleClient();
	});

	describe('Entity Phases', () => {});

	describe('Server Phases', () => {
		beforeEach(() => {
			server.reset();
		});

		for (const phase of SERVER_PHASES) {
			it(`should return true for supported phase '${phase}'`, async () => {
				expect(await lifecyclePhase(server, phase)).toBe(true);
			});
		}
	});

	describe('Client Phases', () => {
		beforeEach(() => {
			client.reset();
		});

		for (const phase of CLIENT_PHASES) {
			it(`should return true for supported phase '${phase.name}'`, async () => {
				expect(await clientPhase(client, phase.key)).toBe(true);
			});
		}
	});
});
