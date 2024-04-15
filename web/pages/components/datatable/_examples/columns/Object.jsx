import React from 'react'
import { Datatable } from '@/src/index.jsx'
import { animals } from '../data.js'

const DatatableExample = () =>
  /* START */
  <Datatable
    color="brand"
    rows={animals}
    columns={{
      id:     { label: 'Ref.',     type: 'number' },
      name:   { label: 'Username', type: 'string' },
      animal: { },
      role:   { },
    }}
  />
  /* END */

export default DatatableExample
