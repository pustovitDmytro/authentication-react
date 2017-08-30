/**
 * Created by pusti on 29.07.2017.
 */
module.exports = function(paths) {
    return {
        module: {
            rules: [{
                test: /\.json$/,
                loader: "json-loader"
            }]
        }
    };
};