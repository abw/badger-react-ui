import React from 'react'
import { Datatable } from '@/src/index.jsx'

const DatatableExample = () =>
  /* START */
  <Datatable
    rows={[
      { name: 'Alan',    salary: 123456 },
      { name: 'Brian',   salary: 45678  },
      { name: 'Charlie', salary: 56789  },
    ]}
    columns={{
      name:   { },
      salary: { type: 'currency', align: 'right' },
    }}
  />
  /* END */

export default DatatableExample