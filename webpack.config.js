const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env, argv) => {
  const plugins = [
    new MiniCssExtractPlugin({
     filename: "/css/[name].css"
    })
  ];
  if(process.env.NODE_ENV === 'production') {
    plugins.push(new OptimizeCssAssetsPlugin({cssProcessorOptions: { zindex: false, discardComments: { removeAll: true } }}));
  }
  return {
      mode: process.env.NODE_ENV,
      entry: "./src/js/index.js",
      resolve: {
        extensions: ['.scss', '.css', '.js', '.jsx']
      },
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      },
      output: {
          path: path.resolve(__dirname, 'dist'),
          filename: "[name].js"
      },
      module: {
          rules: [
            {
                 test: /(\.js|\.jsx)$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['@babel/preset-env'],
                     presets: ['@babel/react'],
                     plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties']
                 }
              },
              {
                 test: /\.(css|sass|scss)$/,
                 use: [
                     MiniCssExtractPlugin.loader,
                     {
                         loader: 'css-loader',
                         options: {
                             autoprefixer: true,
                             sourceMap: true
                         }
                     },
                     {
                         loader: 'sass-loader',
                         options: {
                             sourceMap: true
                         }
                     }
                 ]
              }
          ]
      },
      plugins
  }
}
