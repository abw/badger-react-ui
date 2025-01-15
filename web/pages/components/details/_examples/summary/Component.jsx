import React from 'react'
import { Details } from '@/src/index'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details
      summary="This is the summary"
    >
      This is the content that is revealed.
    </Details>

    <Details
      border lined
      summary={
        <span>
          Control Panel
          <b className="inverse red mar-l-2 pad-h-4 bdr-4">
            DANGER!
          </b>
        </span>
      }
    >
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample