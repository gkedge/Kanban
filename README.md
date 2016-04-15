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
| autobind-decorator | Provides @autobind to bind 'this' to the annotated method. |

