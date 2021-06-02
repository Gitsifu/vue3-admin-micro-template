const { merge } = require("webpack-merge");
const baseWebpackConfig = require('./webpack.base.conf')
const webpack = require('webpack')
const path = require('path')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    optimization: {
        minimize: true,
        minimizer: [
            // 压缩js
            new TerserWebpackPlugin(),
            // 压缩css
            new OptimizeCssAssetsWebpackPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.(le|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        // short-circuits all Vue.js warning code
        // 使用 Vue.js 指南中描述的部署方式去除 Vue.js 中的警告。
        // https://vue-loader-v14.vuejs.org/zh-cn/workflow/production.html
        // https://cn.vuejs.org/v2/guide/deployment.html
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // 提取css为单独文件
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
    ]
})
