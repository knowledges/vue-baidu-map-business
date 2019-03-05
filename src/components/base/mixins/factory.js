export function CreateSize(BMap, options) {
  const { width, height } = options
  return new BMap.Size(width, height)
}

export function CreateLable(BMap, options = {}) {
  console.log(options)
  const {position, Loffset, labelStyle} = options
  const overlay = new BMap.Label(position.title, {
    offset: CreateSize(BMap, Loffset)
  })
  overlay && overlay.setStyle(labelStyle)
  return overlay
}
