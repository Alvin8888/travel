<template>
  <div class="wrap">
    <swiper :options="swiperOption" v-if="isSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img"
             :src='item.src'
             alt=""/>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
    export default {
        name: "HomeSwiper",
        props:{
          list:Array
        },
        data() {
            return {
                swiperOption: {
                    loop: true,
                    pagination:'.swiper-pagination',
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true,//修改swiper的父元素时，自动初始化swiper
                    autoplay:3000
                }
            }
        },
        computed:{
            isSwiper () {
               return  this.list.length
            }
        }
    }
</script>

<style lang="stylus" scoped>
  .wrap >>> .swiper-pagination-bullet-active
    background white
  .wrap
    overflow hidden
    height 0
    width 100%
    padding-bottom 26.5%

    .swiper-img
      width 100%
      zoom 1
</style>