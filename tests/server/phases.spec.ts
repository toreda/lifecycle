import {Levels, Log} from '@toreda/log';
import {ServerPhase, serverPhase} from '../../src/server/phase';

import {SampleServer} from '../_data/sample/server';
import type {ServerFlags} from '../../src/server/flags';
import {generatePhaseTests} from '../_data/lifecycle/tests';
import {serverPhases} from '../../src/server/phases';

const log = new Log({
	globalLevel: Levels.ALL,
	consoleEnabled: true
});

const instance = new SampleServer();

generatePhaseTests<ServerPhase, ServerFlags, SampleServer>('Server', instance, serverPhases, serverPhase);
