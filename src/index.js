// clickOutSide
import clickOutSide from './clickOutSide'

// 字体定时颜色
import color from './color'

// 单击/双击 拷贝 依赖 element message
// import copy from './copy'

// 拖拽 touch/mouse
// import draggable from './draggable'

// 显示省略号
// import ellipsis from './ellipsis'

// 限制表单输入 比如不能输入表情和特殊字符 只能输入数字或字母等
// import emoji from './emoji'

// 元素点击范围扩展指令
import expandClick from './expandClick'

// 元素长按指令 用户需要按下并按住按钮几秒钟触发相应的事件
import longPress from './longPress'

// 元素全屏指令 依赖 element screenfull element message
// import screenfull from './screenfull'

// 元素说明指令 依赖 element el-tooltip
// import tooltip from './tooltip'

// 水印
import waterMarker from './waterMarker'

// 自定义指令
const directives = {
  clickOutSide,
  color,
  expandClick,
  longPress,
  waterMarker,
}
// 批量注册指令
export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  }
}

export {
  clickOutSide,
  color,
  expandClick,
  longPress,
  waterMarker,
}
