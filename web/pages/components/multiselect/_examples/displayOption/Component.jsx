import { MultiSelect } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { MultiSelect } from '@abw/badger-react-ui

const DisplayOptionExample = () => {
  const displayOption = result =>
    <div className="flex space baseline">
      <div>
        {result.name}
      </div>
      <div className="smaller">
        {result.tel}
      </div>
    </div>

  return (
    <MultiSelect
      options={animals}
      displayOption={displayOption}
    />
  )
}

const animals = [
  { name: 'Alan Aardvark', tel: '555-1245', id: 1 },
  { name: 'Amy Aardvark',  tel: '555-2233', id: 2 },
  { name: 'Anne Aardvark', tel: '555-6565', id: 3 },
  { name: 'Bart Badger',   tel: '555-4201', id: 4 },
  { name: 'Betty Badger',  tel: '555-1111', id: 5 },
  { name: 'Bobby Badger',  tel: '555-9876', id: 6 },
  { name: 'Brenda Badger', tel: '555-3443', id: 7 },
  { name: 'Brian Badger',  tel: '555-1337', id: 8 },
]

export default DisplayOptionExample