import React from 'react'
import animals from '@/web/pages/components/datatable/_examples/animals.js'
import { DataTable } from '@/src/index'
import { Button } from '@/src/index'

// { name: 'Alan',       animal: 'Anteater', id: 10,  role: 'admin' },
const cols1 = ['name', 'animal']
const cols2 = ['name', 'animal', 'id']
const cols3 = ['name', 'animal', 'id', 'role']
const colSets = [ cols1, cols2, cols3 ]

const DataTableColumns = () => {
  const [columns, setColumns] = React.useState(cols1)

  return (
    <div className="grid-1 gap-4">
      <DataTable
        rows={animals}
        columns={columns}
        storageKey="testing-datatable-columns"
      />
      <div className="border surface-5 pad-a-2 bdr-1">
        Columns: <span className="weight-500">{columns.join(', ')}</span>
      </div>
      <div className="grid-3 gap-4">
        { colSets.map(
          (cols, n) =>
            <Button
              key={n}
              onClick={() => setColumns(cols)}
              text={cols.join(', ')}
            />
        )}
      </div>
    </div>
  )
}

export default DataTableColumns