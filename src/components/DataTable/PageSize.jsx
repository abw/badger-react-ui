import React    from 'react'
import Context  from './Context.js'
import DropdownMenu from '@/components/DropdownMenu/DropdownMenu.jsx'

const PageSize = ({
  setPageSize,
  pageSizes=[10, 25, 50, 100, 250, 500, 1000],
  pageSizeText = n => `${n} per page`
}) =>
  <div className="pagesize">
    <DropdownMenu
      right
      iconRight="page"
      text='Page Size'
      size="small"
      triggerClass="trigger pad-v-none"
      options={
        pageSizes.map(
          n => ({ n, text: pageSizeText(n) })
        )
      }
      onSelect={item => setPageSize(item.n)}
    />
  </div>

export const DataTablePageSize = Context.Consumer(PageSize)
export default DataTablePageSize