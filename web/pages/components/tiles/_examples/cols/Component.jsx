import React from 'react'
import { Tiles } from '@/src/index'

const TilesExample = () =>
  /* START */
  <Tiles gap={2}>
    <div className="cols-2 surface-3 pad-2 border bdr-1">A</div>
    <div className="surface-3 pad-2 border bdr-1">B</div>
    <div className="surface-3 pad-2 border bdr-1">C</div>
    <div className="surface-3 pad-2 border bdr-1">D</div>
    <div className="surface-3 pad-2 border bdr-1">E</div>
    <div className="cols-2 surface-3 pad-2 border bdr-1">F</div>
    <div className="cols-4 surface-3 pad-2 border bdr-1">G</div>
  </Tiles>
  /* END */

export default TilesExample