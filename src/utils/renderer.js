import { isObject, isString } from '@abw/badger-utils'

export const defaultRenderer = name => {
  const fallback = `HINT: define ${name}() to render this value`
  return v =>
    isString(v)
      ? v
      : isObject(v)
        ? (v.text ?? v.label ?? v.name ?? fallback)
        : fallback
}

