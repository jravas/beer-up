import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

// vuex store constructor
export default new Vuex.Store({
  // data
  state: {
    items: []
  },
  // computed properties
  getters: {
    // itemsCount() {}
    // return favorite items
  },
  // methods
  actions: {
    fetchItems () {
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
            el.favorites = false
          })
          this.commit('setItems', items)
        },
        response => {
          // error callback
          console.log('Loading error')
        }
      )
    }
  },
  // mutations are responsible for setting and updating state
  mutations: {
    setItems (state, items) {
      // update items
      state.items = items
    }
  }
})
