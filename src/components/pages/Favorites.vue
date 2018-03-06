<template>
<div class="home-wrap">
  <div class="home-container favorites-margin">
    <section>
      <h2>My favourite beers</h2>
      <!-- items sorting component -->
      <beer-sort v-if="favorites.length" :data="favorites"></beer-sort>
      <div class="items-container">
        <!-- listing items with beer item component -->
        <beer-item
          v-for="(item, index) in favorites"
          :key="index"
          :data="item"
          @modal="openModal(item)"
          @favorite="addToFavorites(item)">
        </beer-item>
      </div>
    </section>
    <aside>
      <!-- crate sidebar -->
      <beer-crate></beer-crate>
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
</div>
</template>
<script>
import BeerItem from '@/components/layout/BeerItem'
import BeerModal from '@/components/layout/BeerModal'
import BeerSort from '@/components/layout/BeerSort'
import BeerCrate from '@/components/layout/BeerCrate'

export default {
  name: 'Favorites',
  components: {
    BeerItem,
    BeerModal,
    BeerSort,
    BeerCrate
  },
  data () {
    return {
      modalData: null,
      modalVisible: false,
      sortData: []
    }
  },
  computed: {
    // get items from the store
    favorites () {
      return this.$store.state.favorites
    },
    body () {
      // geting body elment for setting overflow when modal active
      return document.getElementsByTagName('body')[0]
    }
  },
  methods: {
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
    }
  },
  mounted () {
  }
}
</script>
