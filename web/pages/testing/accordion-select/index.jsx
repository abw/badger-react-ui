import React from 'react'
import AccordionSelect from './_examples/AccordionSelect.jsx'
import DetailsSelect from './_examples/DetailsSelect.jsx'

const Testing = () =>
  <div className="flow">
    <h1>Accordion Select</h1>
    <p>
      The bugfinder general (thanks Sam!) found what looks like an overflow
      bug with a select component inside an accordion.  It looks like it&apos;s
      not just in Accordion but also in Details...
    </p>
    <p>
      ...fixed by a simple change in badger-css,
      setting <code>overflow: visible</code> in the <code>details</code> CSS.
    </p>
    <h2>Accordion</h2>
    <AccordionSelect/>
    <h2>Details</h2>
    <DetailsSelect/>
  </div>

export default Testing