/**
 *
 * @param {fn} eventHandler 执行函数（fn）
 * @param {number} delay 延迟时间（ms）
 * @param {boolean} immediate 是否立即执行 (boolean)
 */
function debounce(eventHandler, delay, immediate) {
  let timer;

  const debounceBuintInHandler = function () {
    const context = this;
    const args = arguments;

    if (timer) clearTimeoutFunc(timer);
    if (immediate) {
      if (!timer) eventHandler.apply(context, args);
      timer = setTimeout(() => (timer = null), delay);
    } else {
      timer = setTimeoutFunc(eventHandler, delay, context, args);
    }
  };

  debounceBuintInHandler.cancel = function () {
    clearTimeoutFunc(timer);
    timer = null;
  };

  return debounceBuintInHandler;
}

function setTimeoutFunc(eventHandler, delay, context, args) {
  return setTimeout(function () {
    eventHandler.apply(context, args);
  }, delay);
}

function clearTimeoutFunc(timerId) {
  clearTimeout(timerId);
}

export { debounce };
