<template>
  <div id="app">
    <div class="header">
      <p>something</p>
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
  height: 45px;
  background-color: #fff;
  border-bottom: 1px solid #40409a;
}
</style>
