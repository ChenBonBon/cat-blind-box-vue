<script setup lang="ts">
import { ref } from "vue";

const visible = ref(false);
const index = ref(0);

function handleNext() {
  index.value++;
}

function handlePrev() {
  index.value--;
}

function handleShow() {
  visible.value = true;
}

function handleHide() {
  visible.value = false;
}
</script>

<template>
  <img
    src="/images/rules/rules.png"
    class="rules-icon"
    @click="handleShow"
    v-if="!visible"
  />
  <div class="rules" @click="handleNext" v-else-if="index === 0">
    <img src="/images/close.png" class="close-icon" @click="handleHide" />
    <img src="/images/rules/introduction-1.png" class="introduction" />
  </div>
  <div class="rules" @click="handlePrev" v-else-if="index === 1">
    <img src="/images/close.png" class="close-icon" @click="handleHide" />
    <img src="/images/rules/introduction-2.png" class="introduction" />
  </div>
</template>

<style lang="less" scoped>
.rules-icon {
  position: absolute;
  top: 50%;
  right: 1rem;
  width: 35%;
}
.rules {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: white;
  .close-icon {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 2rem;
  }
  .introduction {
    width: 100%;
    height: 100%;
  }
}
</style>
