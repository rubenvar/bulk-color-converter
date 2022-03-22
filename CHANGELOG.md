# Changelog

All notable changes to the _Bulk HSL Converter_ will be documented in this file.

## [1.4.2] - 2022-03-22

### Changed

- Reverted GH action version (was not working 🤷‍♂️).

## [1.4.1] - 2022-03-22

### Changed

- Updated dependencies.

## [1.4.0] - 2021-03-22

### Added

- Add support for hex colors with an alpha channel (hex**a**, #rrggbbaa). It will return hsl**a** for the hexa codes used.
- Modify regex and other code to test for length 4 and 8.
- Result `textarea` changes border color to output colors.
- Added GitHub link svg in top right corner.

### Changed

- Adapt readme and `index.pug` for hexa values.
- `button` variable changed to `convert`.
- Add `eslint` and `prettier` config.

## [1.3.0] - 2021-03-22

### Fixed

- Updated dependencies (Parcel to v2 + its plugins) to fix all build problems.

## [1.2.5] - 2021-03-22

### Changed

- Changed package.json script to migrate to Parcel v2.

## [1.2.4] - 2021-03-22

### Changed

- Added parcel in package.json to try to fix github build error.

## [1.2.3] - 2021-03-07

### Changed

- Auto updated dependencies in GitHub.

## [1.2.2] - 2020-12-21

### Changed

- Updated GitHub action for the new working file structure in rubenvar.github.io.

## [1.2.1] - 2020-12-13

### Changed

- Updated text in readme and `index.pug`.

## [1.2.0] - 2020-12-13

### Added

- Added a **GitHub Action** so the app builds in GitHub on push. The build files also get copied to another repo ([my GitHub page](https://github.com/rubenvar/rubenvar.github.io)), where the app is published and usable.

## [1.1.0] - 2020-12-13

### Changed

Replace Gulp with Parcel for `dev` and `build` processes.

## [1.0.0] - 2020-05-19

Initial release.
