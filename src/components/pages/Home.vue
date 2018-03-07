<template>
  <div class="home-wrap">
    <div class="home-container">
      <section>
        <h2>Beer</h2>
        <!-- items sorting component -->
        <beer-sort v-if="sortData.length" :data="sortData"></beer-sort>
        <div class="items-container" id="items-container-scroll">
          <!-- listing items with beer item component -->
          <beer-item
            v-for="(item, index) in items"
            :key="index"
            :data="{ item: item, index: index}"
            @modal="openModal(item)"
            @favorite="addToFavorites(item)">
          </beer-item>
        </div>
      </section>
      <aside>
        <!-- crate sidebar -->
        <beer-crate></beer-crate>
        <div class="empty-crate-wrap">
          <button class="button-primary without-fix" @click="resetCrate">Reset crate</button>
        </div>
      </aside>
      <!-- modal with beer info -->
      <beer-modal
        v-if="modalVisible"
        :data="modalData"
        @close="closeModal"
        @favorite="addToFavorites(modalData)"
        @crate="addToCrate(modalData)">
      </beer-modal>
    </div>
    <!-- pagination -->
    <beer-pagination
      class="desktop-pagination"
      v-if="pagination"
      :data="{page: page, number: items.length}"
      @nextPage="nextPage"
      @prevPage="prevPage">
    </beer-pagination>
    <!-- notifications -->
    <notifications classes="notification-styles" position="top center" group="addedToCrate" />
  </div>
</template>

<script>
import BeerItem from '@/components/layout/BeerItem'
import BeerModal from '@/components/layout/BeerModal'
import BeerPagination from '@/components/layout/BeerPagination'
import BeerSort from '@/components/layout/BeerSort'
import BeerCrate from '@/components/layout/BeerCrate'
import fakeItems from '../../data/items.js'
export default {
  name: 'Home',
  components: {
    BeerItem,
    BeerModal,
    BeerPagination,
    BeerCrate,
    BeerSort
  },
  data () {
    return {
      modalData: null,
      modalVisible: false,
      page: 1,
      items: fakeItems.fakeItems,
      pagination: false,
      sortData: [],
      loaded: false,
      allDataLoaded: false,
      mobileLoaded: true
    }
  },
  computed: {
    lastPage () {
      // if there are less than 20 items current page is last
      return this.items.length === 20
    },
    body () {
      // geting body elment for setting overflow when modal active
      return document.getElementsByTagName('body')[0]
    }
  },
  methods: {
    getBeer (page) {
      this.loaded = false
      this.$Progress.start()
      var that = this
      this.$store.dispatch('fetchItems', page).then(() => {
        // pass data to sortin component
        this.itemsLength = that.$store.state.items.length
        that.sortData = that.$store.state.items
        that.items = that.$store.state.items
        that.loaded = true
        that.pagination = true
        that.$Progress.finish()
      })
    },
    openModal (item) {
      this.modalData = item
      this.modalVisible = !this.modalVisible
      this.body.style.overflow = 'hidden'
    },
    closeModal () {
      this.modalVisible = !this.modalVisible
      this.body.style.overflow = 'auto'
    },
    addToFavorites (data) {
      // add item to favorites
      data.favorites = !data.favorites
      this.$store.dispatch('addToFavorites', data)
      this.$notify({
        group: 'addedToFavorites',
        title: 'Beer added to favorites',
        type: 'warn'
      })
    },
    addToCrate (data) {
      // add item to crate¸
      if (this.$store.state.activeCrate.data.length < 20) {
        this.$store.dispatch('addToCrate', data)
        data.inCrate++
        this.$notify({
          group: 'addedToCrate',
          title: 'Beer added to crate',
          type: 'warn'
        })
      } else {
        this.$notify({
          group: 'addedToCrate',
          title: 'Crate full',
          type: 'error'
        })
      }
    },
    resetCrate () {
      // reset crate
      this.$store.dispatch('resetCrate')
    },
    nextPage () {
      // prevent nex page button if items aren't loaded
      if (this.loaded) {
        this.page++
        this.getBeer(this.page)
      }
    },
    prevPage () {
      this.page--
      this.getBeer(this.page)
    },
    getBeerMobile (page, callback) {
      this.$Progress.start()
      var that = this
      this.mobileLoaded = false
      this.$store.dispatch('fetchItems', page).then(() => {
        // pass data to sortin component
        callback(that.$store.state.items)
        that.$Progress.finish()
      })
    },
    loadMobile (data) {
      this.items = this.items.concat(data)
      if (data.length === 20) {
        this.page++
        this.mobileLoaded = true
      } else {
        this.allDataLoaded = true
      }
    }
  },
  mounted () {
    // load data
    this.getBeer(this.page)
    this.getBeerMobile(2, this.loadMobile)
    // attempt of infinite scroll implementation
    // load data on moblie when user scrolls
    window.addEventListener('touchmove', () => {
      // get width of screen
      let screenWidth = document.getElementById('items-container-scroll').getBoundingClientRect().width
      // get how much element is scrolled
      let scrollLeft = document.getElementById('items-container-scroll').scrollLeft
      // get width of scroll
      let scrollWidth = document.getElementById('items-container-scroll').scrollWidth
      if (scrollLeft + screenWidth > (scrollWidth / 2) && !this.allDataLoaded && this.mobileLoaded) {
        this.getBeerMobile(this.page, this.loadMobile)
      }
    })
  }
}
</script>
