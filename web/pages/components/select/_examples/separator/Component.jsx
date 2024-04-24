import { Select } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Select } from '@abw/badger-react-ui

const options = [
  'Aardvark',
  'Badger',
  'Camel',
  { separator: true },
  'Airport',
  'Bowling Alley',
  'Car Park'
]

const SeparatorExample = () =>
  <Select
    options={options}
  />

export default SeparatorExample