import {Levels, Log} from '@toreda/log';

import {SampleServer} from '../../_data/sample/server';
import type {LifecycleDelegateCommon} from '../../../src';
import type {ServerPhase} from '../../../src/server/phase';
import {ServerLifecycle} from '../../../src/server/lifecycle';
import {invokeChildListeners} from '../../../src/invoke/child/listeners';
import {invokeListeners} from '../../../src/invoke/listeners';

function bareDelegate(): LifecycleDelegateCommon<ServerPhase> {
	return {
		lifecycle: new ServerLifecycle()
	};
}

describe('invokeChildListeners', () => {
	let base: Log;

	beforeAll(() => {
		base = new Log({
			globalLevel: Levels.ALL,
			consoleEnabled: true
		});
	});

	describe('Argument Validation', () => {
		it(`should return false when delegate arg is undefined`, async () => {
			const result = await invokeChildListeners<ServerPhase, SampleServer>(
				'serverDidInit',
				undefined as any,
				base
			);

			expect(result).toBe(false);
		});

		it(`should return false when delegate arg is null`, async () => {
			const result = await invokeChildListeners<ServerPhase, SampleServer>(
				'serverDidInit',
				null as any,
				base
			);

			expect(result).toBe(false);
		});

		it(`should return true when delegate has no children property`, async () => {
			const delegate = bareDelegate();
			const result = await invokeChildListeners<ServerPhase, LifecycleDelegateCommon<ServerPhase>>(
				'serverDidInit',
				delegate,
				base
			);

			expect(result).toBe(true);
		});

		it(`should return false when delegate.children exists but is not an array`, async () => {
			const delegate = bareDelegate();
			delegate.children = {} as any;
			const result = await invokeChildListeners<ServerPhase, LifecycleDelegateCommon<ServerPhase>>(
				'serverDidInit',
				delegate,
				base
			);

			expect(result).toBe(false);
		});

		it(`should return false when delegate.children is null`, async () => {
			const delegate = bareDelegate();
			delegate.children = null as any;
			const result = await invokeChildListeners<ServerPhase, LifecycleDelegateCommon<ServerPhase>>(
				'serverDidInit',
				delegate,
				base
			);

			expect(result).toBe(false);
		});

		it(`should return false when children contains an invalid entry`, async () => {
			const parent = new SampleServer();
			parent.children.push(null as any);
			const result = await invokeChildListeners<ServerPhase, SampleServer>(
				'serverDidInit',
				parent,
				base
			);

			expect(result).toBe(false);
		});
	});

	describe('Traversal', () => {
		it(`should return true when children is an empty array`, async () => {
			const parent = new SampleServer();
			const result = await invokeChildListeners<ServerPhase, SampleServer>(
				'serverDidInit',
				parent,
				base
			);

			expect(result).toBe(true);
		});

		it(`should invoke listeners on children and grandchildren`, async () => {
			const parent = new SampleServer();
			const child = new SampleServer();
			const grandchild = new SampleServer();
			parent.children.push(child);
			child.children.push(grandchild);

			const childSpy = jest.spyOn(child, 'serverDidInit');
			const grandchildSpy = jest.spyOn(grandchild, 'serverDidInit');

			const result = await invokeChildListeners<ServerPhase, SampleServer>(
				'serverDidInit',
				parent,
				base
			);

			expect(result).toBe(true);
			expect(childSpy).toHaveBeenCalledTimes(1);
			expect(grandchildSpy).toHaveBeenCalledTimes(1);

			childSpy.mockRestore();
			grandchildSpy.mockRestore();
		});

		it(`should skip a child subtree when the child's phase flag is already set`, async () => {
			const parent = new SampleServer();
			const child = new SampleServer();
			const grandchild = new SampleServer();
			parent.children.push(child);
			child.children.push(grandchild);

			child.lifecycle.set('serverDidInit', true);
			const childSpy = jest.spyOn(child, 'serverDidInit');
			const grandchildSpy = jest.spyOn(grandchild, 'serverDidInit');

			const result = await invokeChildListeners<ServerPhase, SampleServer>(
				'serverDidInit',
				parent,
				base
			);

			expect(result).toBe(true);
			expect(childSpy).not.toHaveBeenCalled();
			expect(grandchildSpy).not.toHaveBeenCalled();

			childSpy.mockRestore();
			grandchildSpy.mockRestore();
		});

		it(`should terminate on cyclical child graphs and invoke each listener once`, async () => {
			const a = new SampleServer();
			const b = new SampleServer();
			a.children.push(b);
			b.children.push(a);

			const aSpy = jest.spyOn(a, 'serverDidInit');
			const bSpy = jest.spyOn(b, 'serverDidInit');

			const result = await invokeChildListeners<ServerPhase, SampleServer>('serverDidInit', a, base);

			expect(result).toBe(true);
			expect(aSpy).toHaveBeenCalledTimes(1);
			expect(bSpy).toHaveBeenCalledTimes(1);

			aSpy.mockRestore();
			bSpy.mockRestore();
		});

		it(`should invoke a delegate's own listener at most once when it appears in a cycle`, async () => {
			const a = new SampleServer();
			const b = new SampleServer();
			a.children.push(b);
			b.children.push(a);

			const aSpy = jest.spyOn(a, 'serverDidInit');
			const bSpy = jest.spyOn(b, 'serverDidInit');

			const result = await invokeListeners<ServerPhase, SampleServer>({
				phase: 'serverDidInit',
				delegate: a,
				base: base
			});

			expect(result).toBe(true);
			expect(aSpy).toHaveBeenCalledTimes(1);
			expect(bSpy).toHaveBeenCalledTimes(1);

			aSpy.mockRestore();
			bSpy.mockRestore();
		});
	});

	describe('Results', () => {
		it(`should return false when a child listener exists but returns false`, async () => {
			const parent = new SampleServer();
			const child = new SampleServer();
			parent.children.push(child);
			child.serverDidInit = jest.fn(async () => false) as any;

			const result = await invokeChildListeners<ServerPhase, SampleServer>(
				'serverDidInit',
				parent,
				base
			);

			expect(result).toBe(false);
		});

		it(`should return false when a child listener throws`, async () => {
			const parent = new SampleServer();
			const child = new SampleServer();
			parent.children.push(child);
			child.serverDidInit = jest.fn(async () => {
				throw new Error('child listener failure');
			}) as any;

			const result = await invokeChildListeners<ServerPhase, SampleServer>(
				'serverDidInit',
				parent,
				base
			);

			expect(result).toBe(false);
		});

		it(`should return false when a grandchild listener exists but returns false`, async () => {
			const parent = new SampleServer();
			const child = new SampleServer();
			const grandchild = new SampleServer();
			parent.children.push(child);
			child.children.push(grandchild);
			grandchild.serverDidInit = jest.fn(async () => false) as any;

			const result = await invokeChildListeners<ServerPhase, SampleServer>(
				'serverDidInit',
				parent,
				base
			);

			expect(result).toBe(false);
		});

		it(`should return true when a child has no listener for the phase`, async () => {
			const parent = new SampleServer();
			const child = bareDelegate();
			parent.children.push(child as any);

			const result = await invokeChildListeners<ServerPhase, SampleServer>(
				'serverDidInit',
				parent,
				base
			);

			expect(result).toBe(true);
		});

		it(`should still invoke siblings after a child fails`, async () => {
			const parent = new SampleServer();
			const failing = new SampleServer();
			const sibling = new SampleServer();
			parent.children.push(failing);
			parent.children.push(sibling);
			failing.serverDidInit = jest.fn(async () => false) as any;

			const siblingSpy = jest.spyOn(sibling, 'serverDidInit');
			const result = await invokeChildListeners<ServerPhase, SampleServer>(
				'serverDidInit',
				parent,
				base
			);

			expect(result).toBe(false);
			expect(siblingSpy).toHaveBeenCalledTimes(1);

			siblingSpy.mockRestore();
		});
	});

	describe('invokeListeners aggregation', () => {
		it(`should return false when the main listener runs but a child listener fails`, async () => {
			const parent = new SampleServer();
			const child = new SampleServer();
			parent.children.push(child);
			child.serverDidInit = jest.fn(async () => false) as any;

			const result = await invokeListeners<ServerPhase, SampleServer>({
				phase: 'serverDidInit',
				delegate: parent,
				base: base
			});

			expect(result).toBe(false);
		});

		it(`should return false when a grandchild listener fails`, async () => {
			const parent = new SampleServer();
			const child = new SampleServer();
			const grandchild = new SampleServer();
			parent.children.push(child);
			child.children.push(grandchild);
			grandchild.serverDidInit = jest.fn(async () => {
				throw new Error('grandchild listener failure');
			}) as any;

			const result = await invokeListeners<ServerPhase, SampleServer>({
				phase: 'serverDidInit',
				delegate: parent,
				base: base
			});

			expect(result).toBe(false);
		});

		it(`should return true when main, child, and grandchild listeners all run`, async () => {
			const parent = new SampleServer();
			const child = new SampleServer();
			const grandchild = new SampleServer();
			parent.children.push(child);
			child.children.push(grandchild);

			const grandchildSpy = jest.spyOn(grandchild, 'serverDidInit');
			const result = await invokeListeners<ServerPhase, SampleServer>({
				phase: 'serverDidInit',
				delegate: parent,
				base: base
			});

			expect(result).toBe(true);
			expect(grandchildSpy).toHaveBeenCalledTimes(1);

			grandchildSpy.mockRestore();
		});
	});
});
