import React from 'react'
import { Tiles } from '@/src/index.jsx'
import { Cards } from '../Tiles/Component.jsx'

const TilesExample = () =>
  /* START */
  <div className="grid-1 gap-8">
    <Tiles gap={2}>
      <Cards/>
    </Tiles>
    <Tiles gap="2 4">
      <Cards/>
    </Tiles>
    <Tiles gap={[4, 2]}>
      <Cards/>
    </Tiles>
  </div>
  /* END */

export default TilesExample