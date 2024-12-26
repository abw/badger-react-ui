import React from 'react'
import DTRows from './_examples/DataTableRows.jsx'

const Testing = () =>
  <div className="flow">
    <h1>DataTable Rows and Page Reset</h1>
    <p>
      When a <code>storageKey</code> is defined the current page is stored
      in local storage.  But the rows may change at some point and the page
      should be reset to 1.
    </p>
    <DTRows/>
  </div>

export default Testing