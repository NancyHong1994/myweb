<template>
  <div>
  <div id="AboutMe">
    <v-parallax
    dark
    src="https://wallpapercave.com/wp/wp4635777.jpg"
    id="myPhoto"
    height="300"
  ></v-parallax>
  <div>
    <h1>About Me</h1>
    <h2>I am ......</h2>
    <p class="pt-6">
       mmmmmmmmmmmmmmkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
       cccccccccccccmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
       vvvoooooooooooooooooooooooooooooooooooooooooooooo
       bbbbbbyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
       fffffffffffffffff
       ffffffffffffffffff
       ffff
       <br/>
       <br/> Mobile: 021-02890042
       <br/> Email: nancyhong@gmail.com
    </p>
  </div>
  </div>
  </div>
</template>

<style lang="scss">
#AboutMe {
  padding: 100px 20px 10px 150px;
}

#myPhoto {
  float: right;
  width: 550px;
  height: 100px;
  margin-left: 15px;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AboutMe extends Vue {
}
</script>
