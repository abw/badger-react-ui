import { Select, Icon } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import { Search, Icon } from '@abw/badger-react-ui

const addresses = [
  {
    id:       10,
    line1:    '10 St. Hubbins Road',
    town:     'Squatney',
    postcode: 'SQ1 10T',
  },
  {
    id:       11,
    line1:    '11 Tufnel Way',
    town:     'Squatney',
    postcode: 'SQ1 11T',
  },
  {
    id:       12,
    line1:    '12 Smalls Avenue',
    town:     'Squatney',
    postcode: 'SQ1 12T',
  }
]

const displayAddress = address =>
  <div className="flex gap-2 baseline">
    <Icon name="star" color="yellow-50"/>
    <div>
      <div>{address.line1}</div>
      <div>{address.town}</div>
      <div className="weight-600">{address.postcode}</div>
    </div>
  </div>

const SelectExample = () =>
  <Select
    options={addresses}
    displayOption={displayAddress}
    displayValue={displayAddress}
  />

export default SelectExample