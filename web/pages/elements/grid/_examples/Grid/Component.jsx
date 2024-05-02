import { Div, Grid } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Div, Grid } from '@abw/badger-react-ui

const GridExample = () =>
  <Grid gap="8">
    <Grid gap>
      <A/> <B/> <C/>
    </Grid>
    <Grid cols={3} gap={2} border pad="2">
      <A/> <B/> <C/>
    </Grid>
    <Grid cols={4} gap={2} tablet={3} mobile={2} border pad="2">
      <A/> <B/> <C/> <D/>
    </Grid>
  </Grid>

const Tile = props =>
  <Div inverse  pad="1 2" {...props}/>

const A = props =>
  <Tile indigo content="A" {...props}/>

const B = props =>
  <Tile violet content="B" {...props}/>

const C = props =>
  <Tile purple content="C" {...props}/>

const D = props =>
  <Tile pink content="D" {...props}/>

export default GridExample