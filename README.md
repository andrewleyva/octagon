# react-octagon

<img src="https://raw.githubusercontent.com/cdaringe/octagon/master/img/octagon.png" height="80px" />

[ ![Codeship Status for Tripwire/octagon](https://app.codeship.com/projects/de913c80-aab0-0134-4a1e-5ab626077bc6/status?branch=master)](https://app.codeship.com/projects/192040) [![Coverage Status](https://coveralls.io/repos/github/Tripwire/octagon/badge.svg?branch=master)](https://coveralls.io/github/Tripwire/octagon?branch=master) ![](https://img.shields.io/badge/standardjs-%E2%9C%93-brightgreen.svg) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

pattern library (storybook) & react component api

see the latest storybook [here](https://tripwire.github.io/octagon/)

this package simply applies a custom theme over semantic-ui, re-exports react-semantic-ui components, and demonstrates some practical usages through storybook.  **if you are looking for a ground up framework, please instead jump directly to [react-semantic-ui](http://react.semantic-ui.com/).**

## install

`npm install --save octagon` or `yarn add --dev octagon`

## usage - pattern library / storybook

- clone this repository
- run `yarn` from the project directory
- run `yarn run build`
- run `yarn start`

open the url shown to see the latest storybook!

<img src="https://github.com/cdaringe/octagon/blob/master/img/octagon-storybook-in-use.mov.gif?raw=true" width="50%" />

## usage - react component library

octagon imports, occasionally wraps, and re-exports piece-wise components from [react-semantic-ui](http://react.semantic-ui.com/).  **you may generally refer to those docs for API usage**.

- add octagon's CSS into your app using whatever css bundling you prefer
  - `import 'octagon/lib/styles/semantic.css'`
- import components from the lib
  - `import SomeComponent from 'octagon/lib/some-component/<SomeComponent>`

## development

- clone this repository
- run `yarn`

now you're off to the races :horse_racing:!  this package offers two different development modes, depending on your use case.  you can run both development modes in parallel, if needed.

### component and styles development

**useful** for when you're developing styles and components for this package only.  in other words, "storybook" development.

`yarn run storybook-dev`

- watches the styles project for changes and rebuilds styles on changes. refreshes the storybook UI.
- watches the react component source for changes and rebuilds components & stories on changes. refreshes the storybook UI.

**for information on how to adjust the theme styles**, see [THEMING.md](THEMEING.md).

### react component api distribution

**useful** if you've `yarn link`ed your front-end project with `octagon` and want to iterate on components without suffering the build/publish lifecycle for `octagon`.

`yarn run component-api-dev`

watches `src/` for react component changes and recompiles the distribution output (e.g. `lib/`).

## contributing

want to contribute?  please see [THEMEING.md](THEMEING.md) & [CONTRIBUTING.md](CONTRIBUTING.md).