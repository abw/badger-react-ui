import React from 'react'
import { Datatable } from '@/src/index.jsx'
import { multiSort } from '@abw/badger-utils'

const DatatableExample = () =>
  /* START */
  <Datatable
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

export default DatatableExample