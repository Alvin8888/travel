<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    import Vue from 'vue'
    import router from '@/router'
    import fastClick from 'fastclick'
    import VueAwesomeSwipe from 'vue-awesome-swiper'
    import 'styles/reset.css'
    import 'styles/border.css'
    import 'styles/iconfont/iconfont.css'
    import 'swiper/dist/css/swiper.css'

    //解决移动端300毫秒延迟的插件
    fastClick.attach(document.body)
    Vue.use(VueAwesomeSwipe, /* { default global options } */)

    export default {
        name: 'app',
        router,
        components: {}
    }
</script>

<style>

</style>
