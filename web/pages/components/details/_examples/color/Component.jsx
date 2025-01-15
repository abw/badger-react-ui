import React from 'react'
import { Details } from '@/src/index'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details
      summary="Blue Border"
      border lined
      color="blue"
    >
      This is the content that is revealed.
    </Details>

    <Details
      summary="Blue Shaded"
      shaded lined border
      color="blue"
    >
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample