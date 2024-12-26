import React from 'react'
import { isObject, isString, isNumber } from '@abw/badger-utils'
import { WithIcons } from '../index.jsx'

export const defaultRenderer = name => {
  const fallback = `HINT: define ${name}() to render this value`
  return v =>
    (isString(v) || isNumber(v))
      ? v
      : isObject(v)
        ? (v.text ?? v.label ?? v.name ?? v.heading ?? fallback)
        : fallback
}

export const withIconsRenderer = option =>
  (isString(option) || isNumber(option))
    ? option
    : <WithIcons {...option}/>
