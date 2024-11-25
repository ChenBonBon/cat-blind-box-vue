<script setup lang="ts">
import { Checker } from "../app";

defineProps<{
  value: Checker;
  oldValue: Checker;
}>();
</script>

<template>
  <img
    :src="'/images/cats/cat-' + (value + 1) + '.png'"
    class="checker"
    v-if="value !== null"
  />
  <span v-else-if="oldValue === null"></span>
  <img
    :src="'/images/cats/cat-' + (oldValue + 1) + '.png'"
    class="checker hidden"
    v-else
  />
</template>

<style lang="less" scoped>
.checker {
  width: 75%;
  .hidden {
    opacity: 0;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
  }
}
</style>
