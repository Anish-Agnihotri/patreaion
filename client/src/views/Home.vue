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
      <div id="existingSubs">
        <div class="cards" v-for="subscription in subscriptions">
          <div style="background-image: url('https://i.imgur.com/bg0MZPZ.jpg');">

          </div>
          <div>
              <h2>{{ subscription.sub_name }}</h2>
              <p>{{ subscription.sub_description }}</p>
          </div>
          <div>
            <div>
              <div style='width: 90%;'></div>
            </div>
          </div>
          <div>
            <a href="#">Subscribe</a>
          </div>

        </div>
        <!-- A card 
        <div class='cards'>
          <div style='background-image: url('https://i.imgur.com/bg0MZPZ.jpg');'>

          </div>
          <div>
            <h2>Some title</h2>
            <p>Testing multi-line typing functionality for overflows.</p>
          </div>
          <div>
            <div>
              <div style='width: 90%;'></div>
            </div>
          </div>
          <div>
            <a href="#">Subscribe</a>
          </div>
        </div>-->

      </div>
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
.cards {
  width: 300px;
  height: 400px;
  border-radius: 5px;
  display: inline-block;
  margin: 20px;
  text-align: left;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.25);
  div:nth-child(1) {
    width: 300px;
    height: 150px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: inline-block;
    margin: 0 !important;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  div:nth-child(2) {
    width: 280px;
    height: 150px;
    display: inline-block;
    margin: 0 !important;
    padding: 0px 10px 0px 10px;
    h2 {
      color: #40409a;
    }
    p {
      width: 100%;
    }
  }
  div:nth-child(3) {
    width: 300px;
    height: 50px;
    display: inline-block;
    text-align: center;
    div {
      height: 20px;
      width: 280px;
      border-radius: 5px;
      margin: 0px;
      background-color: #ccc;
      background-image: none !important;
      div {
        background-color: #40409a !important;
        background-image: none;
        height: 100%;
        float: left;
      }
    }
  }
  div:nth-child(4) {
    width: 300px;
    height: 50px;
    display: inline-block;
    text-align: center;
    a {
      padding: 10px 100px 10px 100px;
      border-radius: 5px;
      border: 2px solid #40409a;
      text-decoration: none;
      color: #40409a;
      transition: 0.15s ease-in-out;
      font-weight: 700;
    }
    a:hover {
      background-color: #40409a;
      color: #fff;
    }
  }
}
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
export default {
  name: 'home',
  data () {
    return {
      subscriptions: []
    }
  },
  methods:{

  },
  created() {
    this.$http.get('http://localhost:8082/subscriptions').then(function(data){
      this.blogs = data.body;
    })
  }
}
</script>
