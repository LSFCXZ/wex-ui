// webpack.component.js 按需加载，单独组件打包
const {VueLoaderPlugin}  = require('vue-loader')
const components = require('../components.json')
const path = require('path')
const utlis = require('./utlis')
const list = {} //入口文件
const basePath = path.resolve(__dirname, '../')
Object.keys(components).forEach(key => {
  list[key] = path.join(basePath,  components[key])
})
// console.log(list);
const webpackconfig = {
  entry: list,
  mode: 'production',//生产模式
  output: {
    path: utlis.DIST_PATH,
    filename: '[name].js',
    library: 'wex-ui',
    libraryTarget: 'umd',
  },
  module: {//告诉webpack，什么文件使用什么rules
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          }
        ]
      }
    ]
    
  },
  plugins: [
     new VueLoaderPlugin()
  ]
  
}
module.exports = webpackconfig