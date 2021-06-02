const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const { name } = require('./package');

module.exports = {
  entry: {
    index: './index.js'
  },
  output: {
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
            {
              loader: 'vue-loader',
              // options: {
              //   // 默认是 require('vue-template-compiler') ,用来编译vue2的，@vue/compiler-sfc是编译vue3的
              //   compiler: require('@vue/compiler-sfc')
              // }
            }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
      },
      {
        test: /\.(le|c)ss$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      chunks: ['index'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCss: true,
        minifyJs: true,
        removeComments: false
      }
    }),
    new VueLoaderPlugin(),
  ],
};
