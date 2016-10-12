const path = require('path')
const webpack = require('webpack')

var config = {

    entry: { 'demo' : [ './examples/todo/index' ] },

    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
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
                loader: 'file?name=[name].html',
            },

            {
                test: /\.css$/,
                loader: 'style!css'
            },

        ]
    },
}

webpack(config).run(function( err, stats ){
    err && console.log( err, stats )
})
