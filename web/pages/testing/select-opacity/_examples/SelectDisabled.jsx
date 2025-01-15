import React from 'react'
import { Select, DropdownMenu } from '@/src/index'

const tap = [
  { id: 'nigel', text: 'Nigel Tufnel' },
  { id: 'david', text: 'David St. Hubbins' },
  { id: 'derek', text: 'Derek Smalls' },
  { id: 'viv',   text: 'Viv Savage' },
  { id: 'mick',  text: 'Mick Shrimpton', disabled: true },
]

const SelectDisabled = () =>
  <>
    <div className="grid-2 gap-2">
      <Select
        search
        options={tap}
      />
      <DropdownMenu
        triggerClass="button"
        triggerColor="brand"
        text="Dropdown Menu"
        options={tap}
      />
    </div>
    <div className="checkerboard" style={{ height: '250px', marginTop: 0 }}>
    </div>
  </>

export default SelectDisabled