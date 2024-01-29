export const debounce = (callback: (...arg: any) => void, delay = 300) => {
  let timer: NodeJS.Timer;

  return (...arg: any) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(this, arg);
    }, delay);
  };
};
