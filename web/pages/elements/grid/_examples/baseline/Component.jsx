import React from 'react'
import { Grid } from '@/src/index.jsx'
import { A, B, C } from '../Tiles.jsx'

const GridExample = () =>
  /* START */
  <Grid cols="3" gap baseline>
    <A/> <B larger/> <C largest/>
  </Grid>
  /* END */

export default GridExample