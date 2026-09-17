# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

# [Unreleased]

# [3.0.0] - Unreleased

3.0.0 is a major release with several breaking changes. See the **Migration guide** below for a checklist consumers should run through.

## Migration guide

1. **Rename phase listener methods on your delegates** — the following phases were renamed. Search-and-replace across your codebase:
   * `orientationWillChange` → `entityOrientationWillChange`
   * `orientationOnChange` → `entityOrientationOnChange`
   * `orientationDidChange` → `entityOrientationDidChange`
   * `entityMemoryWarning` → `entityOnMemoryWarning`
   * `clientMemoryWarning` → `clientOnMemoryWarning`
   * `txnWillResume` → `txnWillUnpause`
   * `txnOnResume` → `txnOnUnpause`
   * `txnDidResume` → `txnDidUnpause`

2. **Remove any listeners for these deleted request phases** — they no longer exist on `RequestDelegate`:
   * `requestWillReset` — use `requestWillRetry` if you were tracking retry attempts.
   * `requestDidReset` — use `requestDidRetry` if you were tracking retry attempts.

3. **Update task delegates** — several `TaskPhase` entries were removed or renamed. Rename:
   * `taskTimeoutWillChange` → `taskExecutionTimeoutWillChange`
   * `taskTimeoutDidChange` → `taskExecutionTimeoutDidChange`

   Remove (these are gone — adapt to the suggested replacements):
   * `taskTimeLimitWillChange` / `taskTimeLimitDidChange` — use `taskExecutionTimeLimitWillChange` / `taskExecutionTimeLimitDidChange`. Task-level time limits were redundant with the per-execution variant.
   * `taskWillResume` / `taskDidResume` — use the more specific `taskWill/DidUnpause` (paired with `Pause`) and `taskWill/DidUnsuspend` (paired with `Suspend`) for the case you care about. The generic `Resume` overlapped with both.
   * `taskWillConsumeResource` / `taskDidConsumeResource` — use the plural forms `taskWillConsumeResources` / `taskDidConsumeResources`. A single-resource consumption is just an array of one.

4. **Rename `clientOnReady` → `clientOnBecomeReady`** in any `ClientDelegate` listeners. The old name was inconsistent with its sibling phases (`clientWillBecomeReady` / `clientDidBecomeReady`) — pre-2.0.0 the bare `onReady` paired with `willBecomeReady` / `didBecomeReady`, and the 2.0.0 mass-rename mechanically prefixed them without resolving the inconsistency. Now all three phases share the same action verb.

5. **Stop awaiting `phase()` / `endPhase()` returns** — both are now synchronous. `await delegate.lifecycle.endPhase(...)` still works (`await` on a non-Promise resolves immediately), but the `Promise<boolean>` return type is gone. Replace `phase()` with `endPhase()`; `phase()` is deprecated and may be removed in a later major.

6. **Check aggregate results if you rely on `invokeListeners` returning `true`** — child (and now grandchild, etc.) listener results count toward the return value. Previously child listeners were invoked but their failures were ignored. Descendants that don't implement a listener for the phase don't count against the result; a descendant listener that exists but returns non-`true` or throws now makes the call return `false`. The `return this.lifecycle.endPhase(...)` listener idiom continues to work unchanged.

7. **Optional: drop `@toreda/log` from your dependencies** if this package was the only reason you had it. `@toreda/log` is no longer a peer dependency. Public APIs now accept any `LogLike` (an object with `error` / `warn` / `info` / `debug` / `trace` methods), which `@toreda/log`'s `Log` and the global `console` both satisfy structurally — no call-site changes required if you keep using `Log`.

8. **Iteration-order-sensitive consumers**: `requestPhases` was re-sorted alphabetically. If your code depended on the previous (partly-sorted, later-appended) order, sort explicitly or pin to your own ordering.

## Added

