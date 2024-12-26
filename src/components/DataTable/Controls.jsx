import React             from 'react'
import Context           from './Context.js'
import DataTablePageSize from './PageSize.jsx'
import DataTableColumns  from './Columns/Columns.jsx'
import DataTableFiltering from './Filtering.jsx'

const Controls = ({
  PageSize=DataTablePageSize,
  Columns=DataTableColumns,
  Filtering=DataTableFiltering,
  controlsClass='controls flex center wrap gap-2 mar-b-1'
}) =>
  <div className={controlsClass}>
    <Filtering/>
    <Columns/>
    <PageSize/>
  </div>

export const DataTableControls = Context.Consumer(Controls)
export default DataTableControls