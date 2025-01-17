export const pagerPageLabel = (n: number) =>
  `Go to page ${n}`

export const pagerPreviousPageLabel = (n?: number) =>
  n
    ? `Previous page, page ${n}`
    : `No previous page`

export const pagerNextPageLabel = (n?: number) =>
  n
    ? `Next page, page ${n}`
    : `No next page`
