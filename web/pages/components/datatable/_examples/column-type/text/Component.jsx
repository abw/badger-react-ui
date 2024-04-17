import React from 'react'
import { Datatable } from '@/src/index.jsx'

const DatatableExample = () =>
  /* START */
  <Datatable
    rows={[
      { name: 'Alan'    },
      { name: 'Brian'   },
      { name: 'Charlie' },
    ]}
    columns="name"
  />
  /* END */

export default DatatableExample