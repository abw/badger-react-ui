import React    from 'react'
import Context  from './Context.js'
import Dropdown from '@/components/Dropdown/Dropdown.jsx'

const PageSize = ({
  setPageSize,
  pageSizes=[10, 25, 50, 100, 250, 500, 1000],
}) =>
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

export default Context.Consumer(PageSize)