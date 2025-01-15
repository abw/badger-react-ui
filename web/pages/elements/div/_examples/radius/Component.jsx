import React from 'react'
import { Div } from '@/src/index'

const Example = () =>
  /* START */
  <div className="grid-1 gap-2">
    <Div pad="2" border radius>
      Hello
    </Div>
    <Div pad="2" border radius={2}>
      World
    </Div>
  </div>
  /* END */

export default Example