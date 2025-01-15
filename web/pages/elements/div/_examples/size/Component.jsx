import React from 'react'
import { Div } from '@/src/index'

const Example = () =>
  /* START */
  <div className="grid-1 gap-2">
    <Div inverse red pad size="smaller">
      Hello
    </Div>
    <Div inverse green pad larger>
      World
    </Div>
  </div>
  /* END */

export default Example