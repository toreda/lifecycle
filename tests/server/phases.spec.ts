import {Levels, Log} from '@toreda/log';

import {SERVER_PHASES} from '../_data/server/phases';
import {SampleServer} from '../_data/sample/server';
import {serverPhase} from '../../src/server/phase';

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

		for (const phase of SERVER_PHASES) {
			it(`should initialize phase '${phase.name}' to '${phase.initial}`, () => {
				expect(initialValues.lifecycle.get(phase.key)).toBe(phase.initial);
			});
		}
	});

	describe('Phases', () => {
		let server: SampleServer;

		beforeAll(() => {
			server = new SampleServer();
		});

		beforeEach(() => {
			server.reset();
		});

		for (const phase of SERVER_PHASES) {
			it(`should invoke '${phase.name}' listener and return true`, async () => {
				const spy = jest.spyOn(server, phase.key as any);
				expect(spy).not.toHaveBeenCalled();
				expect(server.lifecycle.get(phase.key)).toBe(false);

				const result = await serverPhase(phase.key, server, log);

				expect(spy).toHaveBeenCalledTimes(1);
				expect(result).toBe(true);

				spy.mockRestore();
			});
		}
	});
});
