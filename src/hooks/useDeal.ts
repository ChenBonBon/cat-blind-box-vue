import { computed, ref } from "vue";
import { catList, useAppStore } from "../store";
import { useRaf } from "./useRaf";

export function useDeal() {
  const store = useAppStore();
  const { rafFn } = useRaf();

  const checkers = computed(() => store.checkers);
  const chances = computed(() => store.chances);

  const done = ref(true);

  function getBlankIndexList() {
    const blankIndexList: number[] = [];

    checkers.value.forEach((item, index) => {
      if (item === null) {
        blankIndexList.push(index);
      }
    });

    if (chances.value > blankIndexList.length) {
      return blankIndexList;
    }

    return blankIndexList.slice(0, chances.value);
  }

  function generateChecker() {
    return Math.floor(Math.random() * catList.length);
  }

  function fillBlank(index: number) {
    const newChecker = generateChecker();
    store.setChecker(index, newChecker);
  }

  function deal() {
    done.value = false;

    const blankIndexList = getBlankIndexList();

    store.reduceChance(blankIndexList.length);

    blankIndexList.forEach((index, i) => {
      rafFn(() => {
        fillBlank(index);
        if (i === blankIndexList.length - 1) {
          done.value = true;
        }
      }, 300 * i);
    });
  }

  return {
    done,
    deal,
  };
}
