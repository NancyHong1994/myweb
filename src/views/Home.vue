<template>
  <v-content>
  <div class="home">
  <v-parallax
    dark
    src="https://wallpapercave.com/wp/wp2875572.jpg"
    height="750"
  >
    <v-row
      align="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-4 font-weight-black mb-4">I am Nancy</h1>
        <h4 class="subheading">Weclome to my Web!</h4>
        <svg width="60" height="60" class="pt-2">
          <line x1="10" x2="30" y1="30" y2="50" stroke="white" fill="transparent" stroke-width="5"/>
          <line x1="28" x2="48" y1="50" y2="30" stroke="white" fill="transparent" stroke-width="5"/>
        </svg>
      </v-col>
    </v-row>
  </v-parallax>
  <AboutMe/>
  <Resume id="resume"/>
  <myProject/>
  </div>
</v-content>
</template>

<style lang="scss">
#resume {
  margin-top: 100px;
}
</style>

<script>
import AboutMe from '@/components/AboutMe.vue'
import Resume from '@/components/Resume.vue'
import myProject from '@/components/Project.vue'

export default {
  name: 'Home',
  components: {
    AboutMe,
    Resume,
    myProject
  }
}
</script>
