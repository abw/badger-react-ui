import { Tiles } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import { Tiles } from '@abw/badger-react-ui

const TilesExample = () =>
  <Tiles gap={2}>
    <Cards/>
  </Tiles>

export const Cards = () =>
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(
    letter =>
      <div
        key={letter}
        className="surface-3 pad-2 border bdr-1"
      >
        {letter}
      </div>
  )

export default TilesExample