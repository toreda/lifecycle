# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

# [Unreleased]

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

[1.3.0]: https://github.com/toreda/lifecycle/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/toreda/lifecycle/compare/v0.0.0...v1.2.0
[unreleased]: https://github.com/toreda/lifecycle/compare/v1.2.0...HEAD
