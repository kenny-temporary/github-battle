class Context {
  startegies = new Map();

  constructor() {}

  use(startegiesInstance) {
    if (Array.isArray(startegiesInstance)) {
      startegiesInstance.forEach((startegy) => {
        this._check(startegy);
        this._register(startegy);
      });
    }
  }

  processor(name, ...args) {
    this.startegies.has(name) && this.startegies.get(name)?.processor(...args);
  }

  _register(startegy) {
    this.startegies.set(startegy.name, startegy);
  }

  _check(startegy) {
    if (!startegy.name || startegy.name === "INIT") {
      throw new Error("invalid name: " + startegy.name);
    }

    if (!startegy.processor || typeof startegy.processor !== "function") {
      throw new Error("invalid processor: " + startegy.processor);
    }

    return true;
  }
}

export default Context;
