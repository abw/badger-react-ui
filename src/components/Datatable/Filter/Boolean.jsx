import React from 'react'
import { Select } from '@/src/index.jsx'
import { FALSE, TRUE } from '@/src/constants.js'

const Boolean = ({
  value,
  setFilter,
  column
}) =>
  <Select
    options={[
      { value: true,  text: column.trueText  ?? TRUE  },
      { value: false, text: column.falseText ?? FALSE },
    ]}
    value={value}
    onSelect={ option => setFilter(option.value) }
  />

export default Boolean