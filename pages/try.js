const { performance } = require('perf_hooks')
const f = fn => timeout => new Promise((resolve) => fn(timeout, resolve))

const delay = f((t, cb) => setTimeout(cb, t))
const start = performance.now()
delay(2000).then(() => console.log('hi'))
const end = performance.now()
console.log('end-start : ', end-start );


