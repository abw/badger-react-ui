import { hasValue, isBoolean, isNumber, isString, noValue } from '@abw/badger-utils'

export const isSimple = value =>
  isString(value) || isNumber(value) || isBoolean(value)

export const validOption = option =>
  isSimple(option) ||
    (! option.separator && ! option.heading && ! option.disabled)

export const optionValue = option =>
  isSimple(option)
    ? option
    : (option.value ?? option.id)

export const findOption = (options, value, optVal=optionValue) => {
  if (noValue(value)) {
    return [ ]
  }
  const index  = options.findIndex(
    option => value === optVal(option)
  )
  return index >= 0
    ? [options[index], index]
    : [ ]
}

export const searchOptions = (search, options) => {
  const lcwords = search.toLowerCase().split(/\s+/)
  return options.filter(
    option => {
      if (option.fixed) {
        return true
      }
      const cmp = option.search ?? option.text ?? option.label ?? option.name ?? option.value
      if (hasValue(cmp)) {
        const lccmp = cmp.toString().toLowerCase()
        return lcwords.every(
          word => lccmp.indexOf(word) >= 0
        )
      }
      return false
    }
  )
}
