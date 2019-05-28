<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of RecommendedList" :key="item.id">
          <img :src="item.imgUrl" alt="" class="item-img"/>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "HomeRecommended",
        data () {
            return {
                RecommendedList:[
                    {
                        id:'01',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
                        title:'成都海昌极地海洋公园',
                        desc:'诸事不顺，来抱佛脚，中国最壮观的大佛大盘点~来一场真正的“佛”系之旅，乐山大佛是首选'
                    },
                    {
                        id:'02',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/201403/03/77a8f60ea243465fdf2c937e2edd33dd.jpg_200x200_51dd1e90.jpg',
                        title:'国色天乡·水上乐园',
                        desc:'《成都》唱火了这里，其实这儿不只有酒馆，还有很多文艺爆棚的地方'
                    },
                    {
                        id:'03',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/201407/03/a584374ee80b738e2600d6bcaf1299e3.jpg_200x200_c26fb243.jpg',
                        title:'都江堰',
                        desc:'我的周末我做主'
                    },
                    {
                        id:'04',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/201403/07/bb45d4ead40baeffd8defb6a38adadc3.jpg_200x200_9cde2cb0.jpg',
                        title:'川西竹海景区',
                        desc:'《成都》唱火了这里，其实这儿不只有酒馆，还有很多文艺爆棚的地方'
                    },
                    {
                        id:'05',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/1505/90/90c1bc45fe24299a.water.jpg_200x200_ef275228.jpg',
                        title:'西岭雪山滑雪场',
                        desc:'乐园，与青春作伴'
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus"scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem

    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipse()
      .item-desc
        line-height .4rem
        color #ccc
        ellipse()
      .item-button
        line-height .44rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        margin-top .16rem
        color #fff

    zoom 1
</style>