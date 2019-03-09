<template>
  <div class="app">
    <div class="main">

    </div>
    <div class="footer">
      <div class="stats">
        <div class='title'></div>
        <div class='icon'></div>
        <div class='value'></div>
      </div>
      <div class="stats">

      </div>
      <div class="stats">

      </div>
      <div class="stats">

      </div>
    </div>
  </div>
</template>

<style lang="scss">
.app {
  .main {
    width: 100vw;
    height: calc(100vh - 120px);
    background-color: #40409a;
  }
  .footer {
    width: 100vw;
    min-height: 120px; //fix
    background-color: #f3f3f3;
    text-align: center;
    .stats {
      width: 250px;
      height: 100px;
      margin: 10px 20px 0px 20px;
      background-color: #fff;
      display: inline-block;
      border-radius: 5px;
      .title {
        width: 250px;
        height: 75px;
        display: inline-block;
      }
    }
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
