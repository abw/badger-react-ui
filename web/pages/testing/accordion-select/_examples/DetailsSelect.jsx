import React from 'react'
import { Details, Select } from '@/src/index.jsx'

const names = [
  'Alan Aardvark',
  'Amy Aardvark' ,
  'Anne Aardvark',
  'Bart Badger'  ,
  'Betty Badger' ,
  'Bobby Badger' ,
  'Brenda Badger',
  'Brian Badger' ,
  'Ignored Iguana',
]

const DetailsSelect = () =>
  <Details
    summary="Open Me!"
    border lined
    radius={2}
    shadow={2}
  >
    <SelectContent/>
  </Details>


const SelectContent = () =>
  <Select
    search
    options={names}
    onLoad={that => that.open()}
  />

export default DetailsSelect