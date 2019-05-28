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
        data () {
            return {
                iconList:[
                    {
                        id:'001',
                        url:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        desc:'热门景点'
                    },
                    {
                        id:'002',
                        url:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                        desc:'一日游'
                    },
                    {
                        id:'003',
                        url:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                        desc:'成都必玩'
                    },
                    {
                        id:'004',
                        url:'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
                        desc:'川剧表演'
                    },
                    {
                        id:'005',
                        url:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        desc:'热门景点'
                    },
                    {
                        id:'006',
                        url:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                        desc:'一日游'
                    },
                    {
                        id:'007',
                        url:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                        desc:'成都必玩'
                    },
                    {
                        id:'008',
                        url:'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
                        desc:'川剧表演'
                    },
                    {
                        id:'009',
                        url:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
                        desc:'自然风光'
                    }
                ],
                swiperOption:{
                    pagination:'.swiper-pagination'
                }
            }
        },
        computed: {
            pages () {
                const pages = []
                this.iconList.forEach((item,index) => {
                    const page = Math.floor(index/8)
                    if(!pages[page]){
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