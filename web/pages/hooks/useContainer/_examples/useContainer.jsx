import { useContainer, Icon } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { useContainer, Icon } from '@abw/badger-react-ui

const UseWidthExample = () => {
  const { ref, width, height, breakpoint } = useContainer()

  return (
    <div className="flex wrap center start gap-4 pad-4 small border" ref={ref}>
      <div className="inverse green pad-a-2 flex middle gap-2 bdr-1">
        <Icon name="arrows-right"/>
        Width:<span className="font-mono">{width}px</span>
      </div>
      <div className="inverse teal pad-a-2 flex middle gap-2 bdr-1">
        <span className="font-mono">{breakpoint}</span>
      </div>
      <div className="inverse blue pad-a-2 flex middle gap-2 bdr-1">
        <Icon name="arrows"/>
        Height:<span className="font-mono">{height}px</span>
      </div>
    </div>
  )
}

export default UseWidthExample