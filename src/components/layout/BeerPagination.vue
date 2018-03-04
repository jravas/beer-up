<template>
  <div class="pagination" style="text-align: center">
      <span v-if="data.page > 1" class="arrows" @click="$emit('prevPage')"><i class="fas fa-chevron-left"></i></span>
      <span class="pages">{{ data.page }}</span>
      <span v-if="data.number === 20" class="arrows" @click="$emit('nextPage')"><i class="fas fa-chevron-right"></i></span>
  </div>
</template>

<script>
export default {
  name: 'BeerPagiantion',
  props: ['data']
}
</script>

<style lang="scss">
.pagination {
    text-align: center;
    margin-top: 20px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    .pages {
      padding: 0 15px;
      font-family: 'Montserrat';
      font-size: 20px;
      font-weight: 700;
    }
    .arrows {
      padding: 0 10px;
      font-size: 18px;
      cursor: pointer;
      -webkit-transition: color 0.1s ease-in;
      transition: color 0.1s ease-in;
      &:hover {
        color: #FFC80A;
      }
    }
}
</style>
