const path = require('path'),
    merge = require('webpack-merge'),
    webpack = require('webpack'),
    NpmInstallPlugin = require('npm-install-webpack-plugin'),
    pkg = require('./package.json'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanPlugin = require('clean-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');


const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
    style: path.join(__dirname, 'app/main.css')
};

process.env.BABEL_ENV = TARGET;

const common = {
    entry: {
        app: PATHS.app,
        style: PATHS.style
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
           {
                test: /\.jsx?$/,
                loaders: ['babel?cacheDirectory'],
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
        })
    ]
};

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
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
            new webpack.HotModuleReplacementPlugin(),
            new NpmInstallPlugin({
                save: true // --save
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
            })
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
                    loader: extractCSS.extract(['css','sass']),
                    include: PATHS.app
                },
                {
                    test: /\.less/i,
                    loader: extractLESS.extract(['css','less']),
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
            // Setting DefinePlugin affects React librarion size
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
            })
        ]
    });
}
