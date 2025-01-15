import React from 'react'
import { Div } from '@/src/index'

const Example = () =>
  /* START */
  <div className="grid-1 gap-2">
    <Div color="red-50">
      Hello
    </Div>
    <Div pad color="red-30-80">
      World
    </Div>
    <Div pad color="red-30-80-70-30">
      Light and Dark Colors
    </Div>
  </div>
  /* END */

export default Example