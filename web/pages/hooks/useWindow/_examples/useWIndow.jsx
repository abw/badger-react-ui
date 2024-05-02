import { Icon, useWindow } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { useWindow, Icon } from '@abw/badger-react-ui

const UseWindowExample = () => {
  const { width, height, breakpoint } = useWindow()

  return (
    <div className="flex gap-4 center start small">
      <div className="inverse green pad-a-2 flex gap-2 middle font-mono bdr-1">
        <Icon name="arrows-right"/>
        {width}px
      </div>
      <div className="inverse teal pad-a-2 font-mono bdr-1">
        {breakpoint}
      </div>
      <div className="inverse blue pad-a-2 flex gap-2 middle font-mono bdr-1">
        <Icon name="arrows"/>
        {height}px
      </div>
    </div>
  )
}

export default UseWindowExample