import React            from 'react'
import Context          from './Context.js'
import DatatableHeading from './Heading.jsx'

export const Headings = ({
  columns,
  headingsClass='headings',
  visibleColumns,
  Heading=DatatableHeading,
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

export const DatatableHeadings = Context.Consumer(Headings)
export default DatatableHeadings
