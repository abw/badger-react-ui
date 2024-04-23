import React from 'react'
import { Div } from '@/src/index.jsx'

const ContentExample = () =>
  /* START */
  <div className="grid-1 gap-2">
    <Div border pad="1 2">
      Hello
    </Div>
    <Div
      border
      pad="1 2"
      content="World"
    />
  </div>
  /* END */

export default ContentExample