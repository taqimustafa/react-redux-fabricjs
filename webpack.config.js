const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: [
      '.js', '.jsx',
    ],
    alias: {
      components: path.resolve('src/components'),
      views: path.resolve('src/views'),
      styles: path.resolve('src/styles'),
      assets: path.resolve('src/assets'),
      reducers: path.resolve('src/reducers'),
      store: path.resolve('src/store'),
      actions: path.resolve('src/actions'),
      translations: path.resolve('src/translations'),
      general: path.resolve('src/general'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: '[name]--[local]--[hash:base64:8]',
              },
            }, {
              loader: 'postcss-loader',
              options: {
                modules: true,
                sourceMap: true,
              },
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: '[name]--[local]--[hash:base64:8]',
              },
            }, {
              loader: 'postcss-loader',
              options: {
                modules: true,
                sourceMap: true,
              },
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      }, {
        test: /\.(jsx|js)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: ['file-loader?name=images/[name].[ext]', 'image-webpack-loader']
      },
    ],
  },
  cache: true,
  devtool: 'source-map',
  plugins: !isProduction
    ? [
      new HtmlWebpackPlugin({
        title: 'React - Fabricjs',
        minify: {
          collapseWhitespace: isProduction,
        },
        hash: false,
        template: './src/index.html',
      }),
      new ExtractTextPlugin({
        filename: 'app.css',
        disable: !isProduction,
        allChunks: true,
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ]
    : [
      new HtmlWebpackPlugin({
        title: 'React - Fabricjs',
        minify: {
          collapseWhitespace: isProduction,
        },
        hash: false,
        template: './src/index.html',
      }),
      new ExtractTextPlugin({
        filename: 'app.css',
        disable: !isProduction,
        allChunks: true,
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        compress: {
          sequences: true,
          dead_code: true,
          conditionals: true,
          booleans: true,
          unused: true,
          if_return: true,
          join_vars: true,
          drop_console: true,
        },
        output: {
          comments: false,
        },
      }),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|html)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
};
