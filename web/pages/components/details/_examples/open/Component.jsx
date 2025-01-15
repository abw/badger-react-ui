import React from 'react'
import { Details } from '@/src/index'

const DetailsExample = () =>
  /* START */
  <Details
    summary="This is the summary"
    open
  >
    This is the content that is revealed.
  </Details>
  /* END */

export default DetailsExample