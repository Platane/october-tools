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

    // 'transform-react-constant-elements',
    // 'transform-react-display-name',
    // 'transform-react-inline-elements',
    // 'transform-react-jsx',
    // 'transform-react-jsx-compat',
    // 'transform-react-jsx-source',
]

module.exports = {

    entry: {
        'demo' : [ './demo/todo/index' ]
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
                    // presets: ['es2015', 'stage-1'],
                    plugins: babelPlugins,
                }
            },

            {
                test: /\.jsx$/,
                exclude: /(node_modules|\.tmp)/,
                loader: 'babel',
                query: {
                    // presets: ['es2015', 'stage-1', 'react'],
                    presets: ['react'],
                    plugins: babelPlugins,
                }
            },

            {
                test: /\.html?$/,
                exclude: /node_modules/,
                loaders: [
                    // 'html?attrs=script:src',
                    // 'file?name=[hash].[ext]'
                ],
            },

            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },

        ]
    },
}
