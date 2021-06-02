const { merge } = require("webpack-merge");
const baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        open: true,
        port: '7079',
        clientLogLevel: 'warning',
        disableHostCheck: true,
        compress: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        historyApiFallback: true,
        overlay: { warnings: false, errors: true },
    },
})
