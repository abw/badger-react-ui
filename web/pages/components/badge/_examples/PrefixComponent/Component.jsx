import React from 'react'
import { Badge } from '@/src/index'

const Component = () =>
/* START */
  <Badge
    text="Custom Badge Prefix"
    prefix="Before"
    Prefix={
      ({ prefix, prefixClass='prefix' }) =>
        <div className={`bold ${prefixClass}`}>
          {prefix.toUpperCase()}
        </div>
    }
  />
/* END */

export default Component
