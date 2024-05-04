import { useFloating } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { useFloating, Icon } from '@abw/badger-react-ui

const UseFloatingExample = () => {
  const { refs, floatingStyles } = useFloating({
    offset: '-1',
    placement: 'bottom-end'
  })
  return (
    <div>
      <div
        ref={refs.setReference}
        className="border pad-a-2"
      >
        This is the parent
      </div>
      <div
        ref={refs.setFloating}
        style={floatingStyles}
        className="border pad-a-2"
      >
        This is the child
      </div>
    </div>
  )
}

export default UseFloatingExample