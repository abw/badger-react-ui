import React   from 'react'
import Context from './Context.js'
import { commas } from '@abw/badger-utils'

const Summary = ({
  page,
  summaryClass='small'
}) =>
  <div className={summaryClass}>
    Page {page.pageNo} of {page.lastPage}. {' '}
    { page.none
      ? 'No rows.'
      : page.one
        ? 'One row.'
        : page.all
          ? `All ${commas(page.total)} rows.`
          : `Rows ${commas(page.from)} to ${commas(page.to)} of ${commas(page.total)}.`

    }
  </div>

export const DatatableSummary = Context.Consumer(Summary)
export default DatatableSummary