import Context       from './Context'
import DefaultRow    from './Row'
import DefaultNoRows from './NoRows'

export const DataTableRows = Context.Consumer(
  ({
    page,
    Row=DefaultRow,
    NoRows=DefaultNoRows
  }) =>
    <tbody>
      { page.rows.length
        ? page.rows.map(
          (row, rowIndex) =>
            <Row
              key={String(row.id ?? rowIndex)}
              row={row}
              rowIndex={rowIndex}
            />
        )
        : <NoRows/>
      }
    </tbody>
)

export default DataTableRows