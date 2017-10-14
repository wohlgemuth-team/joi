'use strict';

const Path = require('path');

module.exports = {
    target: 'node',

    entry: Path.join(__dirname, './lib/index.js'),
    output: {
        filename: 'joi.js',
        path: Path.join(__dirname, './build'),
        library: 'joi',
        libraryTarget: 'commonjs-module'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: Path.join(__dirname, './lib'),
                loader: 'babel-loader'
            }
        ]
    }
};
