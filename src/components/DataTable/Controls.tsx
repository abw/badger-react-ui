import React             from 'react'
import Context           from './Context'
import DataTablePageSize from './PageSize'
import DataTableColumns  from './Columns/Columns'
import DataTableFiltering from './Filtering'

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