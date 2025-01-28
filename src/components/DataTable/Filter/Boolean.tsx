import React from 'react'
import { Select } from '@/src/index'
import { FALSE, TRUE } from '@/src/constants'
import { doNothing } from '@abw/badger-utils'

const Boolean = ({
  value,
  setFilter,
  column,
  placeholder
}) =>
  <Select
    options={[
      { value: true,  text: column.trueText  ?? TRUE  },
      { value: false, text: column.falseText ?? FALSE },
    ]}
    wide
    value={value}
    onUpdate={doNothing}
    onSelect={ option => setFilter(option.value) }
    placeholder={placeholder}
  />

export default Boolean