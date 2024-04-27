import React from 'react'
import { DataTable } from '@/src/index.jsx'

const DataTableExample = () =>
  /* START */
  <DataTable
    rows={[
      { name: 'Alan',    isadmin: true,  isdev: true  },
      { name: 'Brian',   isadmin: false, isdev: true },
      { name: 'Charlie', isadmin: 1,     isdev: false  },
      { name: 'Diana',   isadmin: 0,     isdev: false },
      { name: 'Edwina',  isadmin: '1',   isdev: true  },
      { name: 'Frannie', isadmin: '0',   isdev: false },
    ]}
    columns={{
      name:    { },
      isadmin: {
        heading: 'Admin',
        type:    'boolean',
      },
      isdev:   {
        heading:   'Developer',
        type:      'boolean',
        trueText:  'Developer',
        falseText: 'Mortal'
      },
    }}
  />
  /* END */

export default DataTableExample