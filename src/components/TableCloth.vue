<script setup lang="ts">
import { computed } from "vue";
import { useAppStore } from "../store";

const store = useAppStore();

const luckyCat = computed(() => store.luckyCat);
</script>

<template>
  <div class="table-cloth">
    <img
      :src="'/images/cats/cat-' + (luckyCat + 1) + '.png'"
      class="lucky-cat"
      v-if="luckyCat > -1"
    />
  </div>
</template>

<style lang="less" scoped>
.table-cloth {
  position: absolute;
  top: 0;
  right: 0;
  width: 27.5%;
  aspect-ratio: 1;
  background-image: url("/images/table-cloth.png");
  background-size: cover;
  background-repeat: no-repeat;
  .lucky-cat {
    position: absolute;
    top: 15%;
    left: 50%;
    width: 33.3%;
  }
}
</style>
