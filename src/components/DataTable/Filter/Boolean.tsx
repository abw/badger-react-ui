import { Select } from '@/src/index'
import { FALSE, TRUE } from '@/src/constants'
import { doNothing } from '@abw/badger-utils'
import { DataTableFilterProps, DataTableFilterValue } from '../types'

const Boolean = ({
  value,
  setFilter,
  column,
  placeholder
}: DataTableFilterProps ) =>
  <Select
    options={[
      { value: true,  text: column.trueText  ?? TRUE  },
      { value: false, text: column.falseText ?? FALSE },
    ]}
    wide
    value={value}
    onUpdate={doNothing}
    onSelect={
      (option: { value: DataTableFilterValue } ) => setFilter(option.value)
    }
    placeholder={placeholder}
  />

export default Boolean