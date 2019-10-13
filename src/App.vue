<template>
  <div id="app">
    <div class="app-container">
      <Menu class="app-sidebar"/>
      <router-view class="app-contents"/>
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

.app-sidebar {
  height: 100%;
  width: 20%;
  float: left;
}

.app-contents {
  height: calc(100% - 24px);
  width: calc(80% - 5px);
  margin: 0; 
  float: left;
  overflow: auto;
  padding-top: 24px;
}

</style>