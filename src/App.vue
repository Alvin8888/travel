<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import router from '@/router'
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont/iconfont.css'

//解决移动端300毫秒延迟的插件
fastClick.attach(document.body)

export default {
  name: 'app',
  router,
  components: {

  }
}
</script>

<style>

</style>
