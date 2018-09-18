export default function (target, key, descriptor) {
  if (!descriptor) return descriptor;
  const func = descriptor.value;
  descriptor.value = function funcWrapper(...args) {
    return func.call(this, ...args).then(res => res.json())
  };
  return descriptor;
}
