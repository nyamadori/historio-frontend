module.exports = {
  entry: {
    'lib/index':      './src/server',
    'public/bundle': './src/client'
  },

  output: {
    filename: '[name].js',
    library: 'server',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },

  resolve: {
    extensions: ['', '.jsx', '.js', '.json']
  }
};
