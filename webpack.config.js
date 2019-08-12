const webpack = require('webpack');
const config = {
    mode: 'development',
    entry: {
        learnjs: './src/js/src/learnjs.js',
        blockly: './src/js/src/blockly.js'


    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',

    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            }
        ]
    },

};
module.exports = config;