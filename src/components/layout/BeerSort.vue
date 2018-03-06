<template>
  <div class="sort-by">
    <span class="sort-by-title">Sort by:</span>
    <span class="sort-by-abv" :class="{ active: name }" @click="sortBy('name')">Name <i v-if="!sortType && name" class="fas fa-angle-up"></i> <i v-if="sortType && name" class="fas fa-angle-down"></i></span>
    <span> | </span>
    <span class="sort-by-abv" :class="{ active: abv }" @click="sortBy('abv')">ABV <i v-if="!sortType && abv" class="fas fa-angle-up"></i> <i v-if="sortType && abv" class="fas fa-angle-down"></i></span>
    <span> | </span>
    <span class="sort-by-ibu" :class="{ active: ibu }" @click="sortBy('ibu')">IBU <i v-if="!sortType && ibu" class="fas fa-angle-up"></i> <i v-if="sortType && ibu" class="fas fa-angle-down"></i></span>
  </div>
</template>

<script>
export default {
  name: 'BeerSort',
  props: ['data'],
  data () {
    return {
      loaded: false,
      ibu: false,
      abv: false,
      name: false,
      sortType: false
    }
  },
  computed: {
    items () {
      return this.data
    }
  },
  methods: {
    sortBy (type) {
      switch (type) {
        case 'ibu':
          // reset sort type if sortng first time
          if (!this.ibu && this.sortType) {
            this.sortType = false
          }
          this.abv = false
          this.name = false
          this.ibu = true
          // if sorted firt time sort descending
          if (this.sortType) {
            this.sortType = false
            this.items.sort(function (a, b) {
              return a.ibu - b.ibu
            })
          } else {
            // else sort items ascending
            this.sortType = true
            this.items.sort(function (b, a) {
              return a.ibu - b.ibu
            })
          }
          break
        case 'abv':
          // reset sort type if sortng first time
          if (!this.abv && this.sortType) {
            this.sortType = false
          }
          this.abv = true
          this.name = false
          this.ibu = false
          // if sorted firt time sort descending
          if (this.sortType) {
            this.sortType = false
            this.items.sort(function (a, b) {
              return a.abv - b.abv
            })
          } else {
            // else sort items ascending
            this.sortType = true
            this.items.sort(function (b, a) {
              return a.abv - b.abv
            })
          }
          break
        case 'name':
          // reset sort type if sortng first time
          if (!this.name && this.sortType) {
            this.sortType = false
          }
          this.name = true
          this.abv = false
          this.ibu = false
          // if sorted firt time sort descending
          if (this.sortType) {
            this.sortType = false
            this.items.sort(function (b, a) {
              if (a.name < b.name) return -1
              if (a.name > b.name) return 1
              return 0
            })
          } else {
            // else sort items ascending
            this.sortType = true
            this.items.sort(function (a, b) {
              if (a.name < b.name) return -1
              if (a.name > b.name) return 1
              return 0
            })
          }
          break
      }
    }
  }
}
</script>
