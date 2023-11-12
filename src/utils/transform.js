import { fail, isString } from '@abw/badger-utils'
import { parseAttrs } from './attrs.js'

export const nullTransform = {
  x:      0,
  y:      0,
  size:   16,
  flipX:  false,
  flipY:  false,
  rotate: 0
}

export const transformFunctions = {
  flip: (transform, v) => {
    if (v.match(/^y$/i)) {
      transform.flipY = ! transform.flipY
    }
    else {
      transform.flipX = ! transform.flipX
    }
  },

  flipx: transform =>
    transform.flipX = ! transform.flipX,

  flipy: transform =>
    transform.flipY = ! transform.flipY,

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
transformFunctions['flop']   = transformFunctions.flipy
transformFunctions['flip-x'] = transformFunctions.flipx
transformFunctions['flip-y'] = transformFunctions.flipy

export function transformData(
  transform,
  target={ ...nullTransform }
) {
  const attrs = isString(transform)
    ? parseAttrs(transform)
    : (transform || { })

  return Object.entries(attrs).reduce(
    (transform, [name, value]) => {
      const lcname = name.toLowerCase()
      const transformer = transformFunctions[lcname]
        || fail(`Invalid transform: ${lcname}`)
      transformer(transform, value)
      return transform
    },
    target
  )
}

