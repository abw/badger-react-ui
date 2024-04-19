import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  /* START */
  <Details
    border lined
    summary="Wide Summary"
    iconRight="cog"
    iconRightRotate={360}
    wideSummary
  >
    This is the content that is revealed.
  </Details>
  /* END */

export default DetailsExample