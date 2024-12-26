import React from 'react'
import { Grid } from '@/src/index.jsx'
import { A, B, C, D } from '../Tiles.jsx'

const GridExample = () =>
  <div className="grid-1 gap-8">
    {/* START */}
    <Grid cols="2">
      <A/> <B/> <C/> <D/>
    </Grid>

    <Grid cols="4">
      <A/> <B/> <C/> <D/>
    </Grid>

    <Grid gap="2">
      <A/> <B/> <C/> <D/>
    </Grid>
    {/* END */}
  </div>

export default GridExample