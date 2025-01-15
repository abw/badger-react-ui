import React from 'react'
import { Overlay, VisibleState, Button, Info } from '@/src/index'

const OverlayExample = () => {
  const { isVisible, show, hide } = VisibleState()

  return (
    <div className="relative pad-6 border">
      <Button
        onClick={show}
        color="green"
        text="Show Overlay"
      />
      { isVisible &&
        /* START */
        <Overlay
          fixed
          className="flex center middle"
          onClick={hide}
        >
          <div className="max-width-40rem pad-a-4">
            <p className="larger">
              I do not, for one, think that the problem was that the
              band was down. I think that the problem may have been...
              that there was a Stonehenge monument on the stage that
              was in danger of being crushed by a dwarf. Alright? That
              tended to understate the hugeness of the object.
            </p>
            <Info
              border
              icon="info"
              title="onClick handler to hide"
              text="Click anywhere to hide the overlay."
            />
          </div>
        </Overlay>
        /* END */
      }
    </div>
  )
}

export default OverlayExample