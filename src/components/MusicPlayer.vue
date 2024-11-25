<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const playing = ref(false);
const audio = ref<HTMLAudioElement | null>(null);

function handlePlay() {
  playing.value = true;

  if (audio.value) {
    audio.value.play();
  }
}

function handlePause() {
  playing.value = false;

  if (audio.value) {
    audio.value.pause();
  }
}

onMounted(() => {
  audio.value = new Audio("/audio/background.wav");
});

onBeforeUnmount(() => {
  audio.value = null;
});
</script>

<template>
  <img
    src="/images/music-player/no-music.png"
    class="music-icon"
    v-if="playing"
    @click="handlePause"
  />
  <img
    src="/images/music-player/music.png"
    class="music-icon"
    v-else
    @click="handlePlay"
  />
</template>

<style lang="less" scoped>
.music-icon {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: 16.7%;
  cursor: pointer;
}
</style>
