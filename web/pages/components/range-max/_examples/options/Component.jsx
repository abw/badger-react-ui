import React from 'react'
import { RangeMax } from '@/src/index.jsx'

const RangeExample = () =>
  /* START */
  <RangeMax
    options={[
      'Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo',
    ]}
    showValues
    showInput
  />
  /* END */

export default RangeExample