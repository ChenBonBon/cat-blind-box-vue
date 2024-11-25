<script setup lang="ts">
import { computed } from "vue";
import { useAppStore } from "../store";
import CheckerBoardItem from "./CheckerBoardItem.vue";

const store = useAppStore();

const checkers = computed(() => store.checkers);
const oldCheckers = computed(() => store.oldCheckers);
</script>

<template>
  <div class="checker-board">
    <checker-board-item
      v-for="(checker, index) in checkers"
      :key="index"
      :value="checker"
      :oldValue="oldCheckers[index]"
    />
  </div>
</template>

<style lang="less" scoped>
.checker-board {
  position: absolute;
  top: 6rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 6rem);
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  background-image: url("/images/checkerboard.png");
  background-size: cover;
  background-repeat: no-repeat;
  aspect-ratio: 1;
}
</style>
