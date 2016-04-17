
module.exports = {
    entry: './src/index.js',
    resolve: {
	extensions: ['', '.js'],
    },
    module: {
	loaders: [
	    {
		test: /\.js$/,
		exclude: /(node_modules|bower_components)/,
		loader: 'babel',
		query: {
		    presets: ['es2015'],
		}
	    }
	],
    },
    output: {
        path: __dirname,
        filename: 'dist/360viewer.min.js',
        libraryTarget: 'umd',
        library: 'ThreeSixtyViewer',
    },
}
