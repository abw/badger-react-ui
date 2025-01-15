import React from 'react'
import { Div } from '@/src/index'

const Example = () =>
  /* START */
  <div className="grid-1 gap-2">
    <Div border>
      Hello
    </Div>
    <Div border={2}>
      World
    </Div>
  </div>
  /* END */

export default Example