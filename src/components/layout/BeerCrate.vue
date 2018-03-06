<template>
<div class="crate-wrapper">
  <h2>Crate</h2>
  <div class="crate-swich">
    <!-- <span class="active">One</span>
    <span>Two</span>
    <span>Three</span> -->
    <span v-for="(crate, index) in crates"
          :key="index"
          :class="{ active: crate.active }"
          @click="activeCrate(index)">
      {{ crate.name }}
    </span>
  </div>
  <div class="crate" v-if="selectedCrate">
    <img v-for="(items, index) in selectedCrate.data" :key="index"
    class="bottle" src="@/assets/bottle.png" alt="Bottle">
  </div>
</div>
</template>
<script>
export default {
  name: 'BeerCrate',
  computed: {
    crates () {
      // get crates from the store
      return this.$store.state.crates
    },
    selectedCrate () {
      // get selected crate from the store
      return this.$store.state.activeCrate
    }
  },
  methods: {
    activeCrate (number) {
      // select crate on user click
      this.$store.dispatch('activeCrate', number)
    }
  },
  mounted () {
    this.activeCrate(0)
  }
}
</script>
