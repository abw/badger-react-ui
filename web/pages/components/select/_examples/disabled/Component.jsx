import React from 'react'
import { Select } from '@/src/index'

const people = [
  'Amy',
  'Brian',
  'Catherine'
]

const DisabledExample = () =>
  /* START */
  <Select
    search
    value="Catherine"
    options={people}
    disabled
  />
  /* END */

export default DisabledExample