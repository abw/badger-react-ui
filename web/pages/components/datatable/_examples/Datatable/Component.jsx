import { Datatable } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Datatable } from '@abw/badger-react-ui
import { animals } from '../data.js'

const DatatableExample = () => {
  return (
    <Datatable
      // color="green"
      rows={animals}
      columns="id name animal role"
    />
  )
}

export default DatatableExample