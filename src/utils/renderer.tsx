import { isObject, isSimple } from '@abw/badger-utils'
import WithIcons from '@/src/components/Icon/WithIcons'
import { PropsObject } from '../types.js'

export type RenderableSimpleValue = string | number | boolean

export type ObjectWithRenderable = {
  text?:    RenderableSimpleValue,
  label?:   RenderableSimpleValue,
  name?:    RenderableSimpleValue,
  heading?: RenderableSimpleValue
}
export type RenderableValue = RenderableSimpleValue | ObjectWithRenderable
export type WithIconsRenderer = (option: RenderableValue) => string | number | JSX.Element

export const defaultRenderer = (name: RenderableValue) => {
  const fallback = `HINT: define ${name}() to render this value`
  return (v: RenderableValue): string => String(
    (isSimple(v))
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
  )
}

export const withIconsRenderer = (option: string | number | boolean | PropsObject) =>
  isSimple(option)
    ? option
    : <WithIcons {...(option as PropsObject)}/>

// (isString(option) || isNumber(option) || isBoolean(option))
//  ? option
//  : <WithIcons {...(option as PropsObject)}/>
