export function CreatePoint(BMap, options = {}) {
  const {lng, lat} = options
  return new BMap.Point(lng, lat)
}

export function CreateSize(BMap, options = {}) {
  const { width, height } = options
  return new BMap.Size(width, height)
}

export function CreateLable(BMap, options = {}) {
  const {loffset, labelStyle, content} = options
  const overlay = new BMap.Label(content, {
    offset: CreateSize(BMap, loffset)
  })
  overlay && overlay.setStyle(labelStyle)
  return overlay
}
