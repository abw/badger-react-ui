import React from 'react'
import { Datatable } from '@/src/index.jsx'
import { animals } from '../data.js'

const DatatableExample = () =>
  /* START */
  <Datatable
    color="brand"
    rows={animals}
    columns={[
      { field: 'id',   heading: 'Ref.', type: 'number' },
      { field: 'name', heading: 'Username' },
      { field: 'animal' },
      { field: 'role'   },
    ]}
  />
  /* END */

export default DatatableExample
