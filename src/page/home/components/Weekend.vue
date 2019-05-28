<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of WeekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "HomeWeekend",
        data() {
            return {
                WeekendList: [
                    {
                        id: '01',
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
                        title: '成都必打卡',
                        desc: '成都的标志，也是现代人对老成都的记忆'
                    },
                    {
                        id: '02',
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/65/7322301be0a92c.jpg_r_640x214_a3485c55.jpg',
                        title: '摩崖石刻造像',
                        desc: '诸事不顺，来抱佛脚，中国最壮观的大佛大盘点~来一场真正的“佛”系之旅，乐山大佛是首选'
                    },
                    {
                        id: '03',
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/63/0ffcb5c329a19c.jpg_r_640x214_93fd1e5a.jpg',
                        title: '成都文艺范儿',
                        desc: '《成都》唱火了这里，其实这儿不只有酒馆，还有很多文艺爆棚的地方'
                    },
                    {
                        id: '04',
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/e2/2a63e38b84bc8e.jpg_r_640x214_679f0d37.jpg',
                        title: '玩转主题乐园',
                        desc: '玩转主题乐园'
                    },
                    {
                        id: '05',
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1507/e8/7afdd7b86bf778.jpg_r_640x214_c70adb31.jpg',
                        title: '我的周末我做主',
                        desc: '在成都Hold各种长假短假'
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem

  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%

    .item-img
      width 100%

  .item-info
    padding 0.1rem

    .item-title
      line-height .54rem
      font-size .32rem
      ellipse()

    .item-desc
      line-height .4rem
      color #ccc
      ellipse()

    zoom 1
</style>