// /**
//  * Created by pusti on 29.07.2017.
//  */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
module.exports = function(paths,isDebug) {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                            loader: 'css-loader',
                            options: {
                                sourceMap: isDebug,
                                modules: true,
                                localIdentName: isDebug ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
                                minimize: !isDebug,
                                discardComments: { removeAll: true },
                            }
                        },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: function () {
                                        return [autoprefixer]
                                    }
                                }
                            },
                            'sass-loader'],
                    }),
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                            loader: 'css-loader',
                            options: {
                                sourceMap: isDebug,
                                modules: true,
                                localIdentName: isDebug ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
                                minimize: !isDebug,
                                discardComments: { removeAll: true },
                            }
                            }
                            ]
                    }),
                },
            ],
        },
        plugins: [
            new ExtractTextPlugin('./styles.css'),
        ],
    };
};