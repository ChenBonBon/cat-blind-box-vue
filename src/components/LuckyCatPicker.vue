<script setup lang="ts">
import { computed } from "vue";
import { catList, useAppStore } from "../store";

const store = useAppStore();

const luckyCatPickerVisible = computed(() => store.luckyCatPickerVisible);

function handleClick(index: number) {
  store.setLuckyCat(index);
  store.addChance(10 + Math.floor(Math.random() * 10));
  store.hideLuckyCatPicker();
}
</script>

<template>
  <dialog :open="luckyCatPickerVisible" class="lucky-cat-picker-dialog">
    <div class="lucky-cat-picker">
      <div class="lucky-cat-picker-content">
        <img
          v-for="(_, index) in catList"
          :key="index"
          :src="'/images/cats/cat-' + (index + 1) + '.png'"
          class="lucky-cat-picker-item"
          @click="handleClick(index)"
        />
      </div>
    </div>
  </dialog>
</template>

<style lang="less" scoped>
.lucky-cat-picker-dialog {
  height: 80%;
  top: 10%;
  background-color: transparent;
  border: none;
  padding: 0;
  .lucky-cat-picker {
    height: 100%;
    background-image: url("/images/lucky-cat-picker-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    .lucky-cat-picker-content {
      height: calc(100% - 6rem);
      padding: 3rem 2rem;
      display: grid;
      grid-template-rows: repeat(5, 1fr);
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
      align-items: center;
    }
    .lucky-cat-picker-item {
      width: 50%;
    }
  }
}
</style>
