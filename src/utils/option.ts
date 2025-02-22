import { hasValue, isObject, isSimple, noValue } from '@abw/badger-utils'
// import { PropsObject } from '../types'
import { ObjectWithRenderable, RenderableSimpleValue } from './renderer'

// export type SelectValue = string | number | boolean | object
export type SelectValue = string | number | boolean
export type SelectOptionObject = ObjectWithRenderable & {
  separator?: boolean
  heading?: string
  disabled?: boolean
  search?: string
  id?: string | number
  fixed?: boolean
  value?: SelectValue
  className?: string
  indent?: string | number
}

// export type SelectOption = SelectOptionObject | string | number | boolean | undefined | null
export type SelectOption = SelectOptionObject | RenderableSimpleValue
export type SelectOptions = SelectOption[]
export type IsValidOption = (option: SelectOption) => boolean
export type OnSelect = (value: SelectOption) => void
export type FindOption = (
  options: SelectOptions,
  value?: SelectOption,
  optVal?: (option: SelectOption) => SelectValue | undefined
) => [SelectOption, number] | [ ]
export type SearchOptions = (
  search: string,
  options: SelectOptions
) => SelectOption[]

export const validOption = (option: SelectOption) =>
  isSimple(option) ||
    (
      ! (option as SelectOptionObject).separator &&
      ! (option as SelectOptionObject).heading &&
      ! (option as SelectOptionObject).disabled
    )

export const optionValue = (option: SelectOption) =>
  isSimple(option)
    ? option
    : ((option as SelectOptionObject).value ?? (option as SelectOptionObject).id)

export const findOption: FindOption = (
  options,
  value,
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
    const object: SelectOptionObject = option as SelectOptionObject
    return object.search ?? object.text ?? object.label ?? object.name ?? object.value
  }
  else {
    return option as string | number
  }
}

export const searchOptions: SearchOptions = (
  search,
  options
) => {
  const lcwords = search.toLowerCase().split(/\s+/)
  return options.filter(
    option => {
      const object = isObject(option)
      const cmp = searchOptionText(option) as string | number
      if (object && (option as SelectOptionObject).fixed) {
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

export const selectOptionAsObject = (option: SelectOption): SelectOptionObject =>
  isObject(option)
    ? option
    : { text: option }