<template>
  <div id="app">
    <div class="header">
      <div class="logo">

      </div>
      <div class="menu">
        <ul>
          <li><router-link to="/#whatis">What is Patreaion?</router-link></li>
          <li><router-link to="/post">Post a subscription</router-link></li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header {
  width: 100vw;
  height: 57px;
  background-color: #fff;
  border-bottom: 1px solid #40409a;
  .logo {
    width: 200px;
    height: 57px;
    display: inline-block;
  }
  .menu {
    width: calc(100vw - 200px);
    height: 57px;
    display: inline-block;
    ul {
      list-style-type: none;
      float: right;
      padding-right: 50px;
      li {
        display: inline-block;
        margin: 0px 10px 0px 10px;
        a {
          text-decoration: none;
          font-size: 17px;
          font-weight: 600;
          padding: 8px 15px 8px 15px;
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
}
</style>
