import { DataTable, useDataTable } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import { DataTable, useDataTable } from '@abw/badger-react-ui

const DataTableExample = () =>
  <DataTable
    rows={[
      { text: 'Write code',             status: 'Done' },
      { text: 'Write more code',        status: 'Done' },
      { text: 'Write documentation',    status: 'In progress' },
      { text: 'Write tests',            status: 'Todo' },
      { text: 'Go to ten',              status: 'Done' },
      { text: 'Go to eleven',           status: 'Failed' },
      { text: 'Eat breakfast',          status: 'Todo' },
      { text: 'Drink coffee',           status: 'Done' },
      { text: 'Drink more coffee',      status: 'Done' },
      { text: 'Make a fuss of the dog', status: 'Done' },
      { text: 'More dog fussing',       status: 'Done' },
      { text: 'Walk the dog',           status: 'Todo' },
    ]}
    columns={{
      text: {
        display: ({ row, rowIndex }) => {
          const { page } = useDataTable()
          return (
            <>
              <b>{page.from + rowIndex}</b>: {row.text}
            </>
          )
        }
      },
      status: true,
    }}
    rowClass={
      ({ row }) => {
        const { statusClasses } = useDataTable()
        return statusClasses[row.status] || ''
      }
    }
    tableClass="lined shaded"
    statusClasses={{
      'Done':         'green',
      'In progress':  'blue',
      'Failed':       'red'
    }}
  />

export default DataTableExample