var webpack = require('webpack')
module.exports = {
    output: {
        library: 'AltConnect',
        libraryTarget: 'umd',
        filename: 'index.js',
        chunkFilename: 'index.js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    resolve: {
        extensions: ['', '.json', '.node', '.js', '.jsx']
    },
    node: {
        Buffer: false
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ]
};
