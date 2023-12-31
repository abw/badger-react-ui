import React    from 'react'
import Context  from './Context.js'
// import Dropdown from '@/components/Dropdown/Dropdown.jsx'
import Select   from '@/components/Select/Select.jsx'

const PageSize = ({
  pageSize,
  setPageSize,
  pageSizes=[10, 25, 50, 100, 250, 500, 1000],
}) =>
  <div className="field">
    <label>Page Size</label>
    <Select
      value={pageSize}
      options={pageSizes}
      onSelect={option => setPageSize(option)}
    />
  </div>

/*
  <Dropdown
    right
    iconRight="angle-down"
    text='Page Size'
    size="small"
    options={
      pageSizes.map(
        n => ({ n, text: `${n} per page` })
      )
    }
    onSelect={item => setPageSize(item.n)}
  />
*/

export default Context.Consumer(PageSize)