<template>
  <div class="text">
    <h5>The beerster pro 2.0</h5>
    <h1>
      Join our<br>
      famous<br>
      beerup!<br>
    </h1>
    <!-- lazy style fix -->
    <div class="button-fix-tainer">
      <button class="button-primary" @click="$router.push({ path: '/join' })">Join beerup</button>
    </div>
    <button class="button-primary without-fix" @click="$router.push({ path: '/join' })">Join beerup</button>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
