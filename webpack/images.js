/**
 * Created by pusti on 29.07.2017.
 */

module.exports = (isDebug) =>({
    module: {
        rules: [
            {
                test: /\.(jpg|png|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: (isDebug)?'[name]-[hash].[ext]':'[hash].[ext]',
                    outputPath: 'assets/'
                },
            },
        ],
    },
});