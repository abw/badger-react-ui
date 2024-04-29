import React          from 'react'
import Context        from './Context.js'
import DefaultHeading from './Heading.jsx'
import { HEADINGS }   from './Constants.js'

export const Headings = ({
  columns,
  headingsClass=HEADINGS,
  visibleColumns,
  Heading=DefaultHeading,
}) =>
  <thead>
    <tr className={headingsClass}>
      { visibleColumns
        .filter( name => columns[name] )
        .map(
          name =>
            <Heading
              key={name}
              name={name}
              column={columns[name]}
            />
        )
      }
    </tr>
  </thead>

export const DataTableHeadings = Context.Consumer(Headings)
export default DataTableHeadings
