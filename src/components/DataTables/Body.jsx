import React from 'react'
import Context from '../DataTable/Context.js'
import NoRows from './NoRows.jsx'
import Table from './Table.jsx'
import DefaultFilters from './Filters.jsx'

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