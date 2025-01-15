import React from 'react'
import { classes, gapClass } from '@/src/utils/classes'
import { Themed } from '@/src/Theme'

const Tiles = ({
  minWidth,
  gap,
  children,
  className,
  tilesClass='tiles',
  style={}
}) => {
  if (minWidth) {
    style['--tile-min-width'] = minWidth
  }
  return (
    <div className={classes(className, tilesClass, gapClass(gap))} style={style}>
      {children}
    </div>
  )
}

export default Themed(Tiles, 'Tiles')