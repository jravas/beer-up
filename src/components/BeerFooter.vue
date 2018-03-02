<template>
  <div class="footer">
      <div class="cap"><img src="../assets/cap.png" alt="Cap"></div>
      <footer>
        <div class="container footer-content">
          <div class="logo"><img src="../assets/logo.png" alt="Logo"></div>
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
<style lang="scss">
.footer {
  position: relative;
  padding-top: 90px;
  .cap {
    position: absolute;
    width: 100%;
    top: -10px;
    -ms-transform: rotate(180deg); /* IE 9 */
    -webkit-transform: rotate(180deg); /* Safari 3-8 */
    transform: rotate(180deg);
    img {
      display: block;
      margin: 0 auto;
    }
  }
  background-color: #000;
  background-image: url('../assets/pattern.png');
  font-family: 'Montserrat';
  .footer-content {
    padding-bottom: 50px;
    border-bottom: 2px solid rgba(255,200,10,0.32);
    position: relative;
      .logo {
        // margin-right: auto;
        align-self: center;
        position: absolute;
        left: 0;
        img {
          width: 100%;
          height: auto;
        }
      }
      .footer-navigation {
        align-self: center;
        margin: auto;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 2px;
        font-weight: 700;
        ul {
          display: flex;
          li {
            margin: 0 25px;
            text-transform: uppercase;
            a {
              color: #fff;
              text-decoration: none;
            }
          }
        }
      }
      .social-nav {
        position: absolute;
        right: 0;
        // margin-left: auto;
        align-self: center;
        ul {
          display: flex;
          justify-content: space-between;
          width: 250px;
          li {
            a {
              font-size: 20px;
              text-decoration: none;
              color: #fff;
            }
          }
        }
      }
  }
  .footer-copy {
    text-align: center;
    padding-top: 26px;
    padding-bottom: 38px;
    p {
      font-family: 'Open Sans';
      color: #9FA3A7;
    }
  }
}
</style>
<script>
export default {
  name: 'beer-footer'
}
</script>
