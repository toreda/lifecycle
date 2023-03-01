import {Levels, Log} from '@toreda/log';

import {SampleServer} from '../_data/sample/server';
import type {ServerFlags} from '../../src';
import type {ServerPhase} from '../../src/server/phase';
import {generatePhaseTests} from '../_data/lifecycle/tests';
import {serverPhases} from '../../src/server/phases';

describe('Server Phases', () => {
	let log: Log;

	beforeAll(() => {
		log = new Log({
			globalLevel: Levels.ALL,
			consoleEnabled: true
		});
	});

	describe('Initial Values', () => {
		let initialValues: SampleServer;

		beforeAll(() => {
			initialValues = new SampleServer();
		});

		for (const phase of serverPhases) {
			it(`should initialize phase '${phase}' to 'false'`, () => {
				expect(initialValues.lifecycle.get(phase)).toBe(false);
			});
		}
	});

	const instance: SampleServer = new SampleServer();
	generatePhaseTests<ServerPhase, ServerFlags>('Server Phases', instance, serverPhases);
});
