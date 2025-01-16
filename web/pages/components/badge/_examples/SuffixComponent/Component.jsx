import React from 'react'
import { Badge } from '@/src/index'

const Component = () =>
/* START */
  <Badge
    text="Custom Badge Suffix"
    suffix="After"
    Suffix={
      ({ suffix, suffixClass='suffix' }) =>
        <div className={`bold ${suffixClass}`}>
          {suffix.toUpperCase()}
        </div>
    }
  />
/* END */

export default Component
