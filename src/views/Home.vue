<template>
  <div class="home">
  <v-parallax
    dark
    src="https://wallpapercave.com/wp/wp2875572.jpg"
    height="1000"
  >
    <v-row
      align="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-4 font-weight-black mb-4">I am Nancy</h1>
        <h4 class="subheading">Weclome to my blog!</h4>
        <svg width="60" height="60" class="pt-2">
          <line x1="10" x2="30" y1="30" y2="50" stroke="white" fill="transparent" stroke-width="5"/>
          <line x1="28" x2="48" y1="50" y2="30" stroke="white" fill="transparent" stroke-width="5"/>
        </svg>
        <div class="pt-12">
          <v-btn color="t-primary" x-large>About me</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-parallax>
  <div id="AboutMe" class="pt-12">
      <h1 class="text-center">About Me</h1>
      <h2>I am .......</h2>
      <p>xxxxxxxxxxxxx</p><img src="" alt="">
  </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>
