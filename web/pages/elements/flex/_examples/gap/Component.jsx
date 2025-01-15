import React from 'react'
import { Flex } from '@/src/index'
import { A, B, C } from '../Tiles.jsx'

const FlexExample = () =>
  <div className="grid-1 gap-8">
    {/* START */}
    <Flex gap>
      <A/> <B/> <C/>
    </Flex>
    <Flex gap={2}>
      <A/> <B/> <C/>
    </Flex>
    <Flex gap={4}>
      <A/> <B/> <C/>
    </Flex>
    {/* END */}
  </div>

export default FlexExample