/**
 * ary
 * Creates a function that accepts up to `n` arguments, ignoring any additional arguments.
 * fn: any function
 * n: up to `n` arguments
 */

const ary = (fn, n) => (...args) => fn(...args.slice(0, n))

// example
const firstTwoMax = ary(Math.max, 2);
const res = [[7, 6, 9], [8, 4, 6], [10]].map(x => firstTwoMax(...x)); // [6, 8, 10]
console.log('res : ', res );

/**
 * call
 * Given a key and a set of arguments, call them when given a context. Primarily useful in composition.
 */

const call = (key, ...args) => context => context[key](...args)

Promise.resolve([1, 2, 3])
  .then(call('map', x => 2 * x))
  .then(console.log); // [ 2, 4, 6 ]
const map = call.bind(null, 'map');
Promise.resolve([1, 2, 3])
  .then(map(x => 2 * x))
  .then(console.log); // [ 2, 4, 6 ]
