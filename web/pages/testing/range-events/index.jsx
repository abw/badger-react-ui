import React from 'react'
import Range from './_examples/Range.jsx'

const Testing = () =>
  <div>
    <h1>Range Events</h1>
    <p>
      Strange things are afoot at the Circle-K when using this in a live
      search.  Even after releasing the mouse after dragging an endpoint,
      the thumb still moves.  Alas, this only manifests itself on Chrome
      on Windows.
    </p>
    <p>
      My hunch is that window event listeners aren&apos;t being deleted.
      I&apos;ve added an explicit <code>componentWillUnmount</code> method
      to the range context which should hopefully remove all window listeners.
    </p>
    <p>
      To tickle the bug I think we have to redraw the range while a drag is
      in process.  Drag the maximum end of this range slide.  It should
      change color as you do.  80 and above is red, 50 to 79 is yellow, 49 and
      below is green.  When you go below 10 the range is removed and replaced
      with a button to turn it on, turn it on again.  When the range is removed
      you should see messages in the console log saying that all window event
      listeners have been removed.
    </p>
    <Range/>
  </div>

export default Testing