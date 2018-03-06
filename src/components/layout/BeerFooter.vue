<template>
  <div class="footer">
      <div class="cap"><img src="@/assets/cap.png" alt="Cap"></div>
      <footer>
        <div class="container footer-content">
          <div class="logo"><img src="@/assets/logo.png" alt="Logo"></div>
          <nav class="footer-navigation">
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/favorites">Favorites</router-link></li>
              <li><router-link to="/join">Join</router-link></li>
            </ul>
          </nav>
          <nav class="social-nav">
            <ul>
              <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
              <li><a href="https://www.linkedin.com/"><i class="fab fa-linkedin"></i></a></li>
              <li><a href="https://www.pinterest.com/"><i class="fab fa-pinterest-p"></i></a></li>
            </ul>
          </nav>
        </div>
        <div class="footer-copy"><p>&copy; 2018 All rights reserved.</p></div>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'beer-footer'
}
</script>
