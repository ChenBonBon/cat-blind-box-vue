<script setup lang="ts">
import { useAppStore } from "../store";

const store = useAppStore();

function handleRestart() {
  store.restart();
}
</script>

<template>
  <img src="/images/restart.png" class="restart" @click="handleRestart" />
</template>

<style lang="less" scoped>
.restart {
  position: absolute;
  bottom: 0.5rem;
  left: 20%;
  width: 14%;
}
</style>
