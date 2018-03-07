<template>
  <div class="beer-item" :id="data.index">
    <div class="beer-item-content cf">
      <!-- add to favorites button -->
      <div :id="'favorite-' + data.index" class="favorites-button">
        <i v-if="!data.item.favorites"  class="far fa-heart"></i>
        <i v-if="data.item.favorites" style="color: #f05638;" class="fas fa-heart"></i>
      </div>
      <!-- items in crate counter -->
      <div class="beer-in-crate" v-if="data.item.inCrate">{{ data.item.inCrate }}</div>
      <div class="beer-item-content-image">
        <img v-if="data.item.image_url" :src="data.item.image_url" :alt="data.item.name">
      </div>
      <!-- item info container -->
      <div class="beer-item-content-info">
        <div class="name" v-if="data.item.displayName" v-tooltip.top-center="data.item.name">{{ data.item.displayName }}</div>
        <div v-if="!data.item.displayName" class="name"></div>
        <div class="info">
          <div class="info-item cf">
            <span v-if="data.item.ibu" class="info-name">IBU</span>
            <span v-if="data.item.ibu" class="info-data">{{ data.item.ibu }}</span>
            <!-- display loading animation if data.item isn't loaded -->
            <span v-if="!data.item.ibu && !data.item.abv" class="info-data"></span>
          </div>
          <div class="info-item cf">
            <span v-if="data.item.abv" class="info-name">ABV</span>
            <span v-if="data.item.abv" class="info-data">{{ abv }}</span>
            <!-- display loading animation if data isn't loaded -->
            <span v-if="!data.item.ibu && !data.item.abv" class="info-data"></span>
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
      return document.getElementById(this.data.index)
    },
    favorite () {
      return document.getElementById('favorite-' + this.data.item.id)
    },
    abv () {
      return (this.data.item.abv !== '') ? (this.data.item.abv + ' %') : (this.data.item.abv)
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
