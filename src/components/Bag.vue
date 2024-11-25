<script setup lang="ts">
import { computed, ref } from "vue";
import { useAppStore } from "../store";

const store = useAppStore();

const records = computed(() => store.records);

const visible = ref(false);

function handleShow() {
  visible.value = true;
}

function handleHide() {
  visible.value = false;
}
</script>

<template>
  <div class="bag" v-if="visible">
    <img src="/images/close.png" class="close-icon" @click="handleHide" />
    <span class="cat cat-1"> {{ records[0] }} </span>
    <span class="cat cat-2"> {{ records[1] }} </span>
    <span class="cat cat-3"> {{ records[2] }} </span>
    <span class="cat cat-4"> {{ records[3] }} </span>
    <span class="cat cat-5"> {{ records[4] }} </span>
    <span class="cat cat-6"> {{ records[5] }} </span>
    <span class="cat cat-7"> {{ records[6] }} </span>
    <span class="cat cat-8"> {{ records[7] }} </span>
    <span class="cat cat-9"> {{ records[8] }} </span>
    <span class="cat cat-10"> {{ records[9] }} </span>
  </div>
  <img src="/images/bag/bag.png" class="bag-icon" @click="handleShow" v-else />
</template>

<style lang="less" scoped>
.bag-icon {
  position: absolute;
  top: 50%;
  left: 1rem;
  width: 35%;
}
.bag {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/bag/bag-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 10;
  .close-icon {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 2rem;
  }
  .cat {
    position: absolute;
    font-family: "comicbd", sans-serif;
  }
  .cat-1 {
    bottom: 18%;
    right: 15%;
  }
  .cat-2 {
    bottom: 39%;
    right: 12%;
  }
  .cat-3 {
    top: 26%;
    left: 49%;
  }
  .cat-4 {
    top: 36%;
    right: 17%;
  }
  .cat-5 {
    bottom: 4%;
    left: 45%;
  }
  .cat-6 {
    top: 38%;
    left: 21%;
  }
  .cat-7 {
    top: 50%;
    left: 45%;
  }
  .cat-8 {
    top: 13%;
    right: 17%;
  }
  .cat-9 {
    bottom: 21%;
    left: 17%;
  }
  .cat-10 {
    bottom: 28%;
    left: 47%;
  }
}
</style>
