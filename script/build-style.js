const path = require('path')
const webpack = require('webpack')

var config = {

    entry: { 'style/style' : [ './src/web_modules/style/style.js' ] },

    output: {
        path: path.join(__dirname, '../lib'),
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
                test: /\.css$/,
                loader: 'style!css'
            },

        ]
    },
}

webpack(config).run(function( err, stats ){
    err && console.log( err, stats )
})
