import { MultiSelect } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { MultiSelect } from '@abw/badger-react-ui

const DisplaySelectionExample = () => {
  const displaySelection = result =>
    <div className="flex gap-1 baseline">
      <div className="smaller fgc-50">
        #{result.id}
      </div>
      <div>
        {result.name}
      </div>
    </div>

  return (
    <MultiSelect
      options={animals}
      displaySelection={displaySelection}
    />
  )
}

const animals = [
  { name: 'Alan Aardvark', id: 1 },
  { name: 'Amy Aardvark',  id: 2 },
  { name: 'Anne Aardvark', id: 3 },
  { name: 'Bart Badger',   id: 4 },
  { name: 'Betty Badger',  id: 5 },
  { name: 'Bobby Badger',  id: 6 },
  { name: 'Brenda Badger', id: 7 },
  { name: 'Brian Badger',  id: 8 },
]

export default DisplaySelectionExample