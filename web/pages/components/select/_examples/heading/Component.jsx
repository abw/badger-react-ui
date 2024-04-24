import { Select } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Select } from '@abw/badger-react-ui

const options = [
  { heading: 'Animals' },
  'Aardvark',
  'Badger',
  'Camel',
  { heading: 'Places' },
  'Airport',
  'Bowling Alley',
  'Car Park',
]

const HeadingExample = () =>
  <Select
    options={options}
  />

export default HeadingExample