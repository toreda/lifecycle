/**
 * Minimal logger contract used internally by this package. Decouples internals
 * from any specific logging implementation.
 *
 * The shape is the structural intersection of `console` and `@toreda/log`'s
 * `Log`: any object exposing these five level-named methods satisfies it.
 * That includes the global `console` object, a `@toreda/log` `Log` instance,
 * and any custom logger shaped the same way.
 *
 * Methods take any arguments and the return value is ignored. Implementations
 * that return a Promise (e.g. `@toreda/log`) are accepted because their return
 * type is assignable to `void`; fire-and-forget is the only supported usage
 * inside this package — callers must not await results.
 *
 * Note: `log(level, ...args)` is intentionally excluded. The signatures of
 * `console.log` (message-first) and `Log.log` (level-first) conflict, so a
 * common contract is not safely expressible.
 *
 * @category Logging
 */
export interface LogLike {
	error(...args: unknown[]): void;
	warn(...args: unknown[]): void;
	info(...args: unknown[]): void;
	debug(...args: unknown[]): void;
	trace(...args: unknown[]): void;
}

/**
 * Structural runtime check: does `value` satisfy `LogLike`?
 *
 * @category Logging
 */
export function logLike(value: unknown): value is LogLike {
	if (!value || typeof value !== 'object') {
		return false;
	}

	const candidate = value as Record<string, unknown>;
	return (
		typeof candidate.error === 'function' &&
		typeof candidate.warn === 'function' &&
		typeof candidate.info === 'function' &&
		typeof candidate.debug === 'function' &&
		typeof candidate.trace === 'function'
	);
}
