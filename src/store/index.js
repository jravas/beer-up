import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

// vuex store constructor
export default new Vuex.Store({
  // data
  state: {
    items: [],
    favorites: [],
    crate: [],
    crates: []
  },
  // computed properties
  getters: {
    // itemsCount() {}
    // return favorite items
  },
  // methods
  actions: {
    fetchItems ({commit, state}, page) {
      // make call but don't update item
      // because mutations are responsibe for updating items
      // instead run setItem mutation
      let items
      let url = 'https://api.punkapi.com/v2/beers'
      let itemsPerPage = '&per_page=20'
      let pageNumber = '?page=' + page
      Vue.http.get(url + pageNumber + itemsPerPage).then(
        response => {
          // pass response to items
          items = response.body
          // when loading favorites check if id is favorite
          items.forEach(function (el) {
            // check for favorites and set favorites property
            if (state.favorites.length) {
              if (state.favorites.some(e => (e.id === el.id))) {
                el.favorites = true
              } else {
                el.favorites = false
              }
            } else {
              el.favorites = false
            }
            // make short name for too long names
            if (el.name.length > 14) {
              el.displayName = el.name.slice(0, 14) + '...'
              return
            }
            el.displayName = el.name
          })
          this.commit('setItems', items)
        },
        response => {
          // error callback
          console.log('Loading error')
        }
      )
    },
    addToFavorites ({ commit }, favorite) {
      // call mutation for adding item to favorites
      this.commit('setFavorites', favorite)
    },
    addToCrate ({ commit }, item) {
      // call mutation for adding item to crate
      this.commit('setCrate', item)
    }
  },
  // mutations are responsible for setting and updating state
  mutations: {
    setItems (state, items) {
      // update items
      state.items = items
    },
    setFavorites (state, favorite) {
      // add item to favorites and remove if exist
      // change
      if (state.favorites.some(e => (e.id === favorite.id))) {
        state.favorites.splice(state.favorites.findIndex(e => e.id === favorite.id), 1)
        return
      }
      state.favorites.push(favorite)
    },
    setCrate (state, item) {
      // add item to crate
      console.log(state.crate.length)
      console.log(item)
      if (state.crate.length < 20) {
        state.crate.push(item)
      } else {
        alert('crate full')
      }
    }
  }
})
