import React from 'react'
import { Datatable } from '@/src/index.jsx'

const DatatableExample = () =>
  /* START */
  <Datatable
    rows={[
      { id: 10101, name: 'Alan'    },
      { id: 1010,  name: 'Brian'   },
      { id: 101,   name: 'Charlie' },
    ]}
    columns={{
      id:     { type: 'number' },
      name:   { },
    }}
  />
  /* END */

export default DatatableExample