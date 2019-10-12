<template>
  <div id="app">
    <div class="row app-container">
      <Menu class="col-2"/>
      <router-view class="col-10 app-contents"/>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

export default {
  name: 'app',
  components: {
    Menu
  }
}
</script>
<style scoped>
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%; 
}

.app-container {
  height: 100%; 
  margin: 0;
}

.app-contents {
  height: 100%;
  overflow: auto;
  padding-top: 24px;
}

</style>