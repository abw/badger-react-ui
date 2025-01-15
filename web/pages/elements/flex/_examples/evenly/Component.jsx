import React from 'react'
import { Flex } from '@/src/index'
import { A, B, C } from '../Tiles.jsx'

const FlexExample = () =>
  /* START */
  <Flex evenly>
    <A/> <B/> <C/>
  </Flex>
  /* END */

export default FlexExample