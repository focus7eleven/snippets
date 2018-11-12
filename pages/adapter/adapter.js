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
}

const adatper = new Adapter()

export default adatper


