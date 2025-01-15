import React from 'react'
import { Grid } from '@/src/index'
import { A, B, C } from '../Tiles.jsx'

const GridExample = () =>
  /* START */
  <Grid cols="3" gap middle>
    <A/> <B pad="2"/> <C pad="4"/>
  </Grid>
  /* END */

export default GridExample