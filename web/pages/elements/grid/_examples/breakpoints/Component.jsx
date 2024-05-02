import React from 'react'
import { Grid } from '@/src/index.jsx'
import { A, B, C, D } from '../Tiles.jsx'

const GridExample = () =>
  /* START */
  <Grid gap cols="3" tablet="2" mobile="1">
    <A/> <B/> <C/> <D/>
  </Grid>
  /* END */

export default GridExample