import Context from './Context'

export const DataTableSummary = Context.Consumer(
  ({
    page,
    noRows,
    oneRow,
    allRows,
    someRows,
    summaryClass
  }) =>
    <div className={summaryClass}>
      Page {page.pageNo}/{page.lastPage}{' '}
      { page.none
        ? noRows
        : page.one
          ? oneRow
          : page.all
            ? allRows(page.total)
            : someRows(page.from, page.to, page.total)
      }
      {' '}
    </div>
)

export default DataTableSummary