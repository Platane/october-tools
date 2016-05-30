const path = require('path')
const webpack = require('webpack')

module.exports = {

    entry: { 'demo' : [ './demo/todo/index' ] },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: `[name].js`,
    },

    module: {

        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|\.tmp)/,
                loader: 'babel',
            },

            {
                test: /\.html?$/,
                exclude: /node_modules/,
                loaders: [],
            },

            {
                test: /\.css$/,
                loader: 'style!css'
            },

        ]
    },
}
