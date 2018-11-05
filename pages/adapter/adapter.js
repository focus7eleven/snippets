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