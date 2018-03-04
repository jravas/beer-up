<template>
  <div class="beer-item">
      <div class="beer-item-content cf">
          <div class="favorites-button">
              <i v-if="!data.favorites"  class="far fa-heart"></i>
              <i v-if="data.favorites" style="color: #f05638;" class="fas fa-heart"></i>
          </div>
          <div class="beer-item-content-image">
              <img :src="data.image_url" :alt="data.name">
          </div>
          <div class="beer-item-content-info">
              <div class="name" v-tooltip.top-center="data.name">
                  {{ data.displayName }}
              </div>
              <div class="info">
                  <div class="info-item cf">
                    <span class="info-name">IBU</span>
                    <span class="info-data">{{ data.ibu }}</span>
                </div>
                <div class="info-item cf">
                    <span class="info-name">ABV</span>
                    <span class="info-data">{{ data.abv }}%</span>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'beer-item',
  props: ['data']
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
                padding-top: 14px;
                font-family: 'Montserrat';
                font-weight: 700;
                line-height: 17px;
                color: #292929;
                text-transform: uppercase;
                word-wrap:break-word;
                cursor: pointer;
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
                    }
                }
            }
        }
    }
    &:hover {
      box-shadow: none;
      cursor: pointer;
    }
}
</style>
