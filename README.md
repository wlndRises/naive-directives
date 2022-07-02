## 全局注册
```javascript
import Vue from 'vue'
import directive from 'naive-directives'
Vue.use(directive)
```

## 局部注册
```javascript
import { copy } from 'naive-directives'
export default {
  directives: {
    copy
  }
}
```

## use
```html
<div v-copy="text"><div>
<div v-copy.icon="text"><div>
<div v-copy.icon.dblclick="text"><div>
```