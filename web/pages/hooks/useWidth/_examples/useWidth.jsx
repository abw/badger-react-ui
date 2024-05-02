import { useWidth } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { useWidth } from '@abw/badger-react-ui

const UseWidthExample = () => {
  const { width, breakpoint } = useWidth()

  return (
    <div className="flex gap-4 center start">
      <div className="inverse pad-a-2 font-mono bdr-1">
        {width}px
      </div>
      <div className="inverse pad-a-2 font-mono bdr-1">
        {breakpoint}
      </div>
    </div>
  )
}

export default UseWidthExample