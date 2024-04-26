import Boolean  from './Boolean.jsx'
import Number   from './Number.jsx'
import Text     from './Text.jsx'

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
  select:  Text,
  boolean: Boolean,
}

export default dataTableFilterComponents