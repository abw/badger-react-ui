import { Select } from '@/src/index'
import { FALSE, TRUE } from '@/src/constants'
import { doNothing } from '@abw/badger-utils'
import { DataTableFilterInputProps, DataTableFilterValue } from '../types'

const DataTableFilterBoolean = ({
  value,
  setFilter,
  column,
  placeholder
}: DataTableFilterInputProps ) =>
  <Select
    options={[
      { value: true,  text: column.trueText  ?? TRUE  },
      { value: false, text: column.falseText ?? FALSE },
    ]}
    wide
    onUpdate={doNothing}
    placeholder={placeholder}
    // @ts-expect-error. I love typescript, but I really hate it too
    value={value}
    // @ts-expect-error. I can't imagine I'll ever get back the time wasted
    onSelect={
      (option: { value: DataTableFilterValue } ) => setFilter(option.value)
    }
  />

export default DataTableFilterBoolean