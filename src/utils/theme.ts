import { fail } from '@abw/badger-utils'
import { PropsObject } from '../types'

export type ThemedVariantProps = {
  [key: string]: PropsObject
}
export type ThemedProps = {
  [key: string]: ThemedVariantProps
}


// props are the component props
// themes are theme variants
// e.g. {
//  variant: { a: {...}, b: {...}, c: {...} }
//  action:  { add: { ... }, edit: { ... } }
//}

export const themedProps = (props: PropsObject={}, themes: ThemedProps={}) =>
  Object.entries(themes).reduce(
    (props, [key, options]) => {
      // look for a property matching the theme key, e.g
      const value = props[key] as string
      if (! value) {
        return props
      }
      const values = options[value] || fail(`Invalid themedProps() value for ${key}: ${value}`)
      const newValues = { ...values, ...props }
      delete newValues[key]
      return newValues
    },
    props
  )

