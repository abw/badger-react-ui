import React from 'react'
import { Details } from '@/src/index'

const DetailsExample = () =>
  /* START */
  <Details
    summary="Custom Icon on Left"
    iconLeft="caret-right-fill"
  >
    This is the content that is revealed.
  </Details>
  /* END */

export default DetailsExample