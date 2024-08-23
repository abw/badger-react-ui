import React from 'react'
import { Range } from '@/src/index.jsx'

const RangeExample = () =>
  /* START */
  <Range
    values={[
      0, 25, 50, 100, 200, 300, 400, 500, 1000
    ]}
    displayValue={
      (value, values) => `£${values[value]}`
    }
    showValues
    showInputs
    selectOptions={{
      selectClass: 'select width-6rem',
    }}
  />
  /* END */

export default RangeExample