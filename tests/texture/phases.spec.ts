import {type ServerPhase, serverPhase} from '../../src/server/phase';

import {generatePhaseTests} from '../_data/lifecycle/tests';
import {texturePhases} from '../../src/texture/phases';
import {texturePhase, TexturePhase} from '../../src';
import {SampleTexture} from '../_data/sample/texture';

const instance = new SampleTexture();

generatePhaseTests<TexturePhase, SampleTexture>('Texture', instance, texturePhases, texturePhase);
