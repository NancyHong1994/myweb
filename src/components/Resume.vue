<template>
    <div class="keyBar" id="resume">
      <h2>Interested In me?</h2>
      <div id="text">
      <v-btn fab x-large dark class="position">See My Resume</v-btn>
      <div>
        <h1 class="pt-9 position">Cilck My Resume Here</h1>
      </div>
      </div>
  </div>
</template>

<style lang="scss">
#resume {
  height: 270px;
  padding: 30px 500px 30px 400px;
}
#showResume {
  width: 350px;
  height: 200px;
  margin-left: 50px;
  float: right;
}
#text {
  border-style: none solid;
  border-width: 2px 0px 4px 7px;
}
.position {
  margin-left: 170px;
  margin-top: 10px
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Resume extends Vue {
}
</script>
