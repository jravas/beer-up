<template>
  <div>
    <header>
      <div class="header container">
        <div class="logo"><router-link to="/"><img src="@/assets/logo.png" alt="Logo"></router-link></div>
        <nav class="main-navigation">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/favorites">Favorites</router-link></li>
            <li><button class="button-ghost" :class="{active: (this.$route.name === 'Join')}" @click="$router.push({ path: '/join' })">Join</button></li>
          </ul>
        </nav>
      </div>
      <div class="hero container">
        <slot>
          <!-- injecting content from parent component -->
        </slot>
        <div class="image">
          <img src="@/assets/illustration.png" alt="Beer up ilustration">
        </div>
        <!-- display only on home route -->
        <div class="cap" v-if="$route.name == 'Home'"><img src="@/assets/cap.png" alt="Cap"></div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'beer-header'
}
</script>
