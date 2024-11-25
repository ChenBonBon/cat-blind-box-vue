<script setup lang="ts">
function handleClose() {
  window.close();
}
</script>

<template>
  <img src="/images/close.png" class="close" @click="handleClose" />
</template>

<style lang="less" scoped>
.close {
  width: 12%;
  position: absolute;
  bottom: 0.5rem;
  left: 1rem;
}
</style>
