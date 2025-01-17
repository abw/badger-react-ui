import React from 'react'
import { Details } from '@/src/index'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details
      summary="Small"
      size="small"
      border lined
    >
      This is small
    </Details>

    <Details
      summary="Large"
      size="large"
      border lined
    >
      This is large
    </Details>
    {/* END */}
  </div>

export default DetailsExample