import { FALSE, TRUE } from '@/src/constants'
import { coerceBoolean } from './Utils/Filter'
import { formatNumber, capitalize, currency, hasValue } from '@abw/badger-utils'
import { DataTableCellDisplayFn, DataTableCellDisplayFnProps } from './types'

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

/*
export const displayBoolean = Themed(
  ({value,
    trueIcon='check-circle',
    trueColor='green',
    trueText='Yes',
    falseIcon='times-circle',
    falseColor='red',
    falseText='No',
    booleanClass='small wide outline'
  }) => (
    value
      ? <Label iconLeft={trueIcon}  color={trueColor}  text={trueText}  className={booleanClass}/>
      : <Label iconLeft={falseIcon} color={falseColor} text={falseText} className={booleanClass}/>
  ),
  'DataTable'
)
*/

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
