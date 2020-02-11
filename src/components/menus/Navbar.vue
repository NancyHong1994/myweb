<template>
      <div id="menu" class="pl-12 pt-3 pb-3">
        <v-btn text large color="secondary">Home</v-btn>
        <v-btn text large color="secondary">Diary</v-btn>
        <v-btn text large color="secondary">Photo</v-btn>
        <v-btn text large color="secondary">Comment</v-btn>
        <div id="login">
            <v-btn large outlined color="secondary">Hi,Guest</v-btn>
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

@Component
export default class Narbar extends Vue {

}
</script>
