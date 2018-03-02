import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Favorites from '@/components/Favorites'
import Join from '@/components/Join'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    }
  ]
})
