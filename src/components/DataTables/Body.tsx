import React from 'react'
import Context from '../DataTable/Context'
import NoRows from './NoRows'
import Table from './Table'
import DefaultFilters from './Filters'

const Body = ({
  page,
  showFilters,
  bodyClass='grid-1 gap-4 mar-v-4',
  Filters=DefaultFilters
}) =>
  <div className={bodyClass}>
    { Boolean(showFilters) &&
      <Filters/>
    }
    { page.rows.length
      ? page.rows.map(
        (row, rowIndex) =>
          <Table
            key={row.id ?? rowIndex}
            row={row}
            rowIndex={rowIndex}
          />
      )
      : <NoRows/>
    }
  </div>

export default Context.Consumer(Body)