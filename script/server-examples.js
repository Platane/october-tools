const path = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

var config = {

    entry: { 'demo' : [ './examples/todo/index' ] },

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
                loader: 'file?name=[name].html',
            },

            {
                test: /\.css$/,
                loader: 'style!css'
            },

        ]
    },
}

new WebpackDevServer(webpack(config), {
    contentBase: config.output.path,
    stats: {
        colors: true,
        chunkModules: false,
        assets: true,
    },
})
    .listen( 8082,
        function() {
            console.log(`open localhost:8082 in your browser`)
        }
    )
