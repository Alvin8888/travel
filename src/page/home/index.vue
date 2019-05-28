<template>
    <div>
        <home-header/>
        <home-swiper/>
        <home-icons/>
        <home-recommended/>
    </div>
</template>

<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommended from './components/Recommended'
    export default {
        name: "Home",
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommended
        }
    }
</script>

<style scoped>

</style>