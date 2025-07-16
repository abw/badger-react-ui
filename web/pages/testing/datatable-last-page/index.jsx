import React from 'react'
import Example from './_examples/DataTableLastPage.jsx'

const Testing = () =>
  <div className="flow">
    <h1>DataTable Last Page</h1>
    <p>
      Saw something weird in the summary on the last page when it only contained
      a single item (row 21): "Page 3/3 all 21 rows".  Fixed to now say
      "Page 3/3 row 21 of 21".
    </p>
    <Example/>
  </div>

export default Testing