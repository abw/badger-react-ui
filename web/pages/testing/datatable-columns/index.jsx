import React from 'react'
import DTColumns from './_examples/DataTableColumns.jsx'

const Testing = () =>
  <div className="flow">
    <h1>DataTable Columns</h1>
    <p>
      When a <code>storageKey</code> is defined the visible columns are stored
      in local storage.  But the column definitions may change at some point.
      We need to make sure that any new columns are added and any old columns
      are removed.
    </p>
    <DTColumns/>
  </div>

export default Testing