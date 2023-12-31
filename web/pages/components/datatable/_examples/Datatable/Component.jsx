import { Datatable } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Datatable } from '@abw/badger-react-ui
import { animals } from '../data.js'

const DatatableExample = () => {
  return (
    <Datatable
      color="brand"
      rows={animals}
      columns="id name animal role"
      pager={{ size: 'small' }}
    />
  )
}

export default DatatableExample