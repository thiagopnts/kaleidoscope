
module.exports = {
    entry: './src/main.js',
    resolve: {
		extensions: ['', '.js'],
    },
    module: {
		loaders: [ { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel' } ],
    },
    output: {
        path: __dirname,
        filename: 'dist/360viewer.min.js',
        libraryTarget: 'umd',
        library: 'ThreeSixtyViewer',
    },
}
