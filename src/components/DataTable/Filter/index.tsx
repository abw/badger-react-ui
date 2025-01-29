import Boolean  from './Boolean'
import Number   from './Number'
import Text     from './Text'
import Select   from './Select'
import { DataTableFilterInputComponent } from '../types'

export const dataTableFilterComponents: Record<string, DataTableFilterInputComponent> = {
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