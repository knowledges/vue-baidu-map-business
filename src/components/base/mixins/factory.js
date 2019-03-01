export function CreateSize(BMap, options) {
  const { width, height } = options
  return new BMap.Size(width, height)
}
