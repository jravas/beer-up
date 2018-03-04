<template>
  <div class="home-container">
    <section>
      <h2>Beer</h2>
      <div class="items-container">
        <beer-item v-for="(item, index) in favorites" :key="index" :data="item"></beer-item>
      </div>
    </section>
  </div>
</template>
<script>
import BeerItem from '@/components/layout/BeerItem.vue'
export default {
  name: 'Favorites',
  components: {
    BeerItem
  },
  computed: {
    // get items from the store
    favorites () {
      return this.$store.state.favorites
    }
  }
}
</script>
