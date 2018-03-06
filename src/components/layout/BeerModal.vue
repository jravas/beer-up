<template>
  <div class="modal-overlay" id="overlay-id">
    <div id="modal-body">
      <div class="modal-inner">
        <div id="favorites-button" @click="emitFavorite">
          <i v-if="!data.favorites" class="far fa-heart"></i>
          <i v-if="data.favorites" style="color: #f05638;" class="fas fa-heart"></i>
        </div>
        <i id="close-button" class="fas fa-times"></i>
        <div class="modal-image"><img :src="data.image_url" alt="data.name"></div>
        <div class="modal-info">
          <h3>{{ data.name }}</h3>
          <div class="info">
            <div class="info-item">
              <span class="info-name">IBU</span>
              <span class="info-data">{{ data.ibu }}</span>
            </div>
            <div class="info-item">
              <span class="info-name">ABV</span>
              <span class="info-data">{{ data.abv }}%</span>
            </div>
            <div class="info-recipe">
              <table>
                <thead>
                  <th colspan="2">Malt</th>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in data.ingredients.malt" :key="index">
                    <td><p class="name">{{ item.name }}</p></td>
                    <td><p class="value">{{ item.amount.value }} {{ item.amount.unit }}</p></td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <th colspan="2">Hops</th>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in data.ingredients.hops" :key="index">
                    <td><p class="name">{{ item.name }}</p></td>
                    <td><p class="value">{{ item.amount.value }} {{ item.amount.unit }}</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button class="button-primary add-to-crate" @click="$emit('crate')">Add to crate</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'beer-modal',
  props: ['data'],
  methods: {
    emitFavorite () {
      // emit favorite event and change state of loacal fav var
      this.$emit('favorite')
    }
  },
  mounted () {
    // emit close event on close button or modal overlay
    let that = this
    window.addEventListener('click', (event) => {
      let modalOverlay = document.getElementById('overlay-id')
      let closeButton = document.getElementById('close-button')
      if (event.target === modalOverlay || event.target === closeButton) {
        that.$emit('close')
      }
    })
  }
}
</script>
