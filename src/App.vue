<template>
  <div id="app">
    <beer-header></beer-header>
    <router-view/>
    <beer-footer></beer-footer>
  </div>
</template>

<script>
import BeerHeader from './components/BeerHeader.vue'
import BeerFooter from './components/BeerFooter.vue'

export default {
  name: 'App',
  components: {
    BeerHeader,
    BeerFooter
  }
}
</script>

<style lang="scss">
@import './styles/main';
</style>
