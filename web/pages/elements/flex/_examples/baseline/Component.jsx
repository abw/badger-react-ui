import React from 'react'
import { Flex } from '@/src/index'
import { A, B, C } from '../Tiles.jsx'

const FlexExample = () =>
  /* START */
  <Flex baseline gap>
    <A/> <B large/> <C larger/>
  </Flex>
  /* END */

export default FlexExample