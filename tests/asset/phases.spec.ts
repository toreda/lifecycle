import {assetPhase} from '../../src/asset/phase';

import {assetPhases} from '../../src/asset/phases';
import {generatePhaseTests} from '../_data/lifecycle/tests';
import {AssetPhase} from '../../src/asset/phase';
import {SampleAsset} from '../_data/sample/asset';

const instance = new SampleAsset();

generatePhaseTests<AssetPhase, SampleAsset>('Asset', instance, assetPhases, assetPhase);
