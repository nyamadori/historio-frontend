module.exports = {
  entry: './src/app.jsx',

  output: {
    filename: 'app.js',
    path: './'
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
  }
};
