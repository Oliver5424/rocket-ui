/* Automatically generated by './build/bin/build-docs.js' */

import '@src/fonts/iconfont.css'
import icon from '@src/fonts/iconfont.json'
import '../styles/index.less'

import MessageBox from '@root/packages/message-box/src/main.js'
import Statistics from '@root/packages/statistics/src/main.vue'
import Imageview from '@root/packages/imageview/src/main.vue'
import Download from '@root/packages/download/src/main.vue'

const components = [Statistics, Imageview, Download]

export default ({ Vue }) => {
  components.forEach(item => {
    Vue.component(item.name, item)
  })
  Vue.prototype.$icon = icon.glyphs
  Vue.prototype.$confirm = MessageBox
}
