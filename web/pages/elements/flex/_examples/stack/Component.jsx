import React from 'react'
import { Flex } from '@/src/index'
import { A, B, C } from '../Tiles.jsx'

const FlexExample = () =>
  <div className="grid-1 gap-8">
    {/* START */}
    <Flex gap stack="desktop">
      <A/> <B/> <C/>
    </Flex>
    <Flex gap stack="laptop">
      <A/> <B/> <C/>
    </Flex>
    <Flex gap stack="tablet">
      <A/> <B/> <C/>
    </Flex>
    {/* END */}
  </div>

export default FlexExample