import React from 'react'
import { RangeMin } from '@/src/index'

const RangeExample = () =>
  /* START */
  <RangeMin
    showValue
    displayValue={value => `${value}%`}
  />
  /* END */

export default RangeExample