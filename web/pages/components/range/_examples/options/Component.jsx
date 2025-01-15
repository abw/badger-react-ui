import React from 'react'
import { Range } from '@/src/index'

const RangeExample = () =>
  /* START */
  <Range
    options={[
      'A', 'B', 'C', 'D', 'E', 'F', 'G',
      'H', 'I', 'J', 'K', 'L', 'M', 'N',
      'O', 'P', 'Q', 'R', 'S', 'T', 'U',
      'V', 'W', 'X', 'Y', 'Z'
    ]}
    showValues showTicks showScale
    tickStep={5}
  />
  /* END */

export default RangeExample