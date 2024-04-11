import React from 'react'
import { Tiles } from '@/src/index.jsx'
import { Cards } from '../Tiles/Component.jsx'

const TilesExample = () =>
  /* START */
  <Tiles gap={2} minWidth="50px">
    <Cards/>
  </Tiles>
  /* END */

export default TilesExample