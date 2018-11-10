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

// example
Promise.resolve([1, 2, 3])
  .then(call('map', x => 2 * x))
  .then(console.log); // [ 2, 4, 6 ]
const map = call.bind(null, 'map');
Promise.resolve([1, 2, 3])
  .then(map(x => 2 * x))
  .then(console.log); // [ 2, 4, 6 ]


/**
 * collectInto
 * Changes a function that accepts an array into a variadic function.
 */

const collectInto = func => (...args) => func(args)

// example 
const Pall = collectInto(Promise.all.bind(Promise));
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = new Promise(resolve => setTimeout(resolve, 2000, 3));
Pall(p1, p2, p3).then(console.log); // [1, 2, 3] (after about 2 seconds)
