import React          from 'react'
import Context        from './Context'
import DefaultHeading from './Heading'
import { HEADINGS }   from './constants'

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
