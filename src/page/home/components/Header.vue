<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont left-icon">&#xe731;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe615;</span>
      输入城市周边景点
    </div>
    <div class="header-right">
      {{address}}
      <span class="iconfont right-icon">&#xe600;</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeHeader",
        props:{
            address:String
        }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"

  .header
    display flex
    line-height .86rem
    height .86rem
    background $bgColor
    color #fff

    .header-left
      width .64rem
      float left

      .left-icon
        text-align center
        font-size .5rem


    .header-input
      flex 1
      margin-top .12rem
      height .64rem
      margin-left .2rem
      background #fff
      border-radius .1rem
      padding-left .2rem
      color #ccc
      line-height .64rem


    .header-right
      width 1.24rem
      float right
      text-align center

      .right-icon
        margin-right -.04rem
        font-size .24rem
        zoom 1


</style>