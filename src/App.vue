<template>
<v-app>
    <div>
      <Navbar id="navbar"></Navbar>
      <router-view/>
    </div>
</v-app>
</template>

<style lang="scss">
#navbar {
  overflow: hidden;
  position: fixed;
  top: 0;
  padding-bottom: 50px;
  width: 100%;
  z-index: 100;
  background-color: #424242;
  opacity: 0.8;
}

#navbar:hover {
  background-color: #424242;
  opacity: 0.8;
}
</style>

<script lang="ts">
import Navbar from '@/components/menus/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
