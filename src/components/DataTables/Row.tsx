import Context from '../DataTable/Context'
import defaultDisplayTypes from '@/components/DataTable/Display'
import { classes } from '@/src/utils/classes'
import { FILTERING, SORTING, HEADING } from '@/components/DataTable/constants'
import { hasValue, maybeFunction } from '@abw/badger-utils'
import Icon from '@/components/Icon/Icon'
import { alignClasses } from '@/src/utils'
import { DataTablesRowProps } from './types'

export const DataTablesRow = Context.Consumer<DataTablesRowProps>(
  ({
    row,
    column,
    name,
    value,
    rowIndex,
    cellIndex,
    cellClass,
    filters,
    sortColumn,
    sortReverse,
    sortUpIcon='arrow-up',
    sortDownIcon='arrow-down',
    unsortedIcon='arrows',
    sortIconClass=`sort-icon`,
    toggleSortColumn,
    headingClass=HEADING,
    sortingClass=SORTING,
    filteringClass=FILTERING,
    displayTypes=defaultDisplayTypes
  }) => {
    const type     = column.type    || 'text'
    const Display  = column.display || displayTypes[type] || displayTypes.default
    const sorting  = sortColumn === name
    const reverse  = sorting && sortReverse
    const sortable = column.sortable
    const onClick: React.MouseEventHandler | undefined = sortable
      ? () => toggleSortColumn(name)
      : undefined

    const sharedClasses = [
      sorting ? sortingClass : null,
      hasValue(filters[name]) ? filteringClass : null,
      (column.right ? alignClasses.right : null),
      (column.center ? alignClasses.center : null),
      column.align && alignClasses[column.align]
    ]
    const headclass = classes(
      'split-3',
      headingClass,
      { sortable },
      ...sharedClasses
    )
    const cellclass = classes(
      cellClass,
      maybeFunction(
        column.className,
        { row, column, value, name, rowIndex, cellIndex }
      ) as string,
      ...sharedClasses
    )

    return (
      <tr>
        <th className={headclass} onClick={onClick}>
          <div className="flex space middle">
            <span className="wide label">{column.heading}</span>
            { Boolean(sortable) &&
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
        <td className={cellclass}>
          <Display
            row={row}
            column={column}
            value={value}
            name={name}
            field={name}
            rowIndex={rowIndex}
            cellIndex={cellIndex}
          />
        </td>
      </tr>
    )
  }
)

export default DataTablesRow