import React            from 'react'
import Context          from './Context.js'
import DataTableHeading from './Heading.jsx'

export const Headings = ({
  columns,
  headingsClass='headings',
  visibleColumns,
  Heading=DataTableHeading,
}) =>
  <thead>
    <tr className={headingsClass}>
      { visibleColumns.map(
        name =>
          <Heading
            key={name}
            name={name}
            column={columns[name]}
          />
      )}
    </tr>
  </thead>

export const DataTableHeadings = Context.Consumer(Headings)
export default DataTableHeadings
