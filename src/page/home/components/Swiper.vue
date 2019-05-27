<template>
  <div class="wrap">
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
        data() {
            return {
                swiperOption: {
                    loop: true,
                    pagination:'.swiper-pagination'
                },
                swiperList:[
                    {
                    id:'001',
                    src:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/60904fc24f223e0db5aee3c6148e641f.jpg_750x200_b1b90a19.jpg'
                },
                    {
                    id:'002',
                    src:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
                },
                    {
                    id:'003',
                    src:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
                },
                ]
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