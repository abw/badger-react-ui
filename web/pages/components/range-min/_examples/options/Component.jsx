import React from 'react'
import { RangeMin } from '@/src/index'

const RangeExample = () =>
  /* START */
  <RangeMin
    options={[
      'Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo',
    ]}
    showValues
    showInput
  />
  /* END */

export default RangeExample