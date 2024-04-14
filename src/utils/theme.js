import { fail } from '@abw/badger-utils'
// props are the component props
// themes are theme variants
// e.g. {
//  variant: { a: {...}, b: {...}, c: {...} }
//  action:  { add: { ... }, edit: { ... } }
//}


export const themedProps = (props={}, themes={}) =>
  Object.entries(themes).reduce(
    (props, [key, options]) => {
      // look for a property matching the theme key, e.g
      const value = props[key] // || Object.keys(props).find( prop => props[prop] )
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

