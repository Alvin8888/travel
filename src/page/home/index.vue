<template>
    <div>
        <home-header/>
        <home-swiper/>
        <home-icons/>
        <home-recommended/>
        <HomeWeekend/>
    </div>
</template>

<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommended from './components/Recommended'
    import HomeWeekend from './components/Weekend'
    export default {
        name: "Home",
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommended,
            HomeWeekend
        }
    }
</script>

<style scoped>

</style>