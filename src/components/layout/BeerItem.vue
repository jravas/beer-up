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
<style lang="scss">
.beer-item {
  width: 168px;
  height: 168px;
  margin-bottom: 24px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.08);
  -webkit-transition: box-shadow 0.1s ease-in;
  transition: box-shadow 0.1s ease-in;
  .beer-item-content {
    position: relative;
    padding: 26px 20px 26px 22px;
    .favorites-button {
      position: absolute;
      left: 10px;
      top: 10px;
      font-size: 12px;
      cursor: pointer;
    }
    .beer-in-crate {
      position: absolute;
      right: 10px;
      top: 10px;
      font-family: 'Montserrat';
      font-size: 12px;
    }
    .beer-item-content-image {
      display: flex;
      float: left;
      width: 30px;
      height: 116px;
      img {
        width: 100%;
        height: auto;
        align-self: center;
      }
    }
    .beer-item-content-info {
      float: left;
      margin-left: 15px;
      font-size: 14px;
      // temp
      width: calc(100% - 45px);
      .name {
        max-width: 64px;
        height: 50px;
        overflow: hidden;
        padding-top: 14px;
        font-family: 'Montserrat';
        font-weight: 700;
        line-height: 17px;
        color: #292929;
        text-transform: uppercase;
        word-wrap:break-word;
        cursor: pointer;
        // show animation if data is't laoded
        &:empty {
          background-color: #D2D2D2;
          animation: blinking 2s linear infinite;
        }
      }
      .info {
          width: 81px;
          position: absolute;
          bottom: 26px;
        .info-item {
          font-family: 'Open Sans';
          line-height: 26px;
          .info-name {
            color: #9FA3A7;
            float: left;
          }
          .info-data {
            color: #3F4750;
            float: right;
            &:empty {
              float: left;
              width: 34px;
              height: 12px;
              // margin-bottom: 13px;
              background-color: #EAEAEA;
              animation: blinking 2s linear infinite;
            }
          }
          &:first-child {
            .info-data {
              &:empty {
                margin-top: -80px;
              }
            }
          }
          &:last-child {
            .info-data {
              &:empty {
                margin-top: -55px;
              }
            }
          }
        }
      }
      @keyframes blinking {
        50% { opacity: 0.3; }
      }
    }
  }
  &:hover {
    box-shadow: none;
    cursor: pointer;
  }
}
</style>
