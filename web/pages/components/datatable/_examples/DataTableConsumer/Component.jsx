import { DataTable, DataTableConsumer } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import { DataTable, DataTableConsumer } from '@abw/badger-react-ui
import animals from '../animals.js'

const DataTableExample = () =>
  <DataTable
    rows={animals}
    columns={{
      n: {
        display: DataTableConsumer(
          ({ rowIndex, page }) => page.from + rowIndex
        )
      },
      name: true,
      animal: true,
    }}
  />

export default DataTableExample