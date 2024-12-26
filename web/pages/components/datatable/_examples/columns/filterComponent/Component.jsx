import React from 'react'
import { DataTable } from '@/src/index.jsx'
import { Select } from '@/src/index.jsx'

const DataTableExample = () =>
  /* START */
  <DataTable
    rows={[
      { name: 'Alan',    animal: 'Ant'    },
      { name: 'Amy',     animal: 'Ant'    },
      { name: 'Brian',   animal: 'Badger' },
      { name: 'Brenda',  animal: 'Badger' },
      { name: 'Colin',   animal: 'Camel'  },
      { name: 'Carmine', animal: 'Camel'  },
    ]}
    columns={{
      name: true,
      animal: {
        filterComponent: ({ value, setFilter, placeholder }) =>
          <Select
            value={value}
            options={['Ant', 'Badger', 'Camel']}
            onSelect={setFilter}
            wide
            placeholder={placeholder}
          />
      },
    }}
  />
  /* END */

export default DataTableExample