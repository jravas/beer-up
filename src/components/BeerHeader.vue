<template>
  <div>
      <header>
        <div class="header container">
          <div class="logo"><router-link to="/"><img src="../assets/logo.png" alt="Logo"></router-link></div>
          <nav class="main-navigation">
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/favorites">Favorites</router-link></li>
              <button class="button-ghost">Join</button>
            </ul>
          </nav>
        </div>
        <div class="hero container">
          <div class="text">
            <h5>The beerster pro 2.0</h5>
            <h1>
              Join our<br>
              famous<br>
              beerup!<br>
            </h1>
            <button class="button-primary">Join beerup</button>
          </div>
          <div class="image">
            <img src="../assets/illustration.png" alt="Beer up ilustration">
          </div>
          <div class="cap"><img src="../assets/cap.png" alt="Cap"></div>
        </div>
      </header>
  </div>
</template>

<script>
export default {
  name: 'beer-header'
}
</script>

<style lang="scss">
header {
  margin-bottom: -100px;
  padding-top: 15px;
  background-color: #000;
  background-image: url('../assets/pattern.png');
  font-family: 'Montserrat';
  // overflow: hidden;
}
.header {
  .logo {
    margin-right: auto;
    align-self: center;
    img {
      width: 100%;
      height: auto;
    }
  }
  .main-navigation {
    margin-left: auto;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 2px;
    font-weight: 700;
    color: #fff;
    ul {
      display: flex;
      li {
        // align-self: center;
        padding: 15px 40px;
        cursor: pointer;
        &:not(:last-child){
          a {
            text-decoration: none;
            color: #fff;
            padding: 0 3px;
            padding-bottom: 6px;
            border-color: #FFC80A;
            -webkit-transition: border 0.1s ease-in;
            transition: border 0.1s ease-in;
            &:hover {
              border-bottom: 3px solid #FFC80A;
            }
          }
        }
      }
    }
  }
}
.hero {
  position: relative;
  padding-top: 100px;
  text-transform: uppercase;
  color: #fff;
  .text {
    margin-right: auto;
    font-weight: 700;
    h5 {
      padding-bottom: 30px;
      font-size: 14px;
      letter-spacing: 2px;
    }
    h1 {
      margin-bottom: 50px;
      font-size: 85px;
      font-weight: 700;
    }
  }
  .image {
    margin-left: auto;
    img {
      width: 100%;
      height: auto;
    }
  }
  .cap {
    position: absolute;
    bottom: 88px;
    right: 45px;
    z-index: 998;
  }
}
</style>
