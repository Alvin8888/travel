<template>
  <div>
      <header-city/>
      <city-search/>
  </div>
</template>

<script>
    import HeaderCity from './components/HeaderCity'
    import CitySearch from './components/CitySearch'
    export default {
        name: "city",
        components:{
            HeaderCity,
            CitySearch
        }
    }
</script>

<style scoped>

</style>