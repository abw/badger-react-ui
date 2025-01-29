import { DataTable } from '@/src/index'
import animals from '@/test/lib/animals'

const DataTableExample = () =>
  /* START */
  <DataTable
    rows={animals}
    debug
    columns={{
      name: true,
      animal: true,
      id: {
        hidden: true
      },
      role: {
        hidden: true
      },
    }}
  />
  /* END */

export default DataTableExample