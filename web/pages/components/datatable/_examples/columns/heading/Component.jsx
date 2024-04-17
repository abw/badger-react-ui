import React from 'react'
import { Datatable } from '@/src/index.jsx'
import { animals } from '../../data.js'

const DatatableExample = () => {
  return (
    /* START */
    <Datatable
      rows={animals}
      columns={{
        id:   { heading: 'User ID' },
        name: { heading: 'User Name' }
      }}
    />
    /* END */
  )
}

export default DatatableExample