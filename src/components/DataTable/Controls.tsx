import Context from './Context'
import DataTableColumns from './Columns/Columns'
import DataTablePageSize from './PageSize'
import DataTableFiltering from './Filtering'

export const DataTableControls = Context.Consumer(
  ({
    PageSize=DataTablePageSize,
    Columns=DataTableColumns,
    Filtering=DataTableFiltering,
    controlsClass
  }) =>
    <div className={controlsClass}>
      <Filtering/>
      <Columns/>
      <PageSize/>
    </div>
)

export default DataTableControls