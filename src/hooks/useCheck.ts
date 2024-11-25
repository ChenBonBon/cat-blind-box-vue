import { computed } from "vue";
import { useAppStore } from "../store";
import { useRaf } from "./useRaf";

export function useCheck() {
  const store = useAppStore();
  const { rafFn } = useRaf();

  const checkers = computed(() => store.checkers);
  const luckyCat = computed(() => store.luckyCat);
  const records = computed(() => store.records);

  async function checkAllDifferent() {
    const checkerSet = new Set(checkers.value);

    if (checkerSet.size === checkers.value.length) {
      for (let i = 0; i < checkers.value.length; i++) {
        await rafFn(() => {
          removeChecker(i);
          const key = checkers.value[i];
          if (key) {
            store.setRecord(key, records.value[key] + 1);
          }
        }, 500);
      }

      store.addChance(5);
    }
  }

  async function checkRow(row: number) {
    const cols = checkers.value.slice(row * 3, (row + 1) * 3);

    if (new Set(cols).size === 1 && cols[0] !== null) {
      for (let i = 0; i < 3; i++) {
        await rafFn(() => {
          removeChecker(row * 3 + i);
        }, 500);
      }

      const key = cols[0];
      if (key) {
        store.setRecord(key, records.value[key] + 3);
      }
      store.addChance(5);
    }
  }

  async function checkCol(col: number) {
    const rows = checkers.value.filter((_, index) => {
      return index % 3 === col;
    });

    if (new Set(rows).size === 1 && rows[0] !== null) {
      for (let i = 0; i < 3; i++) {
        await rafFn(() => {
          removeChecker(i * 3 + col);
        }, 500);
      }

      const key = rows[0];
      if (key) {
        store.setRecord(key, records.value[key] + 3);
      }
      store.addChance(5);
    }
  }

  async function checkRows() {
    for (let i = 0; i < 3; i++) {
      await checkRow(i);
    }
  }

  async function checkCols() {
    for (let i = 0; i < 3; i++) {
      await checkCol(i);
    }
  }

  async function checkLeftTopToRightBottom() {
    const checker1 = checkers.value[0];
    const checker2 = checkers.value[4];
    const checker3 = checkers.value[8];

    if (checker1 === checker2 && checker2 === checker3 && checker1 !== null) {
      const indexList = [0, 4, 8];

      for (let i = 0; i < indexList.length; i++) {
        await rafFn(() => {
          removeChecker(indexList[i]);
        }, 500);
      }

      store.setRecord(checker1, records.value[checker1] + 3);
      store.addChance(5);
    }
  }

  async function checkRightTopToLeftBottom() {
    const checker1 = checkers.value[2];
    const checker2 = checkers.value[4];
    const checker3 = checkers.value[6];

    if (checker1 === checker2 && checker2 === checker3 && checker1 !== null) {
      const indexList = [2, 4, 6];

      for (let i = 0; i < indexList.length; i++) {
        await rafFn(() => {
          removeChecker(indexList[i]);
        }, 500);
      }

      store.setRecord(checker1, records.value[checker1] + 3);
      store.addChance(5);
    }
  }

  async function checkPairs() {
    const indexList: number[][] = [];
    const clonedCheckers = [...checkers.value];

    for (let i = 0; i < 9; i++) {
      if (clonedCheckers[i] === null) {
        continue;
      }

      for (let j = i + 1; j < 9; j++) {
        if (clonedCheckers[i] === clonedCheckers[j]) {
          indexList.push([i, j]);
          clonedCheckers[i] = null;
          clonedCheckers[j] = null;

          const key = checkers.value[i];

          if (key) {
            store.setRecord(key, records.value[key] + 2);
          }
          break;
        }
      }
    }

    for (let i = 0; i < indexList.length; i++) {
      await rafFn(() => {
        removeChecker(indexList[i][0]);
        removeChecker(indexList[i][1]);
      }, 500);
    }

    store.addChance(indexList.length);
  }

  async function checkLuckyColor() {
    if (luckyCat.value === -1) {
      return;
    }

    const index = checkers.value.findIndex((item) => item === luckyCat.value);

    if (index > -1) {
      await rafFn(() => {
        removeChecker(index);
        store.setRecord(luckyCat.value, records.value[luckyCat.value] + 1);
        store.addChance(1);
      }, 500);
    }
  }

  async function checkEmpty() {
    if (checkers.value.filter((item) => item === null).length === 9) {
      await rafFn(() => {
        store.addChance(10);
      }, 500);
    }
  }

  function removeChecker(index: number) {
    store.setChecker(index, null);
  }

  async function check() {
    await checkAllDifferent();
    await checkRows();
    await checkCols();
    await checkLeftTopToRightBottom();
    await checkRightTopToLeftBottom();
    await checkPairs();
    await checkLuckyColor();
    await checkEmpty();
  }

  return {
    check,
  };
}
