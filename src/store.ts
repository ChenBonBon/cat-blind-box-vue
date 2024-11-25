import { defineStore } from "pinia";
import { ref } from "vue";
import { Checker } from "./app";

export const catList = [
  "骷髅咪",
  "石像咪",
  "木乃咪",
  "史莱姆咪",
  "丧尸咪",
  "幽灵咪",
  "恶魔咪",
  "天使咪",
  "僵尸咪",
  "滋咪咪",
];

const initRecords = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};

export const useAppStore = defineStore("app", () => {
  const luckyCat = ref(-1);
  const luckyCatPickerVisible = ref(false);
  const chances = ref(0);
  const checkers = ref<Checker[]>(new Array(9).fill(null));
  const oldCheckers = ref<Checker[]>(new Array(9).fill(null));
  const records = ref<Record<number, number>>(initRecords);

  function setLuckyCat(newLuckyNumber: number) {
    luckyCat.value = newLuckyNumber;
  }

  function setChecker(index: number, newChecker: Checker) {
    checkers.value[index] = newChecker;
  }

  function setOldCheckers(newCheckers: Checker[]) {
    oldCheckers.value = newCheckers;
  }

  function restart() {
    luckyCat.value = -1;
    luckyCatPickerVisible.value = false;
    checkers.value = new Array(9).fill(null);
    oldCheckers.value = new Array(9).fill(null);
    records.value = initRecords;
    chances.value = 0;
  }

  function setRecord(key: number, value: number) {
    records.value[key] = value;
  }

  function showLuckyCatPicker() {
    luckyCatPickerVisible.value = true;
  }

  function hideLuckyCatPicker() {
    luckyCatPickerVisible.value = false;
  }

  function addChance(chance: number) {
    chances.value += chance;
  }

  function reduceChance(chance: number) {
    chances.value -= chance;
  }

  return {
    luckyCat,
    luckyCatPickerVisible,
    chances,
    checkers,
    oldCheckers,
    records,
    setLuckyCat,
    setChecker,
    setOldCheckers,
    restart,
    setRecord,
    showLuckyCatPicker,
    hideLuckyCatPicker,
    addChance,
    reduceChance,
  };
});
