import React             from 'react'
import Context           from './Context.js'
import DatatableSummary  from './Summary.jsx'
import DatatablePageSize from './PageSize.jsx'
import DatatableColumns  from './Columns/Columns.jsx'
import DatatableFiltering from './Filtering.jsx'

const Header = ({
  headerClass,
  Summary=DatatableSummary,
  PageSize=DatatablePageSize,
  Columns=DatatableColumns,
  Filtering=DatatableFiltering,
  controlsClass='controls flex center gap-2'
}) =>
  <header className={headerClass}>
    <div className={controlsClass}>
      <Filtering/>
      <Columns/>
      <PageSize/>
    </div>
    <Summary/>
  </header>

export const DatatableHeader = Context.Consumer(Header)
export default DatatableHeader