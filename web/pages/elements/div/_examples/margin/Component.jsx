import React from 'react'
import { Div } from '@/src/index'

const Example = () =>
  /* START */
  <div className="border bgc-80 bgc-20">
    <Div margin="2" inverse blue pad>
      Hello
    </Div>
    <Div margin="2 4" inverse red pad>
      World
    </Div>
  </div>
  /* END */

export default Example