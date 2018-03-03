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
import BeerHeader from './components/BeerHeader.vue'
import BeerFooter from './components/BeerFooter.vue'
import HomeHeader from './components/slots/HomeHeader.vue'
import FavoritesHeader from './components/slots/FavoritesHeader.vue'
import JoinHeader from './components/slots/JoinHeader.vue'

export default {
  name: 'App',
  store,
  components: {
    BeerHeader,
    BeerFooter,
    HomeHeader,
    FavoritesHeader,
    JoinHeader
  }
}
</script>

<style lang="scss">
@import './styles/main';
@import '~pretty-checkbox/src/pretty-checkbox.scss';
</style>
