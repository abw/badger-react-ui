
import { DataTablePage, DataTableRows } from '../types'

// NOTES:
// * pageNo is a "human readable" page number, starting at 1
// * page is the "machine readable" page number, starting at 0

export const dataTablePaginate = (
  rows: DataTableRows,
  pageNo: number = 1,
  pageSize: number = rows.length
): DataTablePage => {
  const total = rows.length
  const pages = Math.ceil(total / pageSize)

  // we may have an pageNo set from a previous data set which had more items
  // which is no longer valid, so we clamp it to the new number of pages
  pageNo = Math.min(pageNo, pages)
  const page = pageNo - 1

  // compute the indexes of the first and last items on the current page
  const firstIndex = pageSize * page
  const lastIndex  = Math.min(firstIndex + pageSize - 1, total - 1)
  const items      = rows.slice(firstIndex, lastIndex + 1)

  // all indicates that we're showing all records on a page, one when there's
  // just one record, and none when there's none more record (e.g. because
  // they've all been filtered out)

  return {
    pageSize, pages,
    page, pageNo,
    total,
    firstIndex, lastIndex,
    firstPage:  1,
    lastPage:   pages,
    thisSize:   items.length,
    from:       firstIndex + 1,
    to:         lastIndex + 1,
    all:        firstIndex === lastIndex,
    one:        total === 1,
    none:       total === 0,
    rows:       items,
  }
}

