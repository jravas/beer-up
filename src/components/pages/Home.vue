<template>
  <div class="home-container">
    <section>
      <h2>Beer</h2>
      <beer-sort v-if="sortData.length" :data="sortData"></beer-sort>
      <div class="items-container">
        <beer-item
          v-for="(item, index) in items"
          :key="index"
          :data="item"
          @modal="openModal(item)"
          @favorite="addToFavorites(item)">
        </beer-item>
      </div>
      <beer-pagination
        v-if="pagination"
        :data="{page: page, number: items.length}"
        @nextPage="nextPage"
        @prevPage="prevPage">
      </beer-pagination>
    </section>
    <aside>
      <beer-crate></beer-crate>
    </aside>
    <beer-modal
      v-if="modalVisible"
      :data="modalData"
      @close="closeModal"
      @favorite="addToFavorites(modalData)"
      @crate="addToCrate(modalData)">
    </beer-modal>
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
      loaded: false
    }
  },
  computed: {
    lastPage () {
      // if there are less than 20 items current page is last
      return this.items.length === 20
    },
    body () {
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
    },
    addToCrate (data) {
      // add item to crate¸
      this.$store.dispatch('addToCrate', data)
      data.inCrate++
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
    }
  },
  mounted () {
    this.getBeer(this.page)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home-container {
    margin-top: -100px;
    background-color: #F7F7F7;
    position: relative;
    padding-bottom: 80px;
    //
    display: flex;
    h2 {
      display: inline-block;
      margin-bottom: 30px;
      font-family: 'Montserrat';
      font-size: 36px;
      font-weight: 600;
      color: #212121;
    }
    section {
      max-width: 744px;
      width: 100%;
      margin-left: auto;
      padding-top: 85px;
      .items-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
    aside {
      max-width: 264px;
      width: 100%;
      margin-left: 120px;
      margin-right: auto;
      padding-top: 85px;
    }
}
</style>
