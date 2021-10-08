# WeX-UI组件库
官方文档：https://lsfcxz.github.io/wex-ui/

### 快速开始

1. #### 安装组件库

 ```shell
   npm i wex-ui
 ```

2. #### 引用组件库

```js
import Vue from 'vue';
import wex from 'wex-ui';
import 'wex-ui/styles/index.css';
import App from './App.vue';

Vue.use(wex);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 wex-ui的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```js
{
  "presets": [
    ['@babel/preset-env', { modules: false }],
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "wex-ui",
         "libDir": "lib",
            "styleLibrary": {
                "name": "styles",
                "base": false, // no base.css file
                "path": "[module].css"
            }
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，那么需要在 main.js 中写入以下内容

```js
import Vue from 'vue';
import { Card, Demo } from 'element-ui';
import App from './App.vue';

Vue.component(Card.name, Card);
Vue.component(Demo.name, Demo);
/* 或写为
 * Vue.use(Card)
 * Vue.use(Demo)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```
