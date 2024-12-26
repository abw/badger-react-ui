import React from 'react'
import { Accordion, Select } from '@/src/index.jsx'

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

const AccordionSelect = () =>
  <Accordion
    border lined
    radius={2}
    shadow={2}
    items={[
      { summary: 'Item One',   content: <SelectContent/> },
      { summary: 'Item Two',   content: 'This is item two' },
      { summary: 'Item Three', content: 'This is item three' },
    ]}
  />


const SelectContent = () =>
  <Select
    search
    options={names}
  />

export default AccordionSelect