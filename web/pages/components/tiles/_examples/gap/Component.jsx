import React from 'react'
import { Tiles } from '@/src/index'
import { Cards } from '../Tiles/Component.jsx'

const TilesExample = () =>
  <div className="grid-1 gap-8">
    {/* START */}
    <Tiles gap={2}>
      <Cards/>
    </Tiles>

    <Tiles gap="2 4">
      <Cards/>
    </Tiles>

    <Tiles gap={[4, 2]}>
      <Cards/>
    </Tiles>
    {/* END */}
  </div>

export default TilesExample