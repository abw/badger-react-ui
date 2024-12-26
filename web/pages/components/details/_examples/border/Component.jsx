import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details
      summary="Bordered"
      border
    >
      This is the content that is revealed.
    </Details>

    <Details
      summary="Bordered and Lined"
      lined
      border
    >
      This is the content that is revealed.
    </Details>

    <Details
      summary="Wide Border"
      lined
      border={3}
    >
      This is the content that is revealed.
      <Details
        summary="Inner Details"
        lined border
        content="Inner Content"
      />
    </Details>
    {/* END */}
  </div>

export default DetailsExample