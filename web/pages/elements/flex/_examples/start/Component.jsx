import React from 'react'
import { Flex } from '@/src/index.jsx'
import { A, B, C } from '../Tiles.jsx'

const FlexExample = () =>
  /* START */
  <Flex start gap>
    <A/> <B pad="2"/> <C pad="4"/>
  </Flex>
  /* END */

export default FlexExample