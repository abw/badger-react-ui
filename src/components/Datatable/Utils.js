import {
  capitalise, descendingOrder, fail, integerSort, isArray, isFunction, isString, numberSort, range,
  splitHash, stringSort
} from '@abw/badger-utils'

export const columnString = column => {
  const field = column
  const type  = 'text'
  const label = capitalise(field)
  return { field, type, label }
}

export const columnDefinition = column => {
  if (isString(column)) {
    column = { field: column }
  }
  const { field } = column
  column.type ||= 'text'
  column.label ||= capitalise(field)
  return column
}

export const columnDefinitions = columns => {
  if (isString(columns)) {
    return splitHash(
      columns,
      columnDefinition
    )
  }
  if (isArray(columns)) {
    return columns.reduce(
      (colshash, column) => {
        const coldef = columnDefinition(column)
        colshash[coldef.field] = coldef
        return colshash
      },
      { }
    )
  }
  fail(`Invalid columns definition`)
}

export const extractVisibleColumns = columns =>
  Object.keys(columns).filter(
    column => ! columns[column].hidden
  )

export const sorters = {
  string:  stringSort,
  text:    stringSort,
  number:  numberSort,
  price:   numberSort,
  pounds:  numberSort,
  integer: integerSort,
  id:      integerSort,
}

export const sort = (
  rows,
  columns,
  sortColumn,
  sortReverse
) => {
  if (! sortColumn) {
    return rows
  }
  const column = columns[sortColumn]
  const sort   = column.sort
  const type   = column.type || 'text'
  const sorter = isFunction(sort)
    ? sort
    : (sorters[type] || sorters.text)(sortColumn)

  return rows.sort(
    sortReverse
      ? descendingOrder(sorter)
      : sorter
  )
}

// NOTES:
// * pageNo is a "human readable" page number, starting at 1
// * page is the "machine readable" page number, starting at 0
export const paginate = (
  rows,
  pageNo=1,
  pageSize=rows.length
) => {
  const total = rows.length
  const pages = Math.ceil(total / pageSize)

  // we may have an pageNo set from a previous data set which had more items
  // which is no longer valid, so we clamp it to the new number of pages
  pageNo = Math.min(pageNo, pages)
  const page = pageNo - 1

  // compute the indexes of the first and last items on the current page
  const firstIndex = pageSize * page
  const lastIndex  = Math.min(firstIndex + pageSize, total - 1)
  const items      = rows.slice(firstIndex, lastIndex + 1)

  return {
    pageSize, pages,
    page, pageNo,
    firstIndex, lastIndex,
    rows: items,
  }
}




// TODO: this need completely reworking - some of the logic and state here
// dates back ~20 years to an old server-side paging implementation in Perl!
export const OLDpaginate = (
  rows,
  pageNo=1,
  pageSize=rows.length
) => {
  const total    = rows.length
  const lastPage = Math.ceil(total / pageSize)
  pageNo = Math.min(pageNo, lastPage)

  let firstIndex = pageSize * (pageNo - 1)
  let lastIndex  = firstIndex + pageSize
  let items      = rows.slice(firstIndex, lastIndex)

  // we may have got less than a whole page so we might as well re-calculate lastIndex
  lastIndex = firstIndex + items.length - 1

  const thisSize    = items.length
  const onFirstPage = (pageNo === 1)
  const onLastPage  = (lastIndex >= total - 1)
  let rangeFrom     = (pageNo > 1 ? pageNo - 1 : pageNo)
  let rangeTo       = (pageNo < lastPage ? pageNo + 1 : lastPage)

  // I think this is crazy logic to handle the case where page size is changed
  // and leaves the range sitting outside the number of rows.
  if (rangeTo - rangeFrom < 2) {
    if (rangeFrom > 1) {
      rangeFrom--
    }
    else if (rangeTo < lastPage) {
      rangeTo++
    }
  }
  if (rangeFrom > rangeTo) {
    rangeFrom = 0
    rangeTo   = 0
  }

  // There's a subtle bug here.  If you set page size to 10, for example,
  // and select page 8 for the last page of 85 results, then set page size
  // to 100.
  //console.log("FIXED rangeFrom: %s   rangeTo: %s", rangeFrom, rangeTo);

  return {
    rows:          items,
    from:          firstIndex + 1,
    to:            lastIndex + 1,
    size:          thisSize,
    total:         total,
    all:           onFirstPage && onLastPage,
    one:           (total === 1),
    none:          ! total,
    less:          ! onFirstPage,
    more:          ! onLastPage,
    pageNo:        pageNo,
    pageSize:      pageSize,
    thisPageSize:  thisSize,
    onFirstPage:   onFirstPage,
    onLastPage:    onLastPage,
    prevPage:      onFirstPage ? undefined : pageNo - 1,
    nextPage:      onLastPage ? undefined : pageNo + 1,
    lastPage:      lastPage,
    pageRange:     rangeFrom && rangeTo ? range(rangeFrom, rangeTo) : [ ],
    showFirst:     rangeFrom > 1,
    showLast:      rangeTo < lastPage,
    separateFirst: rangeFrom - 1 > 1,
    separateLast:  lastPage - rangeTo > 1,
  }
}


