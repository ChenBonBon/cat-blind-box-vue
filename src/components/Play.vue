<script setup lang="ts">
import { computed, watch } from "vue";
import { useCheck } from "../hooks/useCheck";
import { useDeal } from "../hooks/useDeal";
import { useAppStore } from "../store";

const store = useAppStore();
const { done, deal } = useDeal();
const { check } = useCheck();

const luckyCat = computed(() => store.luckyCat);
const checkers = computed(() => store.checkers);
const chances = computed(() => store.chances);

function play() {
  if (luckyCat.value === -1) {
    store.showLuckyCatPicker();
  } else {
    if (chances.value === 0) {
      alert("已经没有剩余次数啦！");
      return;
    }

    if (!done.value) {
      return;
    }

    store.setOldCheckers(checkers.value);

    deal();
  }
}

watch(done, (value) => {
  if (value) {
    setTimeout(() => {
      check();
    }, 500);
  }
});
</script>

<template>
  <img src="/images/play.png" className="play-icon" @click="play" />
</template>

<style lang="less" scoped>
.play-icon {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
}
</style>
