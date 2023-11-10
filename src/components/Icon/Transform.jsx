import { fail, isString } from '@abw/badger-utils'

export const transforms = {
  flipX: transform =>
    transform.flipX = true,

  flipY: transform =>
    transform.flipY = true,

  grow: (transform, n) =>
    transform.size += parseInt(n),

  shrink: (transform, n) =>
    transform.size -= parseInt(n),

  left: (transform, n) =>
    transform.x -= parseInt(n),

  right: (transform, n) =>
    transform.x += parseInt(n),

  up: (transform, n) =>
    transform.y -= parseInt(n),

  down: (transform, n) =>
    transform.y += parseInt(n),

  rotate: (transform, n) =>
    transform.rotate += parseInt(n)
}

export function transformData(transform) {
  const attrs = isString(transform)
    ? parseAttrString(transform)
    : transform

  return Object.entries(attrs).reduce(
    (transform, [name, value]) => {
      const transformer = transforms[name]
        || fail(`Invalid transform: ${name}`)
      transformer(transform, value)
      return transform
    },
    {
      x:      0,
      y:      0,
      size:   16,
      flipX:  false,
      flipY:  false,
      rotate: 0
    }
  )
}

export function parseAttrString(string) {
  return string
    .split(/\s*;\s*/)
    .reduce(
      (attrs, attr) => {
        const [name, value] = attr.split(/\s*:\s*/)
        attrs[name] = value
        return attrs
      },
      { }
    )
}
