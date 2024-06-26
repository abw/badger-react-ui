import React from 'react'
import { DataTable } from '@/src/index.jsx'
import { multiSort } from '@abw/badger-utils'

const DataTableExample = () =>
  /* START */
  <DataTable
    rows={[
      { forename: 'Ant',     surname: 'Walker'  },
      { forename: 'Dog',     surname: 'Walker'  },
      { forename: 'Cat',     surname: 'Trainer' },
      { forename: 'Badger',  surname: 'Powers'  },
      { forename: 'Stoaty',  surname: 'Smith'   },
      { forename: 'Charlie', surname: 'Smith'   },
    ]}
    columns={{
      name: {
        sort: multiSort('surname forename'),
        display: ({ row }) =>
          <>
            {row.forename} <b>{row.surname}</b>
          </>,
      },
    }}
  />
  /* END */

export default DataTableExample