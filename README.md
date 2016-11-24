# Klarna UI React Components

[![Build Status](https://travis-ci.org/klarna/ui-react-components.svg)](https://travis-ci.org/klarna/ui-react-components)
[![Code Climate](https://codeclimate.com/github/klarna/ui-react-components/badges/gpa.svg)](https://codeclimate.com/github/klarna/ui-react-components)
[![npm version](https://img.shields.io/npm/v/@klarna/ui-react-components.svg?maxAge=2592000)](https://www.npmjs.com/package/@klarna/ui-react-components)

## Note: This project and its sister project [klarna/ui-css-components](https://github.com/klarna/ui-css-components) are deprecated. Use [@klarna/ui](https://github.com/klarna/ui) instead.

This library is a [React](https://facebook.github.io/react/) wrapper on top of [ui-css-components](https://github.com/klarna/ui-css-components).

## Install

```sh
npm install @klarna/ui-react-components --save
```

This package doesn't have a build, so you must have a Babel pipeline to use it. The minimal set of loaders is:

```javascript
test: /\.(jsx|es6)$/
loader: 'babel'

test: /\.scss$/,
loaders: [
  'style',
  'css?modules,localIdentName=[local]',
  'sass'
]

test: /\.(jpe?g|png|gif|svg|ico|eot|woff|ttf|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
loader: 'file' // or url
```

You can see more in the project's `webpack.config.js`.

## Run locally

> To run the project, NPM 3+ is required.

To run the showroom locally:

```sh
npm install
npm start
```

Open [localhost:7777](http://localhost:7777/).

## Using locally

Most of the time you'll want to change things in `ui-react-components` and see how they reflect in your project. To do that without having to push and publish versions, you need to create a global symlink from `ui-react-components` and then use this symlink in your project.

So first, create the global symlink by doing:

```sh
cd path/to/ui-react-components
npm link
```

Then go to your project and:

```
npm link @klarna/ui-react-components
UV_THREADPOOL_SIZE=100 npm start
```

This uses the global symlink of `ui-react-components` that points to our local git copy. Replace `npm start` with the command you use to start your app, if you use something different.

The `UV_THREADPOOL_SIZE=100` solves a problem you may encounter with symlinks when importing Sass files [https://github.com/jtangelder/sass-loader/issues/100](https://github.com/jtangelder/sass-loader/issues/100).

### Running the tests in PhantomJS locally

```sh
npm test
```

## Running the tests in different browsers

### Prerequisites

First install the required npm packages.
```sh
npm install karma-chrome-launcher
npm install karma-firefox-launcher
npm install karma-ie-launcher
npm install karma-safari-launcher
npm install karma-webdriver-launcher
```

### Run the tests on OS X
```sh
BROWSER=PhantomJS,Chrome,Safari,Firefox npm test
```

### Run the tests on Windows
```sh
BROWSER=PhantomJS,Chrome,Firefox npm test
```

## Running the tests on SauceLabs
```sh
SAUCE_USERNAME=<your_sl_username> SAUCE_ACCESS_KEY=<your_sl_passwd> BROWSER=SL_IE_10,SL_IE_11,SL_MAC_SAFARI_9_0,SL_Android_4_3,SL_Android_5_0,SL_IOS_9_2 npm run test:saucelabs
```


## License

Please check the [LICENSE](LICENSE) file.

## Contributing

Make sure:

1. Your contribution is aligned with the styleguide.
2. Your contribution doesn't break the grid. To avoid that, always use the `$grid` variable to define your sizes, as in `line-height: ($grid * 4)`. As a rule of thumb, if your element total height (sum of content, paddings, margins, etc.) has an integer multiple of `$grid` you should be good.
3. Your code is linted: `npm run lint`.
4. It works in the major browsers, the simplest way is to spawn [ngrok](https://ngrok.com/) and use the cloud service of your choice. Else, you can download IE virtual machines for VirtualBox using `curl -s https://raw.githubusercontent.com/xdissent/ievms/master/ievms.sh | env IEVMS_VERSIONS="9" bash`.

Then:

1. Send a PR to GitHub.
2. Once approved:
	1. Update the version using `npm version` (tag will have `v` prefix) & update `CHANGELOG.md`.
	2. Merge to master and push (with the new tag as well).

Travis will take care of publishing your new version to npm.
