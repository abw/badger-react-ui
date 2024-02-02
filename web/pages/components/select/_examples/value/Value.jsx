import { Select } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Select } from '@abw/badger-react-ui

const animals = [
  { value: 100, name: 'Alan Aardvark' },
  { value: 101, name: 'Amy Aardvark'  },
  { value: 102, name: 'Anne Aardvark' },
  { value: 110, name: 'Bart Badger'   },
  { value: 111, name: 'Betty Badger'  },
  { value: 112, name: 'Bobby Badger'  },
  { value: 113, name: 'Brenda Badger' },
  { value: 114, name: 'Brian Badger'  },
]

const ValueExample = () =>
  <Select
    options={animals}
    value={112}
  />

export default ValueExample