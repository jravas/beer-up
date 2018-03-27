<template>
  <div id="app">
    <beer-header>
      <!-- using ./component/slotes/ for displaying different header on different routes -->
      <home-header v-if="$route.name == 'Home'"></home-header>
      <favorites-header v-if="$route.name == 'Favorites'"></favorites-header>
      <join-header v-if="$route.name == 'Join'"></join-header>
    </beer-header>
    <router-view/>
    <!-- progress bar component -->
    <vue-progress-bar></vue-progress-bar>
    <!-- footer component -->
    <beer-footer></beer-footer>
  </div>
</template>

<script>
import store from '@/store/index'
import BeerHeader from '@/components/layout/BeerHeader'
import BeerFooter from '@/components/layout/BeerFooter'
import HomeHeader from '@/components/slots/HomeHeader'
import FavoritesHeader from '@/components/slots/FavoritesHeader'
import JoinHeader from '@/components/slots/JoinHeader'

export default {
  name: 'App',
  store,
  components: {
    BeerHeader,
    BeerFooter,
    HomeHeader,
    FavoritesHeader,
    JoinHeader
  },
  beforeCreate () {
    // load data from the localStorage
    this.$store.commit('initialiseStore')
  },
  mounted () {
    // add items from vuex store to localStorage
    this.$store.subscribe((mutation, state) => {
      localStorage.setItem('BeerUpStore', JSON.stringify(state))
    })
  }
}
</script>

<style lang="scss">
@import './styles/main';
@import '~pretty-checkbox/src/pretty-checkbox.scss';
@import '../node_modules/dragula/dist/dragula.css';
</style>
