import Context        from './Context'
import DataTableTable from './Table'

export const DataTableBody = Context.Consumer(
  ({
    scrollX,
    scrollXClass,
    Table=DataTableTable,
  }) =>
    <div className={scrollX ? scrollXClass : ''}>
      <Table/>
    </div>
)

export default DataTableBody