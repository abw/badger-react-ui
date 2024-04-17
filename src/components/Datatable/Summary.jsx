import React    from 'react'
import Context  from './Context.js'
import { formatNumber } from '@abw/badger-utils'

const Summary = ({
  page,
  summaryClass='flex center balance mar-b-2'
}) =>
  <div className={summaryClass}>
    Page {page.pageNo}/{page.lastPage}{' '}
    { page.none
      ? 'no rows'
      : page.one
        ? 'one row'
        : page.all
          ? `all ${formatNumber(page.total)} rows`
          : `rows ${formatNumber(page.from)}-${formatNumber(page.to)} of ${formatNumber(page.total)}`

    }
    {' '}
  </div>

export const DatatableSummary = Context.Consumer(Summary)
export default DatatableSummary