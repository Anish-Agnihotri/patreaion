<template>
  <div class="app">
    <div class="main">

    </div>
    <div class="footer">

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
  }
}
</style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
