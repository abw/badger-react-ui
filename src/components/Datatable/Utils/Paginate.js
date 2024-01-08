// NOTES:
// * pageNo is a "human readable" page number, starting at 1
// * page is the "machine readable" page number, starting at 0
export const datatablePaginate = (
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

