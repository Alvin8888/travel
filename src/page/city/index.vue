<template>
  <div>
    <city-header/>
    <city-search/>
    <city-list/>
    <city-xina/>
  </div>
</template>

<script>
    import CityHeader from './components/Header'
    import CitySearch from './components/Search'
    import CityList from './components/List'
    import CityXina from './components/Xina'

    export default {
        name: "city",
        components: {
            CityHeader,
            CitySearch,
            CityList,
            CityXina
        }
    }
</script>

<style scoped>

</style>