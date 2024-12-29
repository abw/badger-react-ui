import { hasValue, isObject, isSimple, noValue } from '@abw/badger-utils'
import { PropsObject } from '../types'

export interface SelectOptionProps extends PropsObject {
  separator?: boolean,
  heading?: string,
  disable?: boolean,
  //search?: string,
  //text?: string,
  //label?: string,
  //name?: string,
  //value?: unknown
}
export type SelectOption = SelectOptionProps | string | number | boolean
export type SelectOptions = SelectOption[]

export const validOption = (option: SelectOption) =>
  isSimple(option) ||
    (
      ! (option as SelectOptionProps).separator &&
      ! (option as SelectOptionProps).heading &&
      ! (option as SelectOptionProps).disabled
    )

export const optionValue = (option: SelectOption) =>
  isSimple(option)
    ? option
    : ((option as SelectOptionProps).value ?? (option as SelectOptionProps).id)

export const findOption = (
  options: SelectOptions,
  value: SelectOption,
  optVal=optionValue
) => {
  if (noValue(value)) {
    return [ ]
  }
  const valueOrId = optVal(value)
  const index  = options.findIndex(
    option => valueOrId === optVal(option)
  )
  return index >= 0
    ? [options[index], index]
    : [ ]
}

export const searchOptionText = (option: SelectOption) => {
  if (isObject(option)) {
    const object: SelectOptionProps = option as SelectOptionProps
    return object.search ?? object.text ?? object.label ?? object.name ?? object.value
  }
  else {
    return option as string | number
  }
}

export const searchOptions = (
  search: string,
  options: SelectOptions
) => {
  const lcwords = search.toLowerCase().split(/\s+/)
  return options.filter(
    option => {
      const object = isObject(option)
      const cmp = searchOptionText(option) as string | number
      if (object && (option as SelectOptionProps).fixed) {
        // allow options to always be shown
        return true
      }
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
