import { isObject, isString, isNumber } from '@abw/badger-utils'

export const defaultRenderer = name => {
  const fallback = `HINT: define ${name}() to render this value`
  return v =>
    (isString(v) || isNumber(v))
      ? v
      : isObject(v)
        ? (v.text ?? v.label ?? v.name ?? fallback)
        : fallback
}

