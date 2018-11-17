class Adapter {
  /**
   * ary
   * Creates a function that accepts up to `n` arguments, ignoring any additional arguments.
   * fn: any function
   * n: up to `n` arguments
   */
  ary = (fn, n) => (...args) => fn(...args.slice(0, n))

  /**
   * call
   * Given a key and a set of arguments, call them when given a context. Primarily useful in composition.
   */
  call = (key, ...args) => context => context[key](...args)

  /**
   * collectInto
   * Changes a function that accepts an array into a variadic function.
   */
  collectInto = func => (...args) => func(args)

  /**
   * flip
   * Flip takes a function as an argument, then makes the first argument the last.
   */
  flip = fn => (first, ...rest) => fn(...rest, first)

  /**
   * over
   * Creates a function that invokes each provided function with the arguments it receives and returns the results.
   */
  over = (...args) => (...params) => args.map(fn => fn(...params))

  /**
   * overArgs
   * Creates a function that invokes the provided function with its arguments transformed.
   */
  overArgs = (fn, transform) => (...args) => fn(...(args.map((n, i) => transform[i](n))))

  /**
   * pipeAsyncFunctions
   * Performs left-to-right function composition for asynchronous functions.
   */
  pipeAsyncFunctions = (...fns) => arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg))

  /**
   * pipeFunctions
   * Performs left-to-right function composition.
   */
  pipeFunctions = (...fns) => (...args) => fns.reduce((p, f) => [f.apply(null, p)], args)[0]

  /**
   * promisify
   * Converts an asynchronous function to return a promise.
   */
  promisify = fn => timeout => new Promise(resolve => fn(timeout, resolve))
}

const adatper = new Adapter()

export default adatper


