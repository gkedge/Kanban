// ,
//     configSuitcss = require('stylelint-config-suitcss');
const path = require('path'),
      CleanPlugin = require('clean-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      FlowStatusWebpackPlugin = require('flow-status-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),

      merge = require('webpack-merge'),
      webpack = require('webpack'),
      NpmInstallPlugin = require('npm-install-webpack-plugin'),
      pkg = require('./package.json'),
      stylelint = require('stylelint');


const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
    style: path.join(__dirname, 'app/main.css'),
    test: path.join(__dirname, 'tests/unit'),
    acceptance: path.join(__dirname, 'tests/commands/**/.js')
};

process.env.BABEL_ENV = TARGET;

const common = {
    entry: {
        app: PATHS.app
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel?cacheDirectory', 'eslint'],
                include: PATHS.app
            },
            {
                test: /\.css$/,
                loaders: ['postcss'],
                include: PATHS.app
            }
        ]
    },
    postcss: function () {
        return [stylelint({
            rules: {
                'color-hex-case': 'lower'
            }
        })];
    }
};

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        entry: {
            style: PATHS.style
        },
        devtool: 'eval-source-map',
        output: {
            path: PATHS.build,
            filename: '[name].js'
        },
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,

            // display only errors to reduce the amount of output
            stats: 'errors-only',

            // parse host and port from env so this is easy
            // to customize
            host: process.env.HOST,
            port: process.env.PORT || 8888
        },
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loaders: ['style', 'css'],
                    include: PATHS.app
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'node_modules/html-webpack-template/index.ejs',
                title: 'Kanban app',
                appMountId: 'app',
                inject: false
            }),
            new webpack.HotModuleReplacementPlugin(),
            new NpmInstallPlugin({
                save: true // --save
            }),
            new FlowStatusWebpackPlugin({
                restartFlow: false
            })
        ]
    });
}


if (TARGET === 'build' || TARGET === 'stats') {
    const extractCSS = new ExtractTextPlugin('[name].[chunkhash].css');
    const extractLESS = new ExtractTextPlugin('[name].[chunkhash].less');

    module.exports = merge(common, {
        entry: {
            vendor: Object.keys(pkg.dependencies).filter(function (v) {
                // Exclude alt-utils as it won't work with this setup
                // due to the way the package has been designed
                // (no package.json main).
                return v !== 'alt-utils';
            }),
            style: PATHS.style
        },
        output: {
            path: PATHS.build,
            filename: '[name].[chunkhash].js',
            chunkFilename: '[chunkhash].js'
        },

        module: {
            loaders: [
                // Extract CSS during build
                {
                    test: /\.css$/i,
                    loader: extractCSS.extract(['css', 'sass']),
                    include: PATHS.app
                },
                {
                    test: /\.scss$/i,
                    loader: extractCSS.extract(['css', 'sass']),
                    include: PATHS.app
                },
                {
                    test: /\.less/i,
                    loader: extractLESS.extract(['css', 'less']),
                    include: PATHS.app
                }
            ]
        },
        plugins: [
            new CleanPlugin([PATHS.build]),
            // Output extracted CSS to a file
            extractCSS,
            extractLESS,
            new webpack.optimize.DedupePlugin(),
            // Extract vendor and manifest files
            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest']
            }),
            // Setting DefinePlugin affects React library size.
            // DefinePlugin replaces content 'as is' so we need
            // some extra quotes for the generated code to make
            // sense
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"'
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new HtmlWebpackPlugin({
                template: 'node_modules/html-webpack-template/index.ejs',
                title: 'Kanban app',
                appMountId: 'app',
                inject: false
            })
        ]
    });
}

if (TARGET === 'test' || TARGET === 'tdd' || TARGET.startsWith('acceptance')) {
    module.exports = merge(common, {
        devtool: 'inline-source-map',
        stats: {
          // Config for minimal console.log mess.
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false
        },
        resolve: {
            alias: {
                'app': PATHS.app,
                'test': PATHS.test,
                'acceptance': PATHS.acceptance
            }
        },
        module: {
            preLoaders: [
                {
                    test: /\.jsx?$/,
                    loaders: ['isparta-instrumenter'],
                    include: PATHS.app
                }
            ],
            loaders: [
                {
                    test: /\.jsx?$/,
                    loaders: ['babel?cacheDirectory'],
                    include: [PATHS.test, PATHS.acceptance]
                }
            ]
        },
        plugins: [
            new FlowStatusWebpackPlugin({
                restartFlow: false
            })
        ]
        
    });
}
