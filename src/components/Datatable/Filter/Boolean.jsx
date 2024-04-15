import React from 'react'
import { Select } from '@/src/index.jsx'

const Boolean = ({
  value,
  setFilter,
}) =>
  <Select
    options={[
      { value: true, text: 'True' },
      { value: false, text: 'False' },
    ]}
    value={value}
    onSelect={ option => setFilter(option.value) }
  />

export default Boolean