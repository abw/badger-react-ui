import React              from 'react'
import Context            from './Context.js'
import DataTableSummary   from './Summary.jsx'
import DataTableControls  from './Controls.jsx'
import Button             from '@/components/Button/Button.jsx'

const Header = ({
  page,
  setPageNo,
  prevIcon='arrow-left',
  nextIcon='arrow-right',
  navSize='smaller',
  headerClass='small flex space bottom gap-2',
  Summary=DataTableSummary,
  Controls=DataTableControls,
}) =>
  <header className={headerClass}>
    <Button
      icon={prevIcon}
      size={navSize}
      disabled={page.pageNo <= page.firstPage}
      outline
      onClick={() => setPageNo(page.pageNo - 1)}
    />
    <div>
      <Summary/>
      <Controls/>
    </div>
    <Button
      icon={nextIcon}
      size={navSize}
      disabled={page.pageNo >= page.lastPage}
      outline
      onClick={() => setPageNo(page.pageNo + 1)}
    />
  </header>

export const DataTableHeader = Context.Consumer(Header)
export default DataTableHeader