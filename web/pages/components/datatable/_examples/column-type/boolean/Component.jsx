import React from 'react'
import { Datatable } from '@/src/index.jsx'

const DatatableExample = () =>
  /* START */
  <Datatable
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
        type:    'boolean',
        heading: 'Admin'
      },
      isdev:   {
        type:      'boolean',
        heading:   'Developer',
        trueText:  'Developer',
        falseText: 'Mortal'
      },
    }}
  />
  /* END */

export default DatatableExample