const arr = require('../pages/array/array.js').default
const { performance } = require('perf_hooks')

describe('test adapter', () => {
  test('test all', () => {
    const result1 = arr.all([4, 2, 3], x => x > 1)
    const result2 = arr.all([1, 2, 3])
    expect(result1).toEqual(true)
    expect(result2).toEqual(true)
  })
})
