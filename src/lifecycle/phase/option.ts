import {BaseObject} from '../../base/object';
import type {ValidatorFn} from '../../validator/fn';

export function lifecyclePhaseOption<ValueT>(
	o: unknown,
	keyName: string,
	testFn?: ValidatorFn
): ValueT | null {
	if (!o || typeof keyName !== 'string') {
		return null;
	}

	const target = o as BaseObject;
	const value = target[keyName];
	if (value === undefined) {
		return null;
	}

	if (typeof testFn === 'function') {
		let isValid = false;
		try {
			isValid = testFn(value);
		} catch (e) {
			isValid = false;
		}

		if (isValid === true) {
			return value as ValueT;
		} else {
			return null;
		}
	}

	return target[keyName] as ValueT;
}
