import React             from 'react'
import Context           from './Context.js'
import DatatableSummary  from './Summary.jsx'
import DatatablePageSize from './PageSize.jsx'
// import DatatableColumns  from './Columns/Columns.jsx'
import DatatableColumns  from './Columns/Columns.jsx'

const Header = ({
  headerClass,
  Summary=DatatableSummary,
  PageSize=DatatablePageSize,
  Columns=DatatableColumns
  // showControls,
}) =>
  <header className={headerClass}>
    <div className="flex space middle">
      <div>
        <Summary/>
      </div>
      <div className="flex gap-2">
        <Columns/>
        <PageSize/>
      </div>
      {/*
      <Icon
        name="cog"
        className="hover"
        onClick={showControls}
      />
      */}
    </div>
  </header>

export const DatatableHeader = Context.Consumer(Header)
export default DatatableHeader