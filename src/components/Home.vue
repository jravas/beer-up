<template>
  <div class="main-container">
    <section>
      <h2>Beer</h2>
      <div class="items-container">
        <beer-item @click.native="openModal(item)" v-for="(item, index) in items" :key="index" :data="item"></beer-item>
      </div>
    </section>
    <aside>
    </aside>
    <beer-modal v-if="modalVisible" :data="modalData" @close="closeModal"></beer-modal>
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
      items: [],
      modalData: null,
      modalVisible: false
    }
  },
  methods: {
    getBeer () {
      let url = 'https://api.punkapi.com/v2/beers'
      let itemsPerPage = '&per_page=20'
      let pageNumber = '?page=1'
      this.$http.get(url + pageNumber + itemsPerPage).then(
        response => {
          this.items = response.body
        },
        response => {
          // error callback
          console.log('Loading error')
        }
      )
    },
    openModal (item) {
      this.modalData = item
      this.modalVisible = !this.modalVisible
    },
    closeModal () {
      this.modalVisible = !this.modalVisible
    }
  },
  mounted () {
    this.getBeer()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
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
