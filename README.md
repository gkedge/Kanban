[//]: # Markdown Help: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

[//]: # npm install Help: https://docs.npmjs.com/cli/install 

Kanban
======

WebPack
-------

| Dev Package                                                              | Reason                                                                                                                              |
|:-------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------|
| npm-install-webpack-plugin                                               | Detects new 'require' addition in code and automatically installs & saves (npm) package.                                            |
| html-webpack-plugin & html-webpack-template                              | Creates new index.html on each build updating JS script inclusions.                                                                 |
| clean-webpack-plugin                                                     | Purge 'build' directory prior to each build.                                                                                        |
| autobind-decorator                                                       | Provides @autobind to bind 'this' to the annotated method.                                                                          |
| extract-text-webpack-plugin/css-loader/less-loader/sass-loader/node-sass | Extract latent styling into CSS/LESS/SASS files; avoid the [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content) problem. |

To run stats:
> ```% npm run stats```

A ```stats.json``` will have been created that can be uploaded to analyze [here](http://webpack.github.io/analyse/#home) or [here](http://chrisbateman.github.io/webpack-visualizer/)

| App Package        | Reason                                                     |
|:-------------------|:-----------------------------------------------------------|
| autobind-decorator | Provides @autobind to bind 'this' to the annotated method. 

Testing
=======

Using [Karma with WebPack](http://mike-ward.net/2015/09/07/tips-on-setting-up-karma-testing-with-webpack/)

| Test Package                         | Reason                                                                                            |
|:-------------------------------------|:--------------------------------------------------------------------------------------------------|
| eslint                               | [Pluggable static code analysis (linting) utility for JavaScript.](http://eslint.org/)            |
| eslint-plugin-react                  | React specific linting rules for ESLint.                                                          |
| babel-eslint                         | ESLint using Babel as the parser.                                                                 |
| isparta-instrumenter-loader          | Instrument Babel code using IsParta; leverages [Istanbul](https://github.com/gotwarlost/istanbul) |
| react-addons-test-utils              | Tools to assist testing React.                                                                    |
| legit-tests                          | Replacement for ```react-addons-test-utils```                                                     |
| karma                                | [Karama](http://karma-runner.github.io/0.13/index.html)                                           |
| karma-coverage                       | Karma adapter to run Istanbul code coverage.                                                      |
| karma-babel-preprocessor             | Preprocessor to compile ES6 on the fly with Babel.                                                |
| karma-mocha                          | Karma adapter to leverage Mocha. *See 'mocha' below&hellip;*                                      |
| karma-phantomjs-launcher             | Karma PhantomJS launcher.                                                                         |
| karma-firefox-launcher               | Karma Firefox launcher.                                                                           |
| karma-chrome-launcher                | Karma Chrome launcher.                                                                            |
| karma-ie-launcher                    | Karma IE launcher.                                                                                |
| karma-sourcemap-loader               | Allows Karma to load source maps from transpiled Babel code.                                      |
| karma-spec-reporter                  | Test reporter, that prints detailed results to console.                                           |
| karma-webpack                        | The link between the two.                                                                         |
| karma-webpack-with-fast-source-maps* | Fork of ```karma-webpack```. *One or the other!*                                                  |
| mocha                                | A feature-rich [JavaScript test framework](https://mochajs.org/) that simplifies async testing.   |
| codeceptjs                           | With [CodeceptJS](http://codecept.io/), acceptance tests from user's perspective can be written.  |
| chai                                 | A BDD / TDD [assertion library](http://chaijs.com/).                                              |
| react-unit                           | Obviates the need for PhantomJS.                                                                  |
| phantomjs-prebuilt                   | Installer for PhantomJS, headless webkit with JS API.                                             |
| phantomjs-polyfill                   | Polyfill for ```function.prototype.bind``` missing from PhantomJS.                                |
