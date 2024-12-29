import { isObject, isString, isNumber } from '@abw/badger-utils'
import WithIcons from '@/src/components/Icon/WithIcons'
import { PropsObject } from '../types.js'

export type RenderableValue = string | number | boolean

export type ObjectWithRenderable = {
  text?:    RenderableValue,
  label?:   RenderableValue,
  name?:    RenderableValue,
  heading?: RenderableValue
}

export const defaultRenderer = (name: string) => {
  const fallback = `HINT: define ${name}() to render this value`
  return (v: unknown) =>
    (isString(v) || isNumber(v))
      ? v
      : isObject(v)
        ? (
            (v as ObjectWithRenderable).text ??
            (v as ObjectWithRenderable).label ??
            (v as ObjectWithRenderable).name ??
            (v as ObjectWithRenderable).heading ??
            fallback
          )
        : fallback
}

export const withIconsRenderer = (option: string | number | PropsObject) =>
  (isString(option) || isNumber(option))
    ? option
    : <WithIcons {...(option as PropsObject)}/>
