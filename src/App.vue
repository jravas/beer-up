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
  }
}
</script>

<style lang="scss">
@import './styles/main';
@import '~pretty-checkbox/src/pretty-checkbox.scss';
</style>
