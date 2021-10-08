const path = require('path')

exports.resolve = function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

exports.APP_PATH = exports.resolve('src/index.js')//组件入口
exports.DIST_PATH = exports.resolve('lib')//组件打包输出样式
exports.STYLES_PATH = exports.resolve('lib/styles')//打包样式输出目录