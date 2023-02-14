import type {LifecyclePhaseId} from './id';
import {lifecyclePhases} from '../phases';

export const lifecyclePhaseIds = new Set<LifecyclePhaseId>(lifecyclePhases);
