# 卡片组件
### 示例：

<we-card imgSrc="/wex-ui/card.png" summary="Vue.js 源码全方位深入解析 全面深入理解Vue实现原理，掌握源码分析技巧"></we-card>

### 代码

```html
<we-card 
      imgSrc="/wex-ui/card.png" 
      summary="Vue.js 源码全方位深入解析 全面深入理解Vue实现原理，掌握源码分析技巧">
</we-card>
```

### Attributes

|   参数    |     说明     |    类型     | 是否必要 | 默认值 |
| :-------: | :----------: | :---------: | :------: | :----: |
|   width   |   卡片宽度   |   Number    |  false   |   -    |
|  imgSrc   | 图片资源地址 |   String    |   true   |   -    |
| imgHeight |   图片高度   |   Number    |  false   |   -    |
|  summary  |   卡片概要   | String/Slot |  false   |   -    |
|  footer   |   卡片底部   |    Slot     |  false   |   -    |

