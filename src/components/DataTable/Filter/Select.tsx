import { Select, SelectOption } from '@/src/index'
import { isObject, doNothing } from '@abw/badger-utils'
import { DataTableFilterInputProps } from '../types'

const DataTableFilterSelect = ({
  value,
  setFilter,
  column,
  placeholder
}: DataTableFilterInputProps) =>
  <Select
    value={value as SelectOption}
    onUpdate={doNothing}
    // @ts-ignore-error.  <sigh>
    options={column.selectOptions||[]}
    // @ts-ignore-error.  <sign again>
    onSelect={
      (option: SelectOption) => setFilter(
        column.selectValue
          ? column.selectValue(option)
          : isObject(option)
            ? option.value
            : option
      )
    }
    placeholder={placeholder}
    wide
  />

export default DataTableFilterSelect