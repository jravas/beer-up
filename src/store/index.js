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
    crates: [
      { name: 'one', data: [], active: false },
      { name: 'two', data: [], active: false },
      { name: 'three', data: [], active: false }
    ],
    activeCrate: null,
    loaded: false
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
      return new Promise((resolve, reject) => {
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
              // nuber of items in crate
              el.inCrate = 0
              // check if item is in crate
              for (let i = 0; i < state.crates.length; i++) {
                for (let j = 0; j < state.crates[i].data.length; j++) {
                  if (el.id === state.crates[i].data[j].id) {
                    el.inCrate++
                  }
                }
              }
              // make short name for too long names
              if (el.name.length > 14) {
                el.displayName = el.name.slice(0, 14) + '...'
                return
              }
              el.displayName = el.name
            })
            this.commit('setItems', items)
            state.loaded = true
            resolve()
          },
          response => {
            // error callback
            console.log('Loading error')
          }
        )
      })
    },
    addToFavorites ({ commit }, favorite) {
      // call mutation for adding item to favorites
      this.commit('setFavorites', favorite)
    },
    addToCrate ({ commit }, item) {
      // call mutation for adding item to crate
      this.commit('setCrate', item)
    },
    activeCrate ({ commit }, crate) {
      // call mutation for setting active crate
      this.commit('setActiveCrate', crate)
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
    setActiveCrate (state, crateNumber) {
      // set active crate
      state.crates.forEach(function (el) {
        if (state.crates.indexOf(el) === crateNumber) {
          el.active = true
        } else {
          el.active = false
        }
      })
      state.activeCrate = state.crates[crateNumber]
    },
    setCrate (state, item) {
      // add item to crate
      if (state.activeCrate.data.length < 20) {
        state.activeCrate.data.push(item)
      } else {
        alert('crate full')
      }
    }
  }
})
