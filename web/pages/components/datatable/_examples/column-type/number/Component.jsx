import React from 'react'
import { DataTable } from '@/src/index.jsx'

const DataTableExample = () =>
  /* START */
  <DataTable
    rows={[
      { id: 10101, name: 'Alan'    },
      { id: 1010,  name: 'Brian'   },
      { id: 101,   name: 'Charlie' },
      { id: 201,   name: 'Derek'   },
      { id: 321,   name: 'Edwina'  },
    ]}
    columns={{
      id:     { type: 'number' },
      name:   { },
    }}
  />
  /* END */

export default DataTableExample