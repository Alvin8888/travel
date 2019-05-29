<template>
    <div>
        <home-header :address="address"/>
        <home-swiper :list = 'swiperList'/>
        <home-icons :list ='iconList'/>
        <home-recommended :list='RecommendedList'/>
        <HomeWeekend :list="WeekendList"/>
    </div>
</template>

<script>

    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommended from './components/Recommended'
    import HomeWeekend from './components/Weekend'
    import { reqHome } from '@/api'

    export default {
        name: "Home",
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommended,
            HomeWeekend
        },
        data () {
            return {
                address:'',
                swiperList:[],
                iconList:[],
                RecommendedList:[],
                WeekendList:[]
            }
        },

        mounted() {
            this.getHomeData()
        },
        methods:{
             getHomeData: async function () {
                const data = await reqHome()
                const result = data.home
                if(result.address){
                    this.address = result.address
                    this.swiperList = result.swiperList
                    this.iconList = result.iconList
                    this.RecommendedList = result.RecommendedList
                    this.WeekendList = result.WeekendList
                }

            }
        }
    }
</script>

<style scoped>

</style>