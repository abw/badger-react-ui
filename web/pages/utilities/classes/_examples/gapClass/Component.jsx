import { classes, gapClass } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { classes, gapClass } from '@abw/badger-react-ui

const MyTiles = ({ gap }) =>
  <div className={classes('tiles', gapClass(gap))}>
    { ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(
      letter =>
        <div key={letter} className="surface-3 pad-2 border bdr-1">
          {letter}
        </div>
    )}
  </div>

const GapClassExamples = () =>
  <div className="grid-1 gap-6">
    <MyTiles gap={2}/>
    <MyTiles gap={[2, 4]}/>
    <MyTiles gap="3 1"/>
  </div>

export default GapClassExamples