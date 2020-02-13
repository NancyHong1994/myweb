<template>
    <div id="Project">
    <h1 class="text-center">My Project</h1>
    <div class="pt-10">
        <div id="container" class="con pro">
        <img
            src="https://wallpapercave.com/wp/wp4635777.jpg"
            id="image"
        >
        <div class="overlay">
            <div class="text t-keyBar">Personal exc record</div>
        </div>
        </div>
        <div id="container" class="con pro">
        <img
            src="https://wallpapercave.com/wp/wp4635777.jpg"
            id="image"
        >
        <div class="overlay">
            <div class="text t-keyBar">Personal exc record</div>
        </div>
        </div>
        <div id="container" class="con pro">
        <img
            src="https://wallpapercave.com/wp/wp4635777.jpg"
            id="image"
        >
        <div class="overlay">
            <div class="text t-keyBar">Personal exc record</div>
        </div>
        </div>
    </div>
    </div>
</template>

<style lang="scss">
#Project {
    height: 600px;
    padding: 100px 150px 100px 150px;
}

.pro {
    margin-left: 80px;
    position: relative;
    float: left;
}

#container {
  position: relative;
  width: 25%;
}

#image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  width: 0;
  height: 100%;
  transition: .5s ease;
}

.con:hover .overlay {
  width: 100%;
}

.text {
  white-space: nowrap;
  font-size: 20px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Project extends Vue {
}
</script>
