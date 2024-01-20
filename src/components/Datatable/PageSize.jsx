import React    from 'react'
import Context  from './Context.js'
import DropdownMenu from '@/components/DropdownMenu/DropdownMenu.jsx'

const PageSize = ({
  setPageSize,
  pageSizes=[10, 25, 50, 100, 250, 500, 1000],
}) =>
  <div className="pagesize">
    <DropdownMenu
      right
      iconRight="page"
      text='Page Size'
      size="small"
      options={
        pageSizes.map(
          n => ({ n, text: `${n} per page` })
        )
      }
      onSelect={item => setPageSize(item.n)}
    />
  </div>

export const DatatablePageSize = Context.Consumer(PageSize)
export default DatatablePageSize