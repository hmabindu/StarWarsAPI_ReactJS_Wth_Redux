const path = require('path')
const webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval',

    entry: [
        'webpack-hot-middleware/client',
        './src/app/index.js'
    ],

    output: {
        path: path.join(__dirname, 'public'),
        filename: '/scripts/bundle.js',
        publicPath: '/public/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [
            { test: /\.js?$/,
                loader: 'babel',
                include: path.join(__dirname, 'src')
            },
            {test: /\.scss?$/,
                loader: 'style!css!sass',
                include: path.join(__dirname, 'src', 'styles')
                },
            {test: /\.(jpe?g|png|gif)$/i,
                loader: 'file-loader?name=/images/[name].[ext]' },
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file'}
        ]
    },
}