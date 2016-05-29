const path = require('path')
const webpack = require('webpack')

const minify = process.env.NODE_ENV == 'production'
const buildDemo = process.env.NODE_ENV == 'demo'

module.exports = {

    entry: buildDemo
        ? { 'demo' : [ './demo/todo/index' ] }
        : { 'refinery-tools' : [ './src/web_modules/index.jsx' ] }
    ,

    output: {
        libraryTarget: "umd",
        path: path.join(__dirname, 'dist'),
        filename: `[name]${ minify ? '.min' : '' }.js`,
    },

    module: {

        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|\.tmp)/,
                loader: 'babel',
            },

            {
                test: /\.jsx$/,
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

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"' + process.env.NODE_ENV + '"'
            },
        }),

        ...(
            minify
                ? [ new webpack.optimize.UglifyJsPlugin({ compress: {warnings: false} }) ]
                : []
        )
    ],
}
