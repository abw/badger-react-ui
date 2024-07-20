export const pagerPageLabel = n =>
  `Go to page ${n}`

export const pagerCurrentPageLabel = n =>
  `Current page, page ${n}`

export const pagerPreviousPageLabel = n =>
  n
    ? `Previous page, page ${n}`
    : `No previous page`

export const pagerNextPageLabel = n =>
  n
    ? `Next page, page ${n}`
    : `No next page`
