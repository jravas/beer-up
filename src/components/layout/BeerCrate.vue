<template>
<div class="crate-wrapper">
  <h2>Crate</h2>
  <div class="crate-swich">
    <span class="active">One</span>
    <span>Two</span>
    <span>Three</span>
  </div>
  <div class="crate">
    <img v-for="(items, index) in data" :key="index"
    class="bottle" src="@/assets/bottle.png" alt="Bottle">
  </div>
</div>
</template>
<script>
export default {
  name: 'BeerCrate',
  props: ['data']
}
</script>
<style lang="scss">
.crate-wrapper {
  .crate-swich {
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: 700;
    color: #9FA3A7;
    text-transform: uppercase;
    letter-spacing: 2px;
    span {
      padding-bottom: 2px;
      &:not(:first-child){
        padding-left: 25px;
      }
    }
  }
  .active {
    color: #3F4750;
    border-bottom: 4px solid #F05638;
  }
  .crate {
    width: 264px;
    height: 318px;
    margin-top: 36px;
    padding: 8px;
    background-image: url('../../assets/crate.png');
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    .bottle {
      width: 48px;
      height: 48px;
      padding: 5px 7px;
    }
  }
}
</style>
