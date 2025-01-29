import { FALSE, TRUE } from '@/src/constants'
import { formatNumber, capitalize, currency, hasValue } from '@abw/badger-utils'
import { DataTableCellDisplayFn, DataTableCellDisplayFnProps } from './types'
import { coerceBoolean } from '@/src/utils'

export const displayText = (
  { value }: DataTableCellDisplayFnProps<string>
) =>
  hasValue(value) ? value : ''

export const displayNumber = (
  { value }: DataTableCellDisplayFnProps<number>
) =>
  hasValue(value) ? formatNumber(value) : ''

export const displayCurrency = (
  { value }: DataTableCellDisplayFnProps<number>
) =>
  hasValue(value) ? currency(value) : ''

export const displayTitle = (
  { value }: DataTableCellDisplayFnProps<string>
) =>
  hasValue(value) ? capitalize(value) : ''

export const displayBoolean = (
  { value, column }: DataTableCellDisplayFnProps<unknown>
) =>
  hasValue(value)
    ? coerceBoolean(value)
      ? (column.trueText  ?? TRUE)
      : (column.falseText ?? FALSE)
    : ''

export const displayTypes: Record<string, DataTableCellDisplayFn> = {
  default:    displayText,
  text:       displayText,
  id:         displayText,
  number:     displayNumber,
  price:      displayCurrency,
  currency:   displayCurrency,
  boolean:    displayBoolean,
  title:      displayTitle,
}

export default displayTypes
