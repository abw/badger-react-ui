// DEPRECATED?
import React                from 'react'
import Context              from './Context.js'
import { noValue }          from '@abw/badger-utils'
import { Select, Checkbox } from '@/src/index.jsx'

const Sort = ({
  sortColumn,
  setSortColumn,
  sortReverse,
  setSortReverse,
  columns
}) =>
  <>
    <div className="field">
      <label>Sort By</label>
      <Select
        wide
        value={sortColumn}
        options={
          Object.entries(columns).map(
            ([id, { label }]) => ({ id, label })
          )
        }
        onSelect={option => setSortColumn(option.id)}
      />
    </div>
    <div className="field pad-t-label">
      <Checkbox
        text="Descending"
        checked={sortReverse}
        onChange={setSortReverse}
        disabled={noValue(sortColumn)}
      />
    </div>
  </>

export default Context.Consumer(Sort)