<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide class="wiper-pagination" v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.url"
                 alt=""/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

  </div>
</template>

<script>
    export default {
        name: "HomeIcon",
        props:{
          list:Array
        },
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination'
                }
            }
        },
        computed: {
            pages() {
                const pages = []
                this.list.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"

  .icons >>> .swiper-container
    height 0
    padding-bottom 50%

  .icons >>> .swiper-pagination-bullet
    width .1rem
    height .1rem
    border-radius 50%

  .icons >>> .swiper-pagination-bullet-active
    background #25a4bb

  .icons
    margin-top .1rem
    .icon
      position relative
      overflow hidden
      float left
      width 25%
      padding-bottom 25%
      height 0
      .icon-img
        position absolute
        left 0
        top 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem

        .icon-img-content
          height 100%
          display block
          margin 0 auto


    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      height .44rem
      line-height .44rem
      color $darkTextColor
      text-align center
      ellipse()
      zoom 1
</style>