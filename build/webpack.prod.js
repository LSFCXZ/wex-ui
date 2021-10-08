// webpack.component.js 按需加载，单独组件打包
const {VueLoaderPlugin}  = require('vue-loader')
const utlis = require('./utlis')
const webpackconfig = {
  entry: utlis.APP_PATH,
  mode: 'production',//生产模式
  output: {
    path: utlis.DIST_PATH,
    filename: 'wex-ui.min.js',
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