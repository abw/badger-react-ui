import React    from 'react'
import Context  from './Context.js'
import Button   from '../Button/Button.jsx'
import { commas } from '@abw/badger-utils'

const Summary = ({
  page,
  summaryClass='small flex middle gap-2',
  setPageNo
}) =>
  <div className={summaryClass}>
    <Button
      icon="arrow-left"
      size="smaller"
      disabled={page.pageNo <= page.firstPage}
      outline
      onClick={() => setPageNo(page.pageNo - 1)}
    />
    <Button
      icon="arrow-right"
      size="smaller"
      disabled={page.pageNo >= page.lastPage}
      outline
      onClick={() => setPageNo(page.pageNo + 1)}
    />
    <div style={{ textWrap: 'balance' }}>
      Page {page.pageNo}/{page.lastPage}{' '}
      { page.none
        ? 'no rows'
        : page.one
          ? 'one row'
          : page.all
            ? `all ${commas(page.total)} rows`
            : `rows ${commas(page.from)}-${commas(page.to)} of ${commas(page.total)}`

      }
      {' '}
    </div>
  </div>

export const DatatableSummary = Context.Consumer(Summary)
export default DatatableSummary