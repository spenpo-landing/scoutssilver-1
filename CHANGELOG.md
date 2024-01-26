# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html),
and is generated by [Changie](https://github.com/miniscruff/changie).

## v2.2.5 - 2024-01-25

### Changed

- edit environment variables when redeploying instead of adding them

### Fixed

- put file in array in Blob constructor
- bugs with file handling when editing headshot

## v2.2.4 - 2024-01-24

### Removed

- vercel favicon

### Added

- default.svg image

### Changed

- reworked redeploy logic. switch logic based on headshot changed or not
- moved viewport metadata to separate object

## v2.2.3 - 2024-01-21

### Fixed

- UI bug in deployment loading spinner
- only hide admin button when not authenticated

## v2.2.2 - 2024-01-21

### Changed

- give update script write permissions

## v2.2.1 - 2024-01-21

### Changed

- add email and username during update action

## v2.2.0 - 2024-01-21

### Added

- update workflow. admin page checks template version and compares with current repo version in package.json. displays button for running update workflow
- add remote action on repo creation.
- api route for changing password

### Changed

- merge changes from landing-template remote on update action
- update action starts by adding landing-template remote.
- redesigned admin page UI. added hide admin button and change password additional options.

### Removed

- add remote on repo create action. remotes only exist locally. need to be created during each update.

## v2.1.1 - 2024-01-17

### Changed

- setup changelog. include app version at the bottom of /admin page. add environment variable info to readme