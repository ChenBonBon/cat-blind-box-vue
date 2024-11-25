<script setup lang="ts">
import { computed } from "vue";
import { useAppStore } from "../store";

const store = useAppStore();

const chances = computed(() => store.chances);
</script>

<template>
  <div className="claw-wrapper">
    <img src="/images/test-tubes.png" className="test-tubes" />
    <img
      src="/images/liquid.png"
      className="liquid"
      :style="{ opacity: chances > 10 ? 1 : chances / 10 }"
    />
    <img src="/images/claw.png" className="claw" />
  </div>
</template>

<style lang="less" scoped>
.claw-wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 20%;
  pointer-events: none;
  text-align: right;
  .test-tubes,
  .liquid {
    position: absolute;
    width: 55%;
    bottom: 0.5rem;
    right: 40%;
  }
  .claw {
    position: absolute;
    width: 60%;
    bottom: 0;
    right: 0;
  }
}
</style>
