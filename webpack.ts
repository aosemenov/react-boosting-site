require('dotenv').config();
const Dotenv = require('dotenv-webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
  template: path.resolve(__dirname, 'public', 'index.html'),
});

const copyWebpackPlugin = new CopyWebpackPlugin({
  patterns: [
    {
      from: path.resolve(__dirname, 'public', 'media'),
      to: 'media'
    }
  ]
});

const dotEnv = new Dotenv()

const isDevelopment = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const config = {
  mode: isDevelopment ? 'development' : 'production',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    alias: {
      'src': path.join(__dirname, 'src')
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
            },
         }
        ],
      },
      {
        test: /\.css/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
        type: 'javascript/auto'
      },
    ],
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'public'),
      },
      {
        directory: path.join(__dirname, 'src'),
      }
    ],
    historyApiFallback: true,
    port,
  },
  plugins: [
    htmlPlugin,
    dotEnv,
    copyWebpackPlugin,
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};

module.exports = config;
