const adapter = require('../pages/adapter/adapter.js').default

describe('test adapter', () => {
  test('test ary', () => {
    const firstTwoMax = adapter.ary(Math.max, 2)
    const res = [[7, 6, 9], [8, 4, 6], [10]].map(x => firstTwoMax(...x))
    expect(res).toEqual([7, 8, 10])
  })

  test('test call 1', () => {
    Promise.resolve([1, 2, 3]).then(adapter.call('map', x => 2 * x)).then(res => {
      expect(res).toEqual([2, 4, 6])
    })
  })

  test('test call 2', () => {
    const map = adapter.call.bind(null, 'map');
    Promise.resolve([1, 2, 3]).then(map(x => 2 * x)).then(res => {
      expect(res).toEqual([2, 4, 6])
    })
  })

  test('test collect into', () => {
    const Pall = adapter.collectInto(Promise.all.bind(Promise));
    let p1 = Promise.resolve(1)
    let p2 = Promise.resolve(2)
    let p3 = new Promise(resolve => setTimeout(resolve, 2000, 3))
    Pall(p1, p2, p3).then(res => {
      expect(res).toEqual([1, 2, 3])
    })
  })

  test('test flip', () => {
    let a = { name: 'John Smith' };
    let b = {};
    const mergeFrom = adapter.flip(Object.assign);
    let mergePerson = mergeFrom.bind(null, a);
    const res1 = mergePerson(b); // == b
    b = {};
    const res2 = Object.assign(b, a); // == b

    expect(res1).toEqual(a)
    expect(res2).toEqual(a)
  })

  test('test over', () => {
    const minMax = adapter.over(Math.min, Math.max)
    const result = minMax(1, 2, 3, 4, 5)
    expect(result).toEqual([1, 5])
  })

  test('test over args', () => {
    const square = n => n * n;
    const double = n => n * 2;
    const fn = adapter.overArgs((x, y) => [x, y], [square, double]);
    expect(fn(9, 3)).toEqual([81, 6])
  })
});