import React from 'react'
import { Details } from '@/src/index'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details
      summary="Shaded"
      shaded
    >
      This is the content that is revealed.
    </Details>

    <Details
      summary="Shaded and Border"
      border
      shaded
    >
      This is the content that is revealed.
    </Details>

    <Details
      summary="Shaded, Lined and Border"
      border lined
      shaded
    >
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample