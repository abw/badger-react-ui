import React from 'react'
import Context  from './Context.js'
import { Select, Checkbox } from '@/src/index.jsx'
import { noValue } from '@abw/badger-utils'

const Sort = ({
  sortColumn,
  setSortColumn,
  sortReverse,
  setSortReverse,
  columns
}) =>
  <div className="field">
    <label>Sort By</label>
    <div className="flex gap-2">
      <Select
        value={sortColumn}
        options={
          Object.entries(columns).map(
            ([id, { label }]) => ({ id, label })
          )
        }
        onSelect={option => setSortColumn(option.id)}
      />
      <Checkbox
        text="Descending"
        checked={sortReverse}
        onChange={setSortReverse}
        disabled={noValue(sortColumn)}
      />
    </div>
  </div>

export default Context.Consumer(Sort)