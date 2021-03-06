const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  const baseName = envKeys['process.env.BASE_NAME'];

  return {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader'],
        },
        {
          test: /\.(jpg|png)$/,
          use: {
            loader: 'url-loader',
          },
        },
      ],
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      modules: ['app', 'node_modules'],
      alias: {
        Components: path.resolve(__dirname, './src/components/'),
        Assets: path.resolve('./src/assets/'),
        Actions: path.resolve(__dirname, './src/actions/'),
        Utils: path.resolve(__dirname, './src/Utils/'),
      },
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js',
      publicPath: baseName.replace(/"([^"]+(?="))"/g, '$1'),
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new webpack.DefinePlugin(envKeys),
    ],
    devServer: {
      historyApiFallback: true,
    },
  }
};
