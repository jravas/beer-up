<template>
  <div class="home-container">
    <section>
      <h2>Beer</h2>
      <div class="items-container">
        <beer-item v-for="(item, index) in items"
                  :key="index"
                  :data="item"
                  @modal="openModal(item)"
                  @favorite="addToFavorites(item)">
        </beer-item>
      </div>
      <beer-pagination :data="{page: page, number: items.length}"
                        @nextPage="getBeer(page++)"
                        @prevPage="getBeer(page--)">
      </beer-pagination>
    </section>
    <aside>
      <beer-crate :data="crateItems"></beer-crate>
    </aside>
    <beer-modal v-if="modalVisible"
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
import BeerCrate from '@/components/layout/BeerCrate'
export default {
  name: 'Home',
  components: {
    BeerItem,
    BeerModal,
    BeerPagination,
    BeerCrate
  },
  data () {
    return {
      modalData: null,
      modalVisible: false,
      page: 1
    }
  },
  computed: {
    items () {
      // get items from the store
      return this.$store.state.items
    },
    crateItems () {
      // get crate items from the store
      return this.$store.state.crate
    },
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
      this.$store.dispatch('fetchItems', page)
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
