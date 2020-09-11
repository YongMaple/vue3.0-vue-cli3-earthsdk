# 这是一个 Vue3.0 + Vue Cli3 + EarthSDK 的 Demo

> 原项目涉密，所以重写了这个 demo，有问题可以在[issue](https://github.com/YongMaple/vue3.0-vue-cli3-earthsdk/issues)里提问

---

### 你在移植[EarthSDK 官方项目](https://github.com/cesiumlab/EarthSDK-vue-cli-app)时可能遇到的问题

-   `copy-webpack-plugin`由于版本更新，`vue.config.js`中写法需要修改为

```js
const cwp = new CopyWebpackPlugin({
    patterns: [
        {
            from: './node_modules/cesium/Build/Cesium',
            ...
        }
    ],
})
```
- eslint报错XE没定义，两种方式解决
  1. `vue.config.js`中添加`lintOnSave: false`
  2. 新建`.eslintrc.js`添加
  ```js
  globals: {
    XE: true
  }
  ```

其他的看代码就可以了



