import { Select } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import { Select } from '@abw/badger-react-ui

const options = [
  { heading: 'Animals' },
  { heading: 'Mammals',     indent: 1 },
  { name:    'Aardvark',    indent: 2 },
  { name:    'Badger',      indent: 2 },
  { name:    'Camel',       indent: 2 },
  { heading: 'Reptiles',    indent: 1 },
  { name:    'Alligator',   indent: 2 },
  { name:    'Boa',         indent: 2 },
  { name:    'Coral Snake', indent: 2 },
]

const IndentExample = () =>
  <Select
    options={options}
  />

export default IndentExample