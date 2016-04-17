[//]: # Markdown Help: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

Kanban
======

NPM
---

| NPM Command | Wot it do                                                                       |
|:------------|:--------------------------------------------------------------------------------|
| install     | Install packages. *See [install](https://docs.npmjs.com/cli/install)*           |
| prune       | removes packages that are not listed on the parent package's dependencies list. |
| dedupe      | Reduce duplication of dependencies                                              |
| shrinkwrap  | Lock down dependency versions

WebPack
-------

| Dev Package                                 | Reason 
|:--------------------------------------------|:----------------------------------------------------------------------------------------|
| npm-install-webpack-plugin                  | Detects new 'require' addition in code and automatically installs & saves (npm) package.
| html-webpack-plugin & html-webpack-template | Creates new index.html on each build updating JS script inclusions.
| clean-webpack-plugin                        | Purge 'build' directory prior to each build.
| jscs-loader<sup>x</sup>                     | Runs your source through the [JSCS style checker](http://jscs.info/).
| css-loader                                  | css loader module for webpack.
| less-loader                                 | less loader module for webpack
| sass-loader                                 | sass loader module for webpack
| node-sass                                   | provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.
| extract-text-webpack-plugin | Extract latent styling into CSS/LESS/SASS files; avoid the [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content) problem. |

To run stats:
> ```% npm run stats```

A ```stats.json``` will have been created that can be uploaded to analyze [here](http://webpack.github.io/analyse/#home) or [here](http://chrisbateman.github.io/webpack-visualizer/)

| App Package                   | Reason                                                                                     |
|:------------------------------|:-------------------------------------------------------------------------------------------|
| autobind-decorator            | Provides @autobind to bind 'this' to the annotated method.                                 |
| deep-freeze-node<sup>x</sup>  | Make an entire data structure immutable.                                                   |
| react-dnd                     | [Drag 'n Drop for React](https://gaearon.github.io/react-dnd/)                             |
| react-input-field<sup>x</sup> | carefully crafted [input field for React](https://www.npmjs.com/package/react-input-field) |
| react-datagrid<sup>x</sup>    | carefully crafted [DataGrid for React](http://zippyui.com/react-datagrid/#/)               |
| react-combo<sup>x</sup>       | carefully crafted [DropDown for React](https://github.com/zippyui/react-combo)             |

<sup>x</sup> - not currently used.

Testing
-------
![](https://s3.amazonaws.com/codementor_content/2015-Dec-week1/lost.jpg)

Using [Karma with WebPack](http://mike-ward.net/2015/09/07/tips-on-setting-up-karma-testing-with-webpack/)

[Testing in ES6 with Mocha and Babel 6](http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/)

[Karma vs Mocha/JSDOM](https://medium.com/podio-engineering-blog/from-karma-to-mocha-with-a-taste-of-jsdom-c9c703a06b21#.87qy2mwxa)  

[Mocha Testing Redux](https://www.codementor.io/reactjs/tutorial/redux-unit-test-mocha-mocking)

| Test Package                         | Reason                                                                                            |
|:-------------------------------------|:--------------------------------------------------------------------------------------------------|
| analyze-es6-modules<sup>x</sup>      | [static analysis of ES6 modules ](https://www.npmjs.com/package/analyze-es6-modules) determining if imports and exports align |
| eslint                               | [Pluggable static code analysis (linting) utility for JavaScript.](http://eslint.org/)            |
| eslint-plugin-react                  | React specific linting rules for ESLint.                                                          |
| babel-eslint                         | ESLint using Babel as the parser.                                                                 |
| isparta-instrumenter-loader          | Instrument Babel code using IsParta; leverages [Istanbul](https://github.com/gotwarlost/istanbul) |
| react-addons-test-utils              | Tools to assist testing React.                                                                    |
| react-dnd-test-backend               | [Test React Dnd](http://gaearon.github.io/react-dnd/docs-test-backend.html).                      |
| legit-tests<sup>x</sup>              | Replacement for ```react-addons-test-utils```                                                     |
| redux-mock-store<sup>x</sup>         | [Test Redux stores](https://github.com/reactjs/redux/blob/master/docs/recipes/WritingTests.md).   |
| karma                                | [Karama](http://karma-runner.github.io/0.13/index.html)                                           |
| karma-coverage                       | Karma adapter to run Istanbul code coverage.                                                      |
| karma-babel-preprocessor             | Preprocessor to compile ES6 on the fly with Babel.                                                |
| karma-mocha                          | Karma adapter to leverage Mocha. *See 'mocha' below&hellip;*                                      |
| karma-chai                           | Karma adapter to leverage Chai. *See 'chai' below&hellip;*                                        |
| karma-phantomjs-launcher             | Karma PhantomJS launcher.                                                                         |
| karma-firefox-launcher               | Karma Firefox launcher.                                                                           |
| karma-chrome-launcher                | Karma Chrome launcher.                                                                            |
| karma-ie-launcher                    | Karma IE launcher.                                                                                |
| karma-sourcemap-loader               | Allows Karma to load source maps from transpiled Babel code.                                      |
| karma-spec-reporter                  | Test reporter, that prints detailed results to console.                                           |
| karma-webpack                        | The link between the two.                                                                         |
| karma-webpack-with-fast-source-maps<sup>x</sup> | Fork of ```karma-webpack```. *One or the other!*                                       |
| enzyme<sup>x</sup>                   | Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components output. |
| chai-enzyme<sup>x</sup>              | Chai assertions for ```enzyme```                                                                  |
| mocha                                | A feature-rich [JavaScript test framework](https://mochajs.org/) that simplifies async testing.   |
| codeceptjs<sup>x</sup>               | With [CodeceptJS](http://codecept.io/), acceptance tests from user's perspective can be written.  |
| chai                                 | A BDD / TDD [assertion library](http://chaijs.com/).                                              |
| react-unit<sup>x</sup>               | Obviates the need for PhantomJS.                                                                  |
| phantomjs-prebuilt                   | Installer for PhantomJS, headless webkit with JS API.                                             |
| phantomjs-polyfill                   | Polyfill for ```function.prototype.bind``` missing from PhantomJS.                                |

### [Selenium](http://docs.seleniumhq.org/)
[Mastering Selenium Testing Tools](http://my.safaribooksonline.com/video/software-engineering-and-development/software-testing/9781783985487)<sup>v</sup>  
[Mastering Selenium WebDriver](http://my.safaribooksonline.com/book/web-development/9781784394356) *NOTE: TestNG!*  
[Selenium Testing Tools Cookbook - Second Edition](http://my.safaribooksonline.com/book/software-engineering-and-development/software-testing/9781784392512) *NOTE: TestNG!*
[Selenium Maven Archetype](https://github.com/sebarmeli/Selenium2-Java-QuickStart-Archetype) 
[Gridlastic; Selenium Grid in Cloud])https://www.gridlastic.com/)  
[Nightwatch](http://nightwatchjs.org/guide#installation) - automated testing framework for web applications and websites, written in Node.js and using the Selenium WebDriver API. 
[Nightwatch in Gridlastic](https://www.gridlastic.com/nightwatch-js-example.html)  
[React Starter Kit using Nightwatch](https://github.com/dqdinh/react-webpack-starter)  
Use [data-selenium-id](http://webdesign.tutsplus.com/tutorials/all-you-need-to-know-about-the-html5-data-attribute--webdesign-9642) to hook in Selenium.


<sup>v</sup> - video


### Misc Testing

[RestAssured](https://github.com/jayway/rest-assured/wiki/Usage)<sup>x</sup> 

<sup>x</sup> - not currently used.


Misc
----

| Code Style Package | Reason                                                     |
|:-------------------|:---------------------------------------------------------- |
| gh-pages           | Task for publishing files to a gh-pages branch on GitHub. |
| jscs<sup>x</sup>   | code style linter/formatter for programmatically enforcing your style guide |

<sup>x</sup> - not currently used.

React
=====

[Best Practices](https://blog.risingstack.com/react-js-best-practices-for-2016/)

React Form Validation
---------------------

* Determine which state you need to represent the form. Input values and error messages are the obvious ones to start with, but you may need others at a minimum, such as checkng whether a field has been interacted with yet.
* Write a render() method which uses that state.
* Hook up event handlers which update the state as necessary when form input changes.
* The fun starts when you realise you need to use the same valiation code at different times. For onChange/onBlur, you need to be able to validate fields and update the related state individually. For onSubmit validation, you need to be able to validate every field.
* Cross-field validation adds to the fun, as does async validation, debouncing inputs and being able to show soft warnings rather than validation errors. Browsers auto-populating fields just adds cruelty when you thought you were done.
* Depending on how complex your form is, you may not encounter/need all this.
[The proposal for the upcoming rewrite of redux-form](https://github.com/erikras/redux-form/issues/726) is an interested read related to form validation in React, as it describes two ways to do lots of different things you you need to do to handle forms (the old API and the new). [react-formal](https://github.com/jquense/react-formal) is also interesting as a schema-based approach to form validation. Even if you're not using form libraries, they're solving the same problems you'll be encountering soon.