* `LogLike` interface and `logLike` type guard in `src/log/like.ts`. A minimal structural logger contract (`error`, `warn`, `info`, `debug`, `trace`) satisfied by both the global `console` and `@toreda/log`'s `Log`. Re-exported from the package barrel.
* `RequestPhase` gained six new `Will`/`Did` pairs covering previously unhooked stages of an HTTP fetch: `requestWill/DidSend` (writing the request body), `requestWill/DidReceiveResponse` (response headers arrived, before payload processing), `requestWill/DidReceiveBody` (body bytes received off the wire, distinct from decode/parse), `requestWill/DidCancel` (caller-initiated abort, distinct from `Timeout` and `Terminate`), `requestWill/DidRetry` (retry attempt issued — backoff, retry counters, idempotency hooks), and `requestWill/DidQueue` (connection-pool waits / rate-limit queueing).
* JSDoc on `RequestPhase` clarifying the semantics of terminal phases. `End` is the universal final hook that fires regardless of outcome (so listeners do not need to check an error parameter); `Succeed`, `Fail`, `Terminate`, `Timeout`, and `Cancel` each represent a distinct outcome and fire before `End`. `Close` is transport-layer (connection closed), distinct from operation-layer end.
* Real JSDoc on `entityPhase()` describing parameters, return semantics (matches the recent `requestPhase()` doc), and the at-most-once-per-delegate behavior.
* Compile-time exhaustiveness check in `src/request/phases.ts` ensures the runtime `requestPhases` array stays in sync with the `RequestPhase` union — adding a phase to one without the other now fails type-check.
* Compile-time exhaustiveness check in `src/entity/phases.ts` (same pattern as `requestPhases`) ensures `entityPhases` and `EntityPhase` stay in sync.
* Compile-time exhaustiveness check in `src/task/phases.ts` (same pattern) ensures `taskPhases` and `TaskPhase` stay in sync.
* `taskExecutionWillSucceed` / `taskExecutionDidSucceed` to mirror the request lifecycle's outcome-specific phases. The execution-attempt outcome set is now `Succeed` / `Fail` / `Abort` / `Timeout`, all firing before the universal terminal `taskExecutionDidFinish`.
* `TxnPhase` gained `Will`/`On`/`Did` triplets for the standard transaction verbs previously missing from the flow: `Validate` (constraint/invariant checks on the transaction's changes), `Prepare` (resource reservation / two-phase-commit vote), and `Commit` (durably applying changes). Happy-path ordering is `Begin` → `Validate` → `Prepare` → `Commit` → `Succeed`.
* `txnRevertWillFail` / `txnRevertOnFail` / `txnRevertDidFail` — hooks for when a rollback itself fails, leaving state partially applied. Previously a failed revert had no phase to fire.
* Compile-time exhaustiveness check in `src/txn/phases.ts` (same pattern as `requestPhases`) ensures `txnPhases` and `TxnPhase` stay in sync.
* Per-member JSDoc on every entry of `RequestPhase`, `ClientPhase`, `EntityPhase`, `TaskPhase`, and `TxnPhase`. On hover in the IDE, each phase shows its specific meaning, when it fires, and what kind of listener work fits there. Top-level type docs explain the `Will` / `On` / `Did` triplet model where applicable.
* Real JSDoc on `taskPhase()` matching the format used for `requestPhase()` and `entityPhase()`.

## Changed

* **Breaking:** `invokeListener` now always consumes the phase: the phase flag is set in a `finally` after the listener runs, so it's set even when the listener throws, returns non-`true`, or doesn't exist (was: only set when the listener resolved successfully). Lifecycle phases are one-off calls; a failed attempt is still an attempt. The flag is set *after* the listener finishes, so the `return this.lifecycle.endPhase(phase)` listener idiom continues to work. Separately, re-entrant invocation of a phase whose listener is still mid-execution is now blocked (returns `false` with a warning) via internal in-flight tracking — a listener that directly or indirectly re-invokes its own phase no longer recurses infinitely.
* **Breaking:** `invokeChildListeners` now recurses through all descendant levels — previously only direct children were invoked and deeper levels were silently skipped. Nodes whose phase flag is already set are skipped along with their subtree, which terminates traversal of cyclical child graphs. Return value is now meaningful: `true` when every reachable descendant either ran its listener or has none for the phase; `false` for a malformed delegate (`children` present but not an array, or invalid entries in the array) or when any descendant listener existed but didn't run. A delegate without a `children` property returns `true` (was: `false`).
* **Breaking:** `invokeListeners` now folds child results into its return value — `true` only when every target's own listener *and* all descendant listeners ran. Previously child listeners were invoked but failures were ignored.
* **Breaking:** `phase` is deprecated. Use `endPhase` instead.
* **Breaking:** Both `phase` and `endPhase` have been changed from async to sync calls. The return type changed from `Promise<boolean>` to `boolean`. Existing `await` calls remain valid (await on a non-Promise resolves immediately) but the type signature is no longer compatible.
* **Breaking:** All public phase functions (`serverPhase`, `clientPhase`, `cnxPhase`, etc.), `invokeListener`, `invokeListeners`, `invokeChildListeners`, `canInvoke`, and `InvokeListenersInit.base` now accept `LogLike` instead of `@toreda/log`'s `Log`. A `Log` instance still satisfies the new contract structurally, so existing call sites don't need changes — but extending these signatures or asserting the parameter type as `Log` will fail to compile.
* **Breaking:** `RequestPhase` and `requestPhases` are now sorted alphabetically (was: partly sorted with later additions appended unsorted). Behavior is unchanged for typical usage; observable only if your code depended on iteration order.
* Internal scoped log calls (`log.makeLog('scope').error(...)`) replaced with prefixed messages (`log.error('[scope] ...')`) since `LogLike` is intentionally minimal and does not include `makeLog`.
* `RequestLifecycle` no longer declares an empty `constructor() { super(); }`; the implicit constructor inherited from `Lifecycle<RequestPhase>` is equivalent.
* `EntityLifecycle` no longer declares an empty `constructor() { super(); }`; same rationale as `RequestLifecycle`.
* `TaskLifecycle` no longer declares an empty `constructor() { super(); }`; same rationale.
* Fixed `@category Entity` typo on `entityPhase()` — now `Entities`, matching every other reference.
* **Breaking:** `taskTimeoutWillChange` / `taskTimeoutDidChange` renamed to `taskExecutionTimeoutWillChange` / `taskExecutionTimeoutDidChange`. Tasks-as-such don't have a timeout in this library's scope; the timeout policy applies to a single execution attempt, so the names now make that clear and parallel `taskExecutionTimeLimit*`. Consumers must rename their listeners.

## Removed
* `reset()` is no longer required for classes implementing the common delegate interface.
* **Breaking:** `@toreda/log` removed from `peerDependencies`. Consumers no longer need to install it to use this package; any logger matching `LogLike` works (including plain `console`). If you relied on transitive install of `@toreda/log` via this package, add it to your own dependencies.
* **Breaking:** `requestWillReset` and `requestDidReset` removed from `RequestPhase`. Semantics were ambiguous in a fetch context (state reset? connection reset? retry attempt?). Use `requestWill/DidRetry` for retry-attempt cases. Consumers with listeners on these phases will get a TypeScript error and must remove or rename them.
* **Breaking:** `orientationWillChange` / `orientationOnChange` / `orientationDidChange` renamed to `entityOrientationWillChange` / `entityOrientationOnChange` / `entityOrientationDidChange` for consistency with the project-wide rule (every phase prefixed by its delegate name). These were the only entity phases without the prefix. Consumers must rename their listener methods.
* **Breaking:** `entityMemoryWarning` renamed to `entityOnMemoryWarning`. The phase fires reactively (the OS notifies of memory pressure), so it semantically belongs to the `On` group; the bare name was the only entity phase without a `Will`/`On`/`Did` qualifier. Consumers must rename their listener methods.
* **Breaking:** `clientMemoryWarning` renamed to `clientOnMemoryWarning` for the same reason. Consumers must rename their listener methods.
* **Breaking:** `clientOnReady` renamed to `clientOnBecomeReady`. The bare `Ready` name was a leftover from pre-2.0.0 (where it sat alongside `willBecomeReady` / `didBecomeReady`), kept by the 2.0.0 mass-rename without resolving the inconsistency. The full triplet is now `clientWillBecomeReady` / `clientOnBecomeReady` / `clientDidBecomeReady`, matching how Entity does it.
* **Breaking:** `taskTimeLimitWillChange` / `taskTimeLimitDidChange` removed from `TaskPhase`. Use `taskExecutionTimeLimitWillChange` / `taskExecutionTimeLimitDidChange` instead — task-level time limits were redundant with the per-execution-attempt variant.
* **Breaking:** `taskWillResume` / `taskDidResume` removed from `TaskPhase`. They overlapped with `taskWill/DidUnpause` (paired with `Pause`) and `taskWill/DidUnsuspend` (paired with `Suspend`); the generic `Resume` was an extra layer with no extra information.
* **Breaking:** `taskWillConsumeResource` / `taskDidConsumeResource` (singular) removed from `TaskPhase`. Use `taskWillConsumeResources` / `taskDidConsumeResources` (plural) — a one-resource consumption is just a one-element batch.
* **Breaking:** `txnWillResume` / `txnOnResume` / `txnDidResume` renamed to `txnWillUnpause` / `txnOnUnpause` / `txnDidUnpause`. Txn was the only module using `Resume` as the inverse of `Pause` — every other lifecycle (task, client, entity, scene, sound, component, addon, adapter) uses `Unpause`. Consumers must rename their listener methods.

# [2.2.1] - 2025-03-24
* Added missing `entityOnBecomeReady`, `entityWillBecomeReady`, and `entityDidBecomeReady`, `entityOnInit` phases for consistency between delegates.


# [2.2.0] - 2025-03-10
* All phase functions accept `DelegateT` or `DelegateT[]` instead of just `DelegateT`.
* `invokeListeners` now expects a single `InvokeListenersInit` object instead of individual arguments.

# [2.1.0] - 2025-03-06
* Added types for handling component lifecycle through `ComponentLifecycle`, `ComponentDelegate`, and `ComponentPhase`.

# [2.0.1] - 2025-03-05
* Added missing focus related phases (`gainFocus`, `onFocus`, `loseFocus`) for several delegates.

# [2.0.0] - 2025-03-05
* All delegate listeners functions renamed to include delegate prefix, e.g. `didInit` in `ClientDelegate` became `clientDidInit`. This is a breaking change from past versions.
* Classes can now implement multiple delegates. All listeners were renamed to include delegate name. Most listeners previously overlapped between different delegates, causing implementation name collisions.

# [1.4.0] - 2024-06-28
* Added `TxnLifecycle` and supporting types.

# [1.3.0] - 2024-06-27

* `Adapter` Lifecycle and supporting types.
* Updated NPM dependencies to latest.

# [1.2.0] - 2024-01-13

## Fixed
* Child delegates are now invoked properly when a delegate phase has not been invoked yet. Listeners on child delegates were not invoked when the parent had already completed target phase or when the parent did not have a listener for target phase, but the child did.

## Changed
* Package dependencies updated to latest.
* Changed node version target from 14 -> 18 in Github actions config.
* Several packages added to yarn resolutions to solve security issues found by Github Dependabot. The `@toreda/lifecycle` runtime does not  include these packages, but they are subdependencies required for build.

## Removed
* `lifecycleForEach` was replaced by typed phase functions for each phase type: `serverPhase`, `clientPhase`, `cnxPhase`, etc. Unlike `lifecycleForEach`, the phase functions also recursively call child delegates.

[unreleased]: https://github.com/toreda/lifecycle/compare/v2.2.1...HEAD
[2.2.1]: https://github.com/toreda/lifecycle/compare/v2.2.0...v2.2.1
[2.2.0]: https://github.com/toreda/lifecycle/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/toreda/lifecycle/compare/v2.0.1...v2.1.0
[2.0.1]: https://github.com/toreda/lifecycle/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/toreda/lifecycle/compare/v1.4.0...v2.0.0
[1.4.0]: https://github.com/toreda/lifecycle/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/toreda/lifecycle/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/toreda/lifecycle/compare/v0.0.0...v1.2.0

