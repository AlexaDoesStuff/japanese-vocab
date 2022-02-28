const path = require('path');

module.exports = {
 "mode": "none",
 "entry": "./src/index.js",
 "output": {
   "path": __dirname + '/dist',
   "filename": "bundle.js",
   libraryTarget: 'umd',
   globalObject: 'this',
 },
 devServer: {
   contentBase: path.join(__dirname, 'dist')
 },
 "module": {
  rules: [
    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },
    {
      test: /\.png$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'images'
      }
    },
  ],
 }
};
