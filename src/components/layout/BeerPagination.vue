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
