# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

# [Unreleased]

## Added
* `LogLike` interface and `logLike` type guard in `src/log/like.ts`. A minimal structural logger contract (`error`, `warn`, `info`, `debug`, `trace`) satisfied by both the global `console` and `@toreda/log`'s `Log`. Re-exported from the package barrel.
* `RequestPhase` gained six new `Will`/`Did` pairs covering previously unhooked stages of an HTTP fetch: `requestWill/DidSend` (writing the request body), `requestWill/DidReceiveResponse` (response headers arrived, before payload processing), `requestWill/DidReceiveBody` (body bytes received off the wire, distinct from decode/parse), `requestWill/DidCancel` (caller-initiated abort, distinct from `Timeout` and `Terminate`), `requestWill/DidRetry` (retry attempt issued — backoff, retry counters, idempotency hooks), and `requestWill/DidQueue` (connection-pool waits / rate-limit queueing).
* JSDoc on `RequestPhase` clarifying the semantics of terminal phases. `End` is the universal final hook that fires regardless of outcome (so listeners do not need to check an error parameter); `Succeed`, `Fail`, `Terminate`, `Timeout`, and `Cancel` each represent a distinct outcome and fire before `End`. `Close` is transport-layer (connection closed), distinct from operation-layer end.
* Compile-time exhaustiveness check in `src/request/phases.ts` ensures the runtime `requestPhases` array stays in sync with the `RequestPhase` union — adding a phase to one without the other now fails type-check.
* Compile-time exhaustiveness check in `src/entity/phases.ts` (same pattern as `requestPhases`) ensures `entityPhases` and `EntityPhase` stay in sync.
* Real JSDoc on `entityPhase()` describing parameters, return semantics (matches the recent `requestPhase()` doc), and the at-most-once-per-delegate behavior.

## Changed
* `phase` is deprecated. Use `endPhase` instead.
* Both `phase` and `endPhase` have been changed from async to sync calls.
* All public phase functions (`serverPhase`, `clientPhase`, `cnxPhase`, etc.), `invokeListener`, `invokeListeners`, `invokeChildListeners`, `canInvoke`, and `InvokeListenersInit.base` now accept `LogLike` instead of `@toreda/log`'s `Log`. A `Log` instance still satisfies the new contract structurally, so existing callers don't need changes.
* Internal scoped log calls (`log.makeLog('scope').error(...)`) replaced with prefixed messages (`log.error('[scope] ...')`) since `LogLike` is intentionally minimal and does not include `makeLog`.
* `RequestPhase` and `requestPhases` are now sorted alphabetically (was: partly sorted with later additions appended unsorted). No behavior change — phases iterate in a different order.
* `RequestLifecycle` no longer declares an empty `constructor() { super(); }`; the implicit constructor inherited from `Lifecycle<RequestPhase>` is equivalent.
* `EntityLifecycle` no longer declares an empty `constructor() { super(); }`; same rationale as `RequestLifecycle`.
* Fixed `@category Entity` typo on `entityPhase()` — now `Entities`, matching every other reference.

## Removed
* `@toreda/log` from `peerDependencies`. Consumers no longer need to install it to use this package; any logger matching `LogLike` works (including plain `console`).
* **Breaking:** `requestWillReset` and `requestDidReset` removed from `RequestPhase`. Semantics were ambiguous in a fetch context (state reset? connection reset? retry attempt?). Use `requestWill/DidRetry` for retry-attempt cases. Consumers with listeners on these phases will get a TypeScript error and must remove or rename them.
* **Breaking:** `orientationWillChange` / `orientationOnChange` / `orientationDidChange` renamed to `entityOrientationWillChange` / `entityOrientationOnChange` / `entityOrientationDidChange` for consistency with the project-wide rule (every phase prefixed by its delegate name). These were the only entity phases without the prefix. Consumers must rename their listener methods.
* **Breaking:** `entityMemoryWarning` renamed to `entityOnMemoryWarning`. The phase fires reactively (the OS notifies of memory pressure), so it semantically belongs to the `On` group; the bare name was the only entity phase without a `Will`/`On`/`Did` qualifier. Consumers must rename their listener methods.
* **Breaking:** `clientMemoryWarning` renamed to `clientOnMemoryWarning` for the same reason. Consumers must rename their listener methods.

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

