<template>
  <footer>
    <p>Copyright &copy; {{ new Date().getFullYear() }} — <strong>Created By Nancy Hong</strong></p>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {

}
</script>
