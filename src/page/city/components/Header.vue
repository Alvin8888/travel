<template>
  <div class="header">
    城市列表
    <router-link to="/">
      <div class="iconfont header-back">&#xe731;</div>
    </router-link>

  </div>
</template>

<script>
    export default {
        name: "headerCity"
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    overflow hidden
    position relative
    height .86rem
    line-height .86rem
    text-align center
    color #fff
    background $bgColor
    font-size .3rem
    .header-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .6rem
      color white
    zoom 1

</style>