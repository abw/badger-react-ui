import Boolean  from './Boolean.jsx'
import Number   from './Number.jsx'
import Text     from './Text.jsx'
import Select   from './Select.jsx'

export const filterComponents = {
  text: Text
}
export const dataTableFilterComponents = {
  default: Text,
  string:  Text,
  text:    Text,
  id:      Number,
  number:  Number,
  integer: Number,
  float:   Number,
  price:   Number,
  pounds:  Number,
  select:  Select,
  boolean: Boolean,
}

export default dataTableFilterComponents