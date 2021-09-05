let isRuning = false;
function throttle(fn, wait) {
  return function handler() {
    if (isRuning) {
      return;
    } else {
      isRuning = true;
      fn(...arguments);
      setTimeout(() => (isRuning = false), wait);
    }
  };
}

export { throttle };
