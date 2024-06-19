import React from 'react'
import { Select } from '@/src/index.jsx'

const tap = [
  { id: 'nigel', name: 'Nigel Tufnel' },
  { id: 'david', name: 'David St. Hubbins' },
  { id: 'derek', name: 'Derek Smalls' },
  { id: 'viv',   name: 'Viv Savage' },
  { id: 'mick',  name: 'Mick Shrimpton', disabled: true },
]

const SelectDisabled = () =>
  <>
    <Select
      search
      options={tap}
    />
    <div className="checkerboard" style={{ height: '250px', marginTop: 0 }}>
    </div>
  </>

export default SelectDisabled