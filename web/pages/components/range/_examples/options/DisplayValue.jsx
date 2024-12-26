import React from 'react'
import { Range } from '@/src/index.jsx'

const RangeExample = () =>
  /* START */
  <Range
    options={[
      0, 25, 50, 100, 200, 300, 400, 500, 1000
    ]}
    displayValue={
      (value, options) => `£${options[value]}`
    }
    showValues
  />
  /* END */

export default RangeExample