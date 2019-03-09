<template>
  <div class="app">
    <video-bg :sources="['https://c5.patreon.com/external/landing_pages/video/what_is_patreon_background.mp4']" >
      <div class="landingOverlay">
        <h1>Patreaion powers decentralized subscription systems</h1>
        <ul>
          <li><router-link to="/#whatis">What is Patreaion?</router-link></li>
          <li><router-link to="/post">Post a subscription</router-link></li>
        </ul>
      </div>
    </video-bg>
    <div id="whatis" class="subCTA">
      <h2>Patreaion allows <span class="highlight">creators</span> to have a direct relationship with their fans, get <span class="highlight">reccuring</span> payments for your work, and create on your <span class="highlight">own terms</span> - all while being completely decentralized.</h2>
    </div>
    <div class="subscriptions">
      <h1>Active Subscriptions</h1>
      <p>Take a look at some of our featured subscriptions. To get started, simply create a <router-link to="/post" class='highlightLink'>new subscription contract</router-link>, and begin offering your service today.</p>
    </div>
    <div class="footer">
      <h1>Ready to get started?</h1>
      <p>Join the decentralized movement, and get connected to your fans today!</p>
      <router-link to="/post">Post a subscription</router-link>
    </div>
    <div class="subFooter">
      <span> Patreaion | &copy; 2019 </span>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat');
.landingOverlay {
  background-color: #40409ab6;
  width: 40vw;
  padding-left: 30vw;
  padding-right: 30vw;
  height: 700px;
  text-align: center;
  padding-top: 140px;
  h1 {
    margin: 0;
    font-size: 45px;
    line-height: 1.2;
    color: #fff;
    padding: 10px;
  }
  ul {
    list-style-type: none;
    margin-left: -30px;
    li {
      display: inline-block;
      margin: 0px 10px 0px 10px;
      a {
        text-decoration: none;
        font-size: 17px;
        font-weight: 600;
        padding: 10px 15px 10px 15px;
        border-radius: 25px;
        transition: 0.15s ease-in-out;
      }
      a:hover {
        opacity: 0.9;
      }
    }
    li:nth-child(1) {
      a {
        color: #40409a;
        background-color: #fff;
      }
    }
    li:nth-child(2) {
      a {
        background-color: #4e4ecf;
        color: #fff;
      }
    }
  }
}
.app {
  width: 100vw;
  height: 100vh;
  .subCTA {
    width: 50vw;
    height: 180px;
    background-color: #ebebfa;
    text-align: center;
    padding-top: 20px;
    padding-left: 25vw;
    padding-right: 25vw;
    line-height: 1.6;
    color: #000;
  }
  .subscriptions {
    width: 80vw;
    padding-left: 10vw;
    padding-right: 10vw;
    padding-top: 20px;
    text-align: center;
    h1 {
      color: #40409a;
      font-weight: 700;
    }
    p {
      width: 600px;
      line-height: 1.6;
      display: inline-block;
      margin-top: -10px;
    }
  }
  .footer {
    width: 100vw;
    height: 180px;
    text-align: center;
    background-color: #40409a;
    color: #fff;
    h1 {
      padding-top: 25px;
    }
    p {
      margin-top: -20px;
      padding-bottom: 10px;
    }
    a {
      padding: 10px 20px 10px 20px;
      border-radius: 25px;
      border: 2px solid #fff;
      color: #fff;
      font-size: 18px;
      text-decoration: none;
      transition: 0.15s ease-in-out;
      font-weight: 700;
      margin-top: 10px;
      margin-left: -10px;
    }
    a:hover {
      background-color: #fff;
      color: #40409a;
    }
  }
}
.highlight {
  color: #40409a !important;
}
.highlightLink {
  text-decoration: none;
  color: #000;
  padding-bottom: 2px;
  border-bottom: 1px dashed #40409a;
  transition: 0.15s ease-in-out;
}
.highlightLink:hover {
  padding-bottom: 0px;
}
.subFooter {
  padding-top: 20px;
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: #40409a;
}
</style>
<script>
// @ is an alias to /src
import HomeStats from '@/components/HomeStats.vue'

export default {
  name: 'home',
  components: {
    HomeStats
  }
}
</script>
