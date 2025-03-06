# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

# [Unreleased]

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

[unreleased]: https://github.com/toreda/lifecycle/compare/v1.4.0...HEAD
[1.4.0]: https://github.com/toreda/lifecycle/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/toreda/lifecycle/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/toreda/lifecycle/compare/v0.0.0...v1.2.0

