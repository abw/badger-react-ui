import React from 'react'
import { Div } from '@/src/index'

export const Tile = props =>
  <Div inverse pad="1 2" {...props}/>

export const A = props =>
  <Tile indigo content="A" {...props}/>

export const B = props =>
  <Tile violet content="B" {...props}/>

export const C = props =>
  <Tile purple content="C" {...props}/>

