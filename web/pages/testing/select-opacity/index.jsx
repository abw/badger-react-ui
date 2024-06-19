import React from 'react'
import SelectDisabled from './_examples/SelectDisabled.jsx'

const Testing = () =>
  <div className="flow">
    <h1>Disabled Select Options Opacity</h1>
    <p>
      I noticed that disabled select options are semi-opaque which allows
      the background content to show through.  In this example, &quot;Mick Shrimpton&quot;
      is disabled (permanently - he exploded on stage!).  His option should
      be greyed out but you shouldn&apos;t be able to see the checkerboard
      pattern bleeding through.
    </p>
    <SelectDisabled/>
  </div>

export default Testing