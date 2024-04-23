import { Div, Flex } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Div, Flex } from '@abw/badger-react-ui

const FlexExample = () =>
  <div className="grid-1 gap-6">
    <Flex gap>
      <A/> <B/> <C/>
    </Flex>
    <Flex space border pad="2">
      <A/> <B/> <C/>
    </Flex>
    <Flex space middle border pad="2">
      <A/> <B size="large"/> <C size="larger"/>
    </Flex>
  </div>

const Tile = props =>
  <Div inverse  pad="1 2" {...props}/>

const A = props =>
  <Tile indigo content="A" {...props}/>

const B = props =>
  <Tile violet content="B" {...props}/>

const C = props =>
  <Tile purple content="C" {...props}/>

export default FlexExample