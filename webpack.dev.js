const {merge } = require('webpack-merge')
const commom = require('./webpack.common.js')

module.exports = merge(commom, {
    mode: "development",
    devtool: 'cheap-module-source-map',
})