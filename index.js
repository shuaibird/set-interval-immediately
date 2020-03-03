module.exports = (func, interval) => {
  const setInterval = (() => {
    if (window) {
      return window.setInterval;
    } else if (global) {
      return global.setInterval;
    }
  })();
  
  if (!setInterval) {
    throw new Error(`setInterval doesn't exist.`);
  }

  func();
  return setInterval(func, interval);
};
