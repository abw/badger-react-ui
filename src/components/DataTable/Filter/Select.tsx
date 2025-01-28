import { Select, SelectOption } from '@/src/index'
import { isObject, doNothing } from '@abw/badger-utils'
import { DataTableFilterProps } from '../types'

const SelectFilter = ({
  value,
  setFilter,
  column,
  placeholder
}: DataTableFilterProps) =>
  <Select
    options={column.selectOptions||[]}
    value={value}
    onUpdate={doNothing}
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

export default SelectFilter