import React from 'react'
import { Flex } from '@/src/index.jsx'
import { A, B, C } from '../Tiles.jsx'

const FlexExample = () =>
  /* START */
  <Flex right gap>
    <A/> <B/> <C/>
  </Flex>
  /* END */

export default FlexExample