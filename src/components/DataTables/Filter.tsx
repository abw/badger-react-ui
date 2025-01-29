import Context      from '@/components/DataTable/Context'
import Components   from '../DataTable/Filter/index'
import Icon         from '@/components/Icon/Icon'
import { classes }  from '@/src/utils/classes'
import { hasValue, isBoolean } from '@abw/badger-utils'
import { CLEAR_ICON } from '@/src/constants'
import { DataTablesFilterProps } from './types'
import {
  DATATABLE_FILTER_CLASS, DATATABLE_FILTER_ICON, DATATABLE_FILTERING_CLASS
} from '../DataTable/constants'

export const DataTablesFilter = Context.Consumer<DataTablesFilterProps>(
  ({
    name,
    column,
    filters,
    setFilter,
    filterClass=DATATABLE_FILTER_CLASS,
    filteringClass=DATATABLE_FILTERING_CLASS,
    filterIcon=DATATABLE_FILTER_ICON,
    clearFilterIcon=CLEAR_ICON,
  }) => {
    const filterName = column.filterType || column.type
    const Component = column.filterComponent
      || Components[filterName]
      || Components.default

    return (
      <div
        className={
          classes(
            filterClass,
            'field mar-v-none',
            hasValue(filters?.[name])
              ? filteringClass
              : null,
          )}
      >
        <label>{column.heading}</label>
        <div className="inputs">
          <Component
            value={filters[name] ?? ''}
            setFilter={value => setFilter(name, value)}
            column={column}
            placeholder={column.filterPlaceholder || 'Filter'}
          />
          <div className="suffix">
            <Icon
              name={
                (isBoolean(filters[name]) || filters[name])
                  ? clearFilterIcon
                  : filterIcon
              }
              onClick={() => setFilter(name, undefined)}
            />
          </div>
        </div>
      </div>
    )
  }
)

export default DataTablesFilter
