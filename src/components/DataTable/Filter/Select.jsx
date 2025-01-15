import React from 'react'
import { Select } from '@/src/index'
import { isObject } from '@abw/badger-utils'
import { doNothing } from '@abw/badger-utils'


const SelectFilter = ({
  value,
  setFilter,
  column,
  placeholder
}) =>
  <Select
    options={column.selectOptions||[]}
    value={value}
    onUpdate={doNothing}
    onSelect={
      option => setFilter(
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