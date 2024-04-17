import React             from 'react'
import Context           from './Context.js'
import DatatablePageSize from './PageSize.jsx'
import DatatableColumns  from './Columns/Columns.jsx'
import DatatableFiltering from './Filtering.jsx'

const Controls = ({
  PageSize=DatatablePageSize,
  Columns=DatatableColumns,
  Filtering=DatatableFiltering,
  controlsClass='controls flex center gap-2 mar-b-1'
}) =>
  <div className={controlsClass}>
    <Filtering/>
    <Columns/>
    <PageSize/>
  </div>

export const DatatableControls = Context.Consumer(Controls)
export default DatatableControls