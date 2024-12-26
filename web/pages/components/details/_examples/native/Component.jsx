import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details
      summary="Native Details"
      border lined radius={1}
      native
    >
      You don&apos;t do heavy metal in dubly
    </Details>

    <Details
      summary="Wide Overflow"
      border lined radius={1}
      native
    >
      <div className="green inverse pad-2 bdr-1 mar-b-2">
        This is OK
      </div>
      <div className="red inverse pad-2 bdr-1 wide">
        This is too wide
      </div>
    </Details>
    {/* END */}
  </div>

export default DetailsExample