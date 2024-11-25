<script setup lang="ts">
import { onMounted, ref } from "vue";
import Bag from "./components/Bag.vue";
import CheckerBoard from "./components/CheckerBoard.vue";
import Claw from "./components/Claw.vue";
import Close from "./components/Close.vue";
import LuckyCatPicker from "./components/LuckyCatPicker.vue";
import MusicPlayer from "./components/MusicPlayer.vue";
import Play from "./components/Play.vue";
import Restart from "./components/Restart.vue";
import Rules from "./components/Rules.vue";
import TableCloth from "./components/TableCloth.vue";

const width = ref(0);
const height = ref(0);

onMounted(() => {
  const clientWidth = document.body.clientWidth;
  const clientHeight = document.body.clientHeight;

  const ratio = clientHeight / clientWidth;

  if (ratio > 6488 / 3000) {
    width.value = clientWidth;
    height.value = parseInt((clientWidth * (6488 / 3000)).toFixed(2));
  } else {
    width.value = parseInt((clientHeight * (3000 / 6488)).toFixed(2));
    height.value = clientHeight;
  }
});
</script>

<template>
  <div
    class="container"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <music-player />
    <table-cloth />
    <checker-board />
    <bag />
    <rules />
    <play />
    <close />
    <restart />
    <claw />
    <lucky-cat-picker />
  </div>
</template>

<style lang="less" scoped>
.container {
  position: relative;
  background-image: url("/images/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
}
</style>
