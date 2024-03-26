const {merge } = require('webpack-merge')
const commom = require('./webpack.common.js')

module.exports = merge(commom, {
    mode: "production",
})