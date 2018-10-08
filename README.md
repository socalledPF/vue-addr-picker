# vue-addr-picker

# 描述
  这是一款基于`mint-ui`的城市选择器组件

# 快速开始


1. 安装插件:
``` npm install -S vue-addr-picker```

2. 将插件加入Vue项目中:
```javascript
  import Vue from 'vue';
  import CityPicker from 'vue-addr-picker';
  Vue.use(CityPicker)
```
3.然后在.vue 文件中使用组件

```html 
  <city-picker ref="citypicker" @confirm="getCity"></city-picker>

  <button @click="open('citypicker')"></button>

```

```javascript
  export default {
    methods: {
      open(picker) {
        this.$refs[picker].open();
      }
    },
    getCity(city) {
      //处理选择的城市
      console.log(city) //得到选择的城市数据
    }
  }


```
#仓库地址
[]