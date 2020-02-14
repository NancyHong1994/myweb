<template>
      <div id="menu" class="pl-12 pt-3 pb-3">
        <v-btn text large color="secondary" class="button">Home</v-btn>
        <v-btn text large color="secondary" class="button">Resume</v-btn>
        <v-btn text large color="secondary" class="button">Project</v-btn>
        <v-btn text large color="secondary" class="button">Comment</v-btn>
        <div id="login">
            <Login/>
        </div>
      </div>
</template>

<style lang="scss">
#login {
    right: 50px;
    display: inline;
    position: absolute;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Login from '@/components/menus/Login.vue'

@Component({
  components: {
    Login
  }
})
export default class Narbar extends Vue {

}
</script>
