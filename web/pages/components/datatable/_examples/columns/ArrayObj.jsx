import React from 'react'
import { Datatable } from '@/src/index.jsx'
import { animals } from '../data.js'

const DatatableExample = () => {
  return (
    /* START */
    <Datatable
      color="brand"
      rows={animals}
      columns={[
        { field: 'id',     label: 'Ref.',     type: 'number' },
        { field: 'name',   label: 'Username', type: 'string' },
        { field: 'animal', label: 'Animal',   type: 'string' },
        { field: 'role',   label: 'Role',     type: 'string' },
      ]}
    />
    /* END */
  )
}

export default DatatableExample
