const path = require('path')

const babelPlugins = [
    'transform-class-properties',
    'transform-es2015-modules-commonjs',
    'transform-es2015-destructuring',
    'transform-es2015-parameters',
    'transform-es2015-classes',
    'transform-es2015-spread',
    'transform-object-rest-spread',
    'transform-export-extensions',
]

const babelPresets = process.env.NODE_ENV == 'production'
    ? ['es2015', 'stage-1']
    : []

module.exports = {

    entry: {
        'demo' : [ './demo/todo/index' ],
    },

    output: {
        // libraryTarget: 'commonjs2',
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },

    module: {

        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|\.tmp)/,
                loader: 'babel',
                query: {
                    presets: babelPresets,
                    plugins: babelPlugins,
                }
            },

            {
                test: /\.jsx$/,
                exclude: /(node_modules|\.tmp)/,
                loader: 'babel',
                query: {
                    presets: [ ...babelPresets, 'react'],
                    plugins: babelPlugins,
                }
            },

            {
                test: /\.html?$/,
                exclude: /node_modules/,
                loaders: [],
            },

            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },

        ]
    },
}
