import Context from '@/components/DataTable/Context'
import NoRows from './NoRows'
import Table from './Table'
import DefaultFilters from './Filters'
import { DataTablesBodyProps } from './types'

export const DataTablesBody = Context.Consumer<DataTablesBodyProps>(
  ({
    page,
    showFilters,
    bodyClass='grid-1 gap-4 mar-v-4',
    Filters=DefaultFilters
  }) =>
    <div className={bodyClass}>
      { Boolean(showFilters) &&
        <Filters/>
      }
      { page.rows.length
        ? page.rows.map(
          (row, rowIndex) =>
            <Table
              key={row.id as string ?? rowIndex}
              row={row}
              rowIndex={rowIndex}
            />
        )
        : <NoRows/>
      }
    </div>
)

export default DataTablesBody