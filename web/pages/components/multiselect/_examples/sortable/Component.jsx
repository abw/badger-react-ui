import { MultiSelect } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { MultiSelect } from '@abw/badger-react-ui

const OptionsExample = () =>
  <MultiSelect
    options={animals}
    values={[ 'Derek Donkey', 'Brenda Badger', 'Alan Aardvark' ]}
    sortable
    debug
  />

const animals = [
  'Alan Aardvark',
  'Amy Aardvark',
  'Anne Aardvark',
  'Bart Badger',
  'Betty Badger',
  'Bobby Badger',
  'Brenda Badger',
  'Brian Badger',
  'Colin Camel',
  'Derek Donkey',
]

export default OptionsExample