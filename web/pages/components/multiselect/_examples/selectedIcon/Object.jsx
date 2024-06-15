import { MultiSelect } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { MultiSelect } from '@abw/badger-react-ui

const ValuesExample = () =>
  <MultiSelect
    options={animals}
    values={['Alan Aardvark', 'Brian Badger']}
    selectedIcon={{
      name: 'thumb',
      color: 'green-50-90--10',
      className: 'border pad-a-2 bdr-2'
    }}
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
]

export default ValuesExample