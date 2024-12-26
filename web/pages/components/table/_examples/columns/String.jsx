import React from 'react'
import { Table } from '@/src/index.jsx'


const TableExample = () =>
  /* START */
  <Table
    wide celled shaded
    columns="name instrument"
    rows={[
      { name: 'Nigel Tufnel',       instrument: 'Guitar'    },
      { name: 'David St. Hubbins',  instrument: 'Guitar'    },
      { name: 'Derek Smalls',       instrument: 'Bass'      },
      { name: 'Viv Savage',         instrument: 'Keyboards' },
      { name: 'Mick Shrimpton',     instrument: 'Drums'     }
    ]}
  />
  /* END */

export default TableExample