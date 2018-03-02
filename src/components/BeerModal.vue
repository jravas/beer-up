<template>
    <div class="modal-overlay" id="overlay-id">
        <div id="modal-body">
            <div class="modal-inner">
            <!-- <span id="close-button">x</span> -->
            <div id="favorites-button" @click="emitFavorite">
                <i v-if="!localFavorites" class="far fa-heart"></i>
                <i v-if="localFavorites" style="color: #f05638;" class="fas fa-heart"></i>
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
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'beer-modal',
  props: ['data'],
  data () {
    return {
      localFavorites: null
    }
  },
  methods: {
    emitFavorite () {
      // emit favorite event and change state of loacal fav var
      this.localFavorites = !this.localFavorites
      this.$emit('favorite')
    }
  },
  mounted () {
    this.localFavorites = this.data.favorites
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
<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(18,5,3,0.88);
  background-image: url('../assets/pattern.png');

  display: flex;
  justify-content: center;
  #modal-body {
    width: 50%;
    padding: 20px;
    align-self: center;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 4px 48px 0 rgba(0,0,0,0.32);
    .modal-inner {
      padding: 80px;
      display: flex;
      position: relative;
      #close-button {
        color: #FFC80A;
        position: absolute;
        top: 40px;
        right: 40px;
        font-size: 20px;
        cursor: pointer;
      }
      #favorites-button {
          position: absolute;
          top: 40px;
          left: 40px;
          font-size: 20px;
          cursor: pointer;
      }
      .modal-image {
        display: flex;
        // margin-right: auto;
        margin-left: 60px;
        width: 115px;
        height: auto;
        // height: 409px;
        img {
          width: 100%;
          max-height: 100%;
          height: auto;
          align-self: center;
        }
      }
      .modal-info {
        width: 100%;
        margin-right: auto;
        margin-left: 100px;
        h3 {
          margin-bottom: 20px;
          font-family: 'Montserrat';
          font-size: 36px;
          font-weight: 700;
          color: #212121;
          text-transform: uppercase;
        }
        .info {
          .info-item {
            font-size: 14px;
            line-height: 26px;
            font-family: 'Open Sans';
            .info-name {
              color: #9FA3A7;
            }
            .info-data {
              margin-left: 25px;
              color: #3F4750;
              font-weight: 700;
            }
          }
          .info-recipe {
            table {
              width: 100%;
              margin-top: 20px;
              font-family: 'Open Sans';
              line-height: 28px;
              thead {
                font-size: 18px;
                font-weight: 700;
                text-align: left;
                color: #212121;
                border-bottom: 3px solid #FFC80A;
              }
              tbody {
                tr {
                  border-bottom: 1px solid #8b8b8b;
                  &:nth-child(2n + 1){
                    background-color: #F7F7F7;
                  }
                }
                .name {
                  padding-left: 20px;
                  color: #3F4750;
                  font-weight: 700;
                }
                .value {
                  padding-right: 20px;
                  text-align: right;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
