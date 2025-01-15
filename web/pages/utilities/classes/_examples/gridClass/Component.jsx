import { classes, gridClass } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import { classes, gridClass } from '@abw/badger-react-ui

const GridClassExamples = () =>
  <div className="grid-1 gap-6">
    <MyGrid grid/>
    <MyGrid grid="2" gap="2"/>
    <MyGrid grid={4} gap="2"/>
  </div>

const MyGrid = ({ grid }) =>
  <div className={classes('gap-2', gridClass(grid))}>
    { ['A', 'B', 'C', 'D'].map(
      letter =>
        <div key={letter} className="surface-3 pad-2 border bdr-1">
          {letter}
        </div>
    )}
  </div>


export default GridClassExamples