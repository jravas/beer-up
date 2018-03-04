<template>
  <div class="home-container">
    <section>
      <h2>Beer</h2>
      <div class="items-container">
        <beer-item @click.native="openModal(item)" v-for="(item, index) in items" :key="index" :data="item"></beer-item>
      </div>
    </section>
    <aside>
    </aside>
    <beer-modal v-if="modalVisible" :data="modalData" @close="closeModal" @favorite="addToFavorites(modalData)"></beer-modal>
  </div>
</template>

<script>
import BeerItem from './BeerItem.vue'
import BeerModal from './BeerModal.vue'
export default {
  name: 'Home',
  components: {
    BeerItem,
    BeerModal
  },
  data () {
    return {
      modalData: null,
      modalVisible: false,
      clickCount: 0
    }
  },
  methods: {
    getBeer () {
      this.$store.dispatch('fetchItems')
    },
    openModal (item) {
      this.modalData = item
      this.modalVisible = !this.modalVisible
    },
    closeModal () {
      this.modalVisible = !this.modalVisible
    },
    addToFavorites (data) {
      // add item to favorites
      data.favorites = !data.favorites
      this.$store.dispatch('addToFavorites', data)
    }
  },
  computed: {
    // get items from the store
    items () {
      return this.$store.state.items
    }
  },
  created () {
  },
  mounted () {
    this.getBeer()
    // console.log(this.$store.state.items)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home-container {
    margin-top: -100px;
    background-color: #F7F7F7;
    position: relative;
    padding-bottom: 80px
}
section {
  max-width: 744px;
  width: 100%;
  margin: 0 auto;
  padding-top: 85px;
  h2 {
    margin-bottom: 30px;
    font-family: 'Montserrat';
    font-size: 36px;
    font-weight: 600;
    color: #212121;
  }
  .items-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

}
</style>
