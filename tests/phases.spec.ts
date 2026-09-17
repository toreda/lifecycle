import {adapterPhases} from '../src/adapter/phases';
import {addonPhases} from '../src/addon/phases';
import {animPhases} from '../src/anim/phases';
import {assetPhases} from '../src/asset/phases';
import {clientPhases} from '../src/client/phases';
import {cnxPhases} from '../src/cnx/phases';
import {componentPhases} from '../src/component/phases';
import {entityPhases} from '../src/entity/phases';
import {requestPhases} from '../src/request/phases';
import {scenePhases} from '../src/scene/phases';
import {serverPhases} from '../src/server/phases';
import {soundPhases} from '../src/sound/phases';
import {taskPhases} from '../src/task/phases';
import {texturePhases} from '../src/texture/phases';
import {tweenPhases} from '../src/tween/phases';
import {txnPhases} from '../src/txn/phases';

/**
 * Structural invariants shared by every `*Phases` collection.
 *
 * Completeness against the matching `*Phase` union is enforced at compile time
 * by the exhaustiveness guard at the bottom of each `phases.ts`. These cases
 * cover the invariants the type system cannot express: no duplicate entries,
 * and a stable alphabetical order.
 */
const collections: [string, readonly string[]][] = [
	['adapterPhases', adapterPhases],
	['addonPhases', addonPhases],
	['animPhases', animPhases],
	['assetPhases', assetPhases],
	['clientPhases', clientPhases],
	['cnxPhases', cnxPhases],
	['componentPhases', componentPhases],
	['entityPhases', entityPhases],
	['requestPhases', requestPhases],
	['scenePhases', scenePhases],
	['serverPhases', serverPhases],
	['soundPhases', soundPhases],
	['taskPhases', taskPhases],
	['texturePhases', texturePhases],
	['tweenPhases', tweenPhases],
	['txnPhases', txnPhases]
];

describe('Phase Collections', () => {
	for (const [name, phases] of collections) {
		describe(`${name}`, () => {
			it(`should not contain duplicate phases`, () => {
				const seen = new Set<string>();
				const dupes: string[] = [];

				for (const phase of phases) {
					if (seen.has(phase)) {
						dupes.push(phase);
					}

					seen.add(phase);
				}

				expect(dupes).toStrictEqual([]);
			});

			it(`should be sorted alphabetically`, () => {
				expect([...phases]).toStrictEqual([...phases].sort());
			});

			it(`should not be empty`, () => {
				expect(phases.length).toBeGreaterThan(0);
			});
		});
	}
});
