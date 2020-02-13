<template>
    <div class="keyBar" id="resume">
      <v-btn fab x-large dark>See My Resume</v-btn>
      <img id="showResume" src="https://greatlove.how/wp-content/uploads/1428755953984_1_150413112532685_700x.jpeg" alt="">
      <div>
        <h1 class="pt-12">Interested In me ?</h1>
        <h2>Here Is My Resume</h2>
      </div>
  </div>
</template>

<style lang="scss">
#resume {
  height: 270px;
  padding: 30px 400px 30px 400px;
}
#showResume {
  width: 350px;
  height: 200px;
  margin-left: 50px;
  float: right;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Resume extends Vue {
}
</script>
