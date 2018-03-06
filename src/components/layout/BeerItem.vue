<template>
  <div class="beer-item" :id="data.id">
    <div class="beer-item-content cf">
      <!-- add to favorites button -->
      <div :id="'favorite-' + data.id" class="favorites-button">
        <i v-if="!data.favorites"  class="far fa-heart"></i>
        <i v-if="data.favorites" style="color: #f05638;" class="fas fa-heart"></i>
      </div>
      <!-- items in crate counter -->
      <div class="beer-in-crate" v-if="data.inCrate">{{ data.inCrate }}</div>
      <div class="beer-item-content-image">
        <img v-if="data.image_url" :src="data.image_url" :alt="data.name">
      </div>
      <!-- item info container -->
      <div class="beer-item-content-info">
        <div class="name" v-if="data.displayName" v-tooltip.top-center="data.name">{{ data.displayName }}</div>
        <div v-if="!data.displayName" class="name"></div>
        <div class="info">
          <div class="info-item cf">
            <span v-if="data.ibu" class="info-name">IBU</span>
            <span v-if="data.ibu" class="info-data">{{ data.ibu }}</span>
            <!-- display loading animation if data isn't loaded -->
            <span v-if="!data.ibu && !data.abv" class="info-data"></span>
          </div>
          <div class="info-item cf">
            <span v-if="data.abv" class="info-name">ABV</span>
            <span v-if="data.abv" class="info-data">{{ abv }}</span>
            <!-- display loading animation if data isn't loaded -->
            <span v-if="!data.ibu && !data.abv" class="info-data"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'beer-item',
  props: ['data'],
  computed: {
    id () {
      return document.getElementById(this.data.id)
    },
    favorite () {
      return document.getElementById('favorite-' + this.data.id)
    },
    abv () {
      return (this.data.abv !== '') ? (this.data.abv + ' %') : (this.data.abv)
    }
  },
  mounted () {
    // on item click emit event for opening modal
    // on favorite button click emit event for adding to favorites
    let that = this
    this.id.addEventListener('click', function (event) {
      if (event.target.parentElement !== that.favorite) {
        that.$emit('modal')
      } else {
        that.$emit('favorite')
      }
    })
  }
}
</script>
