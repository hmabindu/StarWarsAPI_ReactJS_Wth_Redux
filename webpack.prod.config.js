const path = require('path')
const webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require ('copy-webpack-plugin');

module.exports = {
    devtool: 'source-map',

    entry: [
        './src/app/index.js'
    ],

    output: {
        path: path.join(__dirname, 'public'),
        filename: '/scripts/bundle.js',
        publicPath: '/public/'
    },

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CopyWebpackPlugin([
            { from: 'src/app/assets/images/starships', to: 'images' }
        ])
    ],

    module: {
        loaders: [
            { test: /\.js?$/,
                loader: 'babel',
                include: path.join(__dirname, 'src') },
            { test: /\.scss?$/,
                loader: 'style!css!sass',
                include: path.join(__dirname, 'src', 'styles')
            },
            {test: /\.(jpe?g|png|gif)$/i, loaders: ['file']},
            {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file'}
        ]
    }
};