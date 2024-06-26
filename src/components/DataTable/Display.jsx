import { formatNumber, capitalize, currency, hasValue } from '@abw/badger-utils'
import { coerceBoolean } from './Utils/Filter.js'
import { FALSE, TRUE } from '@/src/constants.js'

export const displayText = ({value}) =>
  hasValue(value) ? value : ''

export const displayNumber = ({value}) =>
  hasValue(value) ? formatNumber(value) : ''

export const displayCurrency = ({value}) =>
  hasValue(value) ? currency(value) : ''

export const displayTitle = ({value}) =>
  hasValue(value) ? capitalize(value) : ''

export const displayBoolean = ({value, column}) =>
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

export const displayTypes = {
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
