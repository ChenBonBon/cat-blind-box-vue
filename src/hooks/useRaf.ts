export function useRaf() {
  async function rafFn(cb: () => void, delay: number) {
    return new Promise((resolve) => {
      const last = new Date().getTime();
      let rafId = 0;

      function start() {
        rafId = requestAnimationFrame(() => {
          const now = new Date().getTime();

          if (now - last >= delay) {
            cb();
            cancelAnimationFrame(rafId);
            resolve(true);
            return;
          }

          start();
        });
      }

      start();
    });
  }

  return { rafFn };
}
