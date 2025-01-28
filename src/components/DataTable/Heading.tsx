import Context      from './Context'
import Icon         from '@/components/Icon/Icon'
import { classes }  from '@/src/utils/classes'
import { hasValue } from '@abw/badger-utils'
import { alignClasses } from './Utils/Align'
import { DataTableHeadingProps } from './types'

export const DataTableHeading = Context.Consumer<DataTableHeadingProps>(
  ({
    name,
    column,
    filters,
    sortColumn,
    sortReverse,
    toggleSortColumn,
    sortUpIcon,
    sortDownIcon,
    unsortedIcon,
    sortIconClass,
    sortingClass,
    headingClass,
    filteringClass
  }) => {
    const sorting  = name === sortColumn
    const reverse  = sorting && sortReverse
    const sortable = column.sortable
    const onClick  = sortable
      ? () => toggleSortColumn(name)
      : undefined

    return (
      <th
        className={
          classes(
            headingClass,
            sorting ? sortingClass : null,
            { sortable },
            hasValue(filters[name]) ? filteringClass : null,
            column.right ? alignClasses.right : null,
            column.center ? alignClasses.center : null,
            column.align ? alignClasses[column.align] : null
          )}
        onClick={onClick}
      >
        <div className="flex space middle">
          <span className="wide label">{column.heading}</span>
          { Boolean(column.sortable) &&
            <Icon
              className={sortIconClass}
              name={
                sorting
                  ? reverse ? sortUpIcon : sortDownIcon
                  : unsortedIcon
              }
            />
          }
        </div>
      </th>
    )
  }
)

export default DataTableHeading
