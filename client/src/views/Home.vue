<template>
  <div class="app">
    <video-bg :sources="['https://c5.patreon.com/external/landing_pages/video/what_is_patreon_background.mp4']" >
      <div class="landingOverlay">
        <h1>Patreaion powers decentralized subscription systems</h1>
        <ul>
          <li><a href=''>What is Patreaion?</a></li>
          <li><a href=''>Post a subscription</a></li>
        </ul>
      </div>
    </video-bg>
    <!--<div class="subCTA">
      <h2>Patreaion allows creators to have a direct relationship with their fans, get reccuring payments for your work, and create on your own terms - all while being completely decentralized.</h2>
    </div>
    <div class="subscriptions">
      <h1>Active Subscriptions</h1>
      <p>Take a look at some of our featured subscriptions. To get started, simply create a new subscription contract, and begin offering your service today.</p>
    </div>-->
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
        color: 40409a;
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
    background-color: #e6e6e6;
    text-align: center;
    padding-top: 20px;
    padding-left: 25vw;
    padding-right: 25vw;
    line-height: 1.6;
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
    height: 200px;
    text-align: center;
    background-color: #40409a;
  }
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
