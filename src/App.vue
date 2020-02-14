<template>
<v-app>
    <div>
      <Navbar id="navbar"></Navbar>
      <router-view/>
    </div>
    <Footer id="footer"></Footer>
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
#footer {
  text-align: center;
  background-color: #424242;
  color: #fff;
  padding: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>

<script lang="ts">
import Navbar from '@/components/menus/Navbar.vue'
import Footer from '@/components/footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
