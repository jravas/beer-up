import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

// vuex store constructor
export default new Vuex.Store({
  // data
  state: {
    items: [],
    favorites: [],
    favoritesID: []
  },
  // computed properties
  getters: {
    // itemsCount() {}
    // return favorite items
  },
  // methods
  actions: {
    fetchItems ({commit, state}) {
      // make call but don't update item
      // because mutations are responsibe for updating items
      // instead run setItem mutation
      let items
      let url = 'https://api.punkapi.com/v2/beers'
      let itemsPerPage = '&per_page=20'
      let pageNumber = '?page=1'
      Vue.http.get(url + pageNumber + itemsPerPage).then(
        response => {
          items = response.body
          // when loading favorites check if id is favorite
          items.forEach(function (el) {
            // set favorites property
            if (state.favoritesID.length) {
              if (state.favoritesID.includes(el.id)) {
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
    // add item to favorites
    addToFavorites ({ commit }, favorite) {
      // pass favorite item to mutation for save
      this.commit('setFavorites', favorite)
    }
  },
  // mutations are responsible for setting and updating state
  mutations: {
    setItems (state, items) {
      // update items
      state.items = items
    },
    setFavorites (state, favorite) {
      if (state.favoritesID.includes(favorite.id)) {
        // remove item to favorites
        console.log(state.favoritesID.indexOf(favorite.id))
        console.log(state.favorites.indexOf(favorite))
        state.favoritesID.splice(state.favoritesID.indexOf(favorite.id), 1)
        state.favorites.splice(state.favorites.indexOf(favorite), 1)
      } else {
        // add item to favorites
        state.favoritesID.push(favorite.id)
        state.favorites.push(favorite)
      }
    }
  }
})
