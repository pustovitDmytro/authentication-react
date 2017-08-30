/**
 * Created by pusti on 22.08.2017.
 */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = (PATHS,isDebug) => merge([
    {
        entry: {
            main: ['babel-polyfill', PATHS.source+'/index.js']
        },
        output: {
            path: PATHS.build,
            filename: "bundle.js"
        },
        devtool: 'source-map',
        devServer: {
            compress: true,
            port: 5000,
            hot: true,
            https: false
        },
        resolve: {
            alias: {
                styles: PATHS.build
            }
        },
        plugins: [
            new CleanWebpackPlugin(
                [PATHS.build]
            ),
            new webpack.DefinePlugin({
                _DEBUG: isDebug
            }),
            new webpack.HotModuleReplacementPlugin()
        ]
    },
]);