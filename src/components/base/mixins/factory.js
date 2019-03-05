export function CreatePoint(BMap, options = {}) {

}

export function CreateSize(BMap, options) {
  const { width, height } = options
  return new BMap.Size(width, height)
}

export function CreateLable(BMap, options = {}) {
  console.log(options)
  const {Loffset, labelStyle, content} = options
  const overlay = new BMap.Label(content, {
    offset: CreateSize(BMap, Loffset)
  })
  overlay && overlay.setStyle(labelStyle)
  return overlay
}
